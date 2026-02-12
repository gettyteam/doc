---
title: Privacy Policy
icon: material-symbols:article-outline
permalink: /en/guide/privacypolicy/
createTime: 2025/09/5 15:00:00
---

Version: 1.1.6

**Effective Date: 2025-2-12**

1. ### Identity and Nature of the Project

The getty software is an open-source application (AGPL v3) that allows managing tips, tip goals, chat, notifications, and widgets in live streams.

2. ### Data Protection Principles

- **Minimization:** Only strictly necessary data for the functionality enabled by the user is collected.
- **Transparency:** All data processing logic is in the public repository; anyone can review it.
- **User Control:** Configuration data and tokens remain in local files under the user's control.
- **No Commercial Exploitation:** Personal data is not sold, rented, or used for commercial purposes.
- **Independence:** No external trackers (Google Analytics, etc.) or third-party analytics SDKs are included.

3. ### What Data is Processed?

**3.1 Basic Operation (self‑host / hosted)**

- **Session Token and Local Storage:** Technical cookies or LocalStorage are used solely to maintain authentication and preferences (theme, language). They are not used for tracking.
- **Wallet Address / Transactions:** Tips and tip goals are displayed and calculated; access is read-only to public gateways (e.g., Arweave).
- **User Configuration (tip goals, text, language, etc.):** Customizes the experience and is saved in a JSON file.
- **Webhook Tokens and URLs (Discord, Telegram, etc.):** Used solely to send notifications to services configured by the user; never reused for any other purpose.

**3.2 Technical Data (primarily in hosted)**

- Server Logs: Timestamp, requested path, and HTTP response code.
- Aggregated Internal Metrics (process execution counts).

**3.3 What is Not Collected**

- Behavioral profiles are not collected.
- Third-party tracking cookies are not integrated.
- Deliberate fingerprinting is not employed.
- External analytics SDKs are not used.

**3.4 Data Obtained via Odysee (APIs / backend)**

The getty software acts as a client querying data from Odysee. Depending on enabled features, the following may be retrieved (usually public):

- Channel/Profile Metadata (name, description, image, content or livestream identifiers).
- Public tip/support info / transactions associated with the channel to calculate goals and show summary history.
- Status or identifiers of live streams and recent publications.

==No permanent copy is stored: an ephemeral cache is maintained for performance.==

**3.5 Integration and Roles**

Odysee is an independent controller of the account's original data. Getty only queries and renders data (separate controller for local configuration entered by the user). Rectification, update, or deletion of profile data, content, or transactions must be managed directly on Odysee. Requests to Odysee infrastructure may involve international transfers per their policies; reviewing their official privacy policy is recommended.

4. ### Purposes

- Authentication and session management.
- Displaying and updating widgets (chat, tips, goals).
- Sending notifications to external services configured by the user (e.g., Discord).
- Status calculation and visualization (last tip, goal progress, summary history).

5. ### Legal Basis (for jurisdictions with GDPR or similar regulations)

- **Use of the Application and Features:** Contract execution (user accepts the policy by using getty).
- **Technical Log Records:** Legitimate interest (security, debugging).
- **Processing of User-Provided Wallets and Webhooks:** Explicit consent (user provides them voluntarily).
- **Temporary Cache of Public Odysee Data:** Legitimate interest (performance and reducing redundant requests, minimizing load and latency).

6. ### Retention Periods

- **Sessions:** While the session is active or until process restart.
- **Configuration:** Indefinitely, until the user modifies or deletes it.
- **Logs (hosted):** Recommended no more than 30 days, with rotation and anonymization.
- **Odysee Response Cache:** ≤15 minutes (configurable / manually purgeable by user on restart or clear).
- **Odysee Tokens/API Keys (if any):** Persist locally until revocation on Odysee or deletion of the configuration file.

7. ### Third-Party Disclosure

- **Gateways/blockchain:** Read-only queries to public APIs to fetch transactions.
- **User-Configured Webhook Services (Discord, Telegram, etc.):** Only fields the user decides to send (message, amount, etc.).
- **Legal Requirements:** If a competent authority requests under a valid court order, disclosing available technical records (logs) might be obligatory.

8. ### User Rights (where applicable)

- **Access:** Can directly read configuration files (config/, data/).
- **Rectification:** Edit files or use the interface to correct data.
- **Deletion:** Delete corresponding files, revoke tokens, and restart the application.
- **Limitation/Objection:** Disable functions (e.g., do not configure webhooks).
- **Portability:** Data is stored in readable and exportable JSON format.

**Source Data from Odysee:**

- **Rectification / Deletion of Channel Metadata or Transactions:** Proceed via Odysee.
- **Revocation of Access:** Revoking the token/key on Odysee immediately invalidates query capability in getty.
- **Local Deletion:** Deleting configuration files and cache purges any residual persistence.

9. ### Data Security

Technical measures are applied to protect information, including encryption in transit (HTTPS) for the hosted version and security recommendations for self-host instances. However, no system is 100% infallible.

10. ### Policy Modifications

Any change will be published with a new effective date.

11. ### Acceptance

Using getty implies acceptance of this privacy policy. If any clause is not acceptable, the user can run their own self-host instance and adapt the configuration to their needs, or stop using the hosted version.

12. ### Contact

If you have any questions about our privacy policy or how data is collected and processed, email us at: **hello@getty.sh**
