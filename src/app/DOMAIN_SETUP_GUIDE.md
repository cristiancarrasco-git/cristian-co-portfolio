# Custom Domain Setup Guide for cristian-co.com

This guide will help you connect your custom domain `cristian-co.com` to your Figma Make portfolio website.

## ✅ Code Preparation (Already Complete)

Your website code is now optimized for the custom domain:
- ✅ Canonical URLs pointing to cristian-co.com
- ✅ Open Graph meta tags with proper URLs
- ✅ Twitter Card meta tags configured
- ✅ Dynamic URL generation based on current page
- ✅ All API endpoints use relative project IDs (no hardcoded domains)

## 📋 Steps to Connect Your Domain

### Step 1: Access Figma Make Domain Settings

1. In your Figma Make project, look for **Settings** or **Publish** options
2. Navigate to **Custom Domain** or **Domain Settings**
3. You may see an option to "Add Custom Domain" or "Connect Domain"

> **Note:** The exact location of domain settings may vary. If you don't see this option, check Figma Make's documentation or contact their support team.

### Step 2: Configure DNS at Your Domain Registrar

You'll need to update DNS records where you purchased `cristian-co.com` (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare).

#### Option A: CNAME Record (Recommended if provided by Figma)
If Figma Make provides a target domain (like `your-project.figma.app`), add:

```
Type: CNAME
Name: @ (or www)
Value: [provided by Figma Make]
TTL: 3600 (or Auto)
```

#### Option B: A Record
If Figma Make provides an IP address, add:

```
Type: A
Name: @ 
Value: [IP address provided by Figma Make]
TTL: 3600 (or Auto)
```

#### For www subdomain:
```
Type: CNAME
Name: www
Value: cristian-co.com
TTL: 3600 (or Auto)
```

### Step 3: SSL Certificate

Most modern hosting platforms (including Figma/Supabase) automatically provision SSL certificates for custom domains. This process typically:
- Takes 15-60 minutes after DNS propagation
- Is handled automatically by the platform
- Enables HTTPS for your domain

### Step 4: Verify Domain Connection

After configuring DNS (wait 24-48 hours for full propagation):

1. Visit `https://cristian-co.com` in your browser
2. Verify the SSL certificate is active (🔒 lock icon)
3. Test all pages to ensure routing works correctly
4. Share a link on social media to verify Open Graph tags work

### Step 5: Update Any External Links

If you've shared your portfolio elsewhere, update:
- LinkedIn profile
- Instagram bio
- Email signatures
- Business cards
- WordPress blog links

## 🔧 Troubleshooting

### Domain Not Loading
- **Wait longer:** DNS changes can take up to 48 hours
- **Clear browser cache:** Try incognito/private browsing mode
- **Check DNS propagation:** Use tools like https://whatsmydns.net/

### SSL Certificate Issues
- **Give it time:** SSL provisioning can take up to an hour
- **Force HTTPS:** Most platforms automatically redirect HTTP to HTTPS
- **Check certificate status:** In browser, click the lock icon to view certificate details

### 404 Errors on Subpages
- **Ensure routing is configured:** The platform needs to support client-side routing for React apps
- **Check .htaccess or equivalent:** May need redirect rules for single-page applications

## 📞 Need Help?

If you encounter issues:

1. **Figma Make Support:** Check their documentation for custom domain setup
2. **Domain Registrar Support:** They can help verify DNS configuration
3. **DNS Tools:** 
   - https://dnschecker.org/ - Check DNS propagation
   - https://whatsmydns.net/ - Global DNS checker
   - https://www.nslookup.io/ - DNS lookup tool

## 🎯 Post-Setup Checklist

After your domain is live:

- [ ] Test all pages load correctly
- [ ] Verify HTTPS/SSL is working
- [ ] Check mobile responsiveness on real device
- [ ] Test contact forms are working
- [ ] Verify social sharing shows correct preview
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test all navigation links
- [ ] Check footer contact form
- [ ] Verify all project links work

## 📊 SEO Optimization (Already Implemented)

Your site includes:
- ✅ Canonical URLs to prevent duplicate content
- ✅ Meta descriptions for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Semantic HTML structure
- ✅ Mobile-friendly responsive design
- ✅ Fast loading times

## 🌐 Current Technical Setup

- **Backend:** Supabase Edge Functions
- **Frontend:** React with React Router
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Database:** Supabase PostgreSQL (kv_store)
- **Contact Forms:** Server-side validation and sanitization

## Important Notes

⚠️ **Keep these settings:**
- All API calls use the Supabase project ID (already configured)
- Backend remains at `https://[projectId].supabase.co/functions/v1/`
- Only the frontend domain changes to cristian-co.com

✅ **Your site will be accessible at:**
- https://cristian-co.com (primary)
- https://www.cristian-co.com (if configured)

---

**Last Updated:** January 2026
**Domain:** cristian-co.com
**Contact:** Available via the website contact form
