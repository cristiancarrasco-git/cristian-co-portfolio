import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-8d5cb2ac/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-8d5cb2ac/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, message, subject, page } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return c.json(
        { error: "Missing required fields: name, email, and message are required" },
        400
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Sanitize inputs (basic XSS prevention)
    const sanitizedData = {
      name: String(name).trim().slice(0, 100),
      email: String(email).trim().toLowerCase().slice(0, 100),
      message: String(message).trim().slice(0, 5000),
      subject: subject ? String(subject).trim().slice(0, 200) : '',
      page: page || 'contact',
      timestamp: new Date().toISOString(),
    };

    // Generate a unique ID for the submission
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    // Store in KV store
    await kv.set(submissionId, sanitizedData);

    console.log(`Contact form submission received: ${submissionId} from ${sanitizedData.email}`);

    return c.json({
      success: true,
      message: "Your message has been received. We'll get back to you soon!",
      submissionId,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json(
      { error: "Failed to process contact form submission. Please try again." },
      500
    );
  }
});

// Get all contact submissions (for admin purposes)
app.get("/make-server-8d5cb2ac/contact/submissions", async (c) => {
  try {
    const submissions = await kv.getByPrefix("contact_");
    
    // Sort by timestamp (newest first)
    const sortedSubmissions = submissions.sort((a, b) => {
      const timeA = new Date(a.value.timestamp).getTime();
      const timeB = new Date(b.value.timestamp).getTime();
      return timeB - timeA;
    });

    return c.json({
      success: true,
      count: sortedSubmissions.length,
      submissions: sortedSubmissions,
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return c.json(
      { error: "Failed to fetch contact submissions" },
      500
    );
  }
});

Deno.serve(app.fetch);