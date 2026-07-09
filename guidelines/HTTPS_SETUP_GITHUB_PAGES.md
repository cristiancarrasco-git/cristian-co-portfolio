# Fix “Connection is not secure” on cristian-co.com

The browser warning means the site is loading over **HTTP** instead of **HTTPS**. This is fixed in **GitHub + your domain registrar**, not in React code.

---

## Checklist (do in order)

### 1. Confirm DNS points to GitHub Pages

At your domain registrar (GoDaddy, Namecheap, etc.), set:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `cristiancarrasco-git.github.io` |

Remove any old GoDaddy “Website Builder” A records or parking pages.

Wait up to **24 hours** for DNS to propagate. Check: https://dnschecker.org/#A/cristian-co.com

---

### 2. Set custom domain in GitHub

1. Open https://github.com/cristiancarrasco-git/cristian-co-portfolio/settings/pages
2. **Custom domain:** enter `cristian-co.com` → Save
3. Wait until GitHub shows **“DNS check successful”**

---

### 3. Enable Enforce HTTPS

On the same Pages settings screen:

- When the certificate is ready, check **Enforce HTTPS**
- If the checkbox is grayed out, wait (GitHub can take up to 24h after DNS is correct)

---

### 4. Use GitHub Actions as the source

**Build and deployment → Source:** **GitHub Actions** (not “Deploy from a branch”)

---

### 5. Always visit the secure URL

Use **https://cristian-co.com** (not `http://`).

The site includes a client-side redirect from HTTP → HTTPS once the certificate exists.

---

## Still not working?

| Symptom | Likely cause |
|---------|----------------|
| Gray “Enforce HTTPS” | DNS not pointing to GitHub yet, or cert still provisioning |
| Old GoDaddy site appears | DNS still points to GoDaddy — update A records |
| Site works on github.io but not custom domain | Custom domain not saved in GitHub Pages settings |
| Lock icon missing only on some pages | Mixed content — ensure all assets use `https://` URLs |

---

**After HTTPS is green:** proceed with `guidelines/NEXT_TASK_PICTURES_AND_SUBPAGES.md`.
