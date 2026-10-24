# NeoLearn

**A free, open-source tech tutorial library — and a hands-on portfolio project by PÏXLĒ.**

[Live Demo](https://neolearn-a09.pages.dev) · [View Source Code on GitHub](https://github.com/pixle-ui/neolearn)

## About

NeoLearn is a multi-platform library of practical, step-by-step technology tutorials. Tutorials adapt to the selected platform, helping learners follow relevant instructions on Linux, Android, macOS, Windows, and iOS.

The project is built by PÏXLĒ, a self-taught software and cybersecurity enthusiast from Nigeria. It is an example of building a useful, interactive web application with browser-native technologies and no framework or build step.

## Key Features

- **102 tutorials** across technology topics and categories.
- **Platform-aware instructions** for Linux, Android, Mac, Windows, and iOS.
- **Custom fuzzy search** using a Levenshtein-distance algorithm, abbreviation expansion, and relevance scoring.
- **Local state management** with browser LocalStorage for favorites, learning progress, and platform preferences.
- **Interactive learning tools:** tutorial search, category filters, command-copy buttons, favorites, and step-by-step progress tracking.
- **Responsive interface** using CSS Grid and Flexbox, with glassmorphism styling and motion effects.
- **AI-assisted development workflow:** AI tools support exploration, implementation, and iteration; generated suggestions are reviewed and integrated by the author.
- **Privacy-friendly by design:** no accounts required; favorites and progress are stored in the local browser.

## Technical Highlights

- Custom search engine with Levenshtein distance for typo-tolerant matching.
- Vanilla JavaScript state management and DOM-driven rendering.
- Responsive CSS Grid/Flexbox layout and glassmorphism.
- Plain HTML, CSS, and JavaScript with no framework, package manager, or build tools.

## Tech Stack

| Technology | Use |
| --- | --- |
| HTML | Semantic page structure |
| CSS | Responsive layout, design system, and animations |
| Vanilla JavaScript | Search, tutorial rendering, interactions, and LocalStorage state |
| Cloudflare Pages | Static-site hosting |

## TryHackMe Labs

Hands-on write-ups from authorized TryHackMe environments, documenting the assessment approach, security concepts, and lessons learned. These summaries focus on methodology and impact rather than reproducing flags or providing copy-paste exploitation instructions.

### Tomghost: Chaining Ghostcat Exposure with Credential Recovery

**Objective:** Assess the Tomcat service in the lab, establish an initial foothold, and identify a path to root.

#### Methodology & Key Takeaways

- **Reconnaissance and enumeration:** Used Nmap to map exposed services and identify the Tomcat/AJP attack surface.
- **Exploitation and initial access:** Validated the Ghostcat (CVE-2020-1938) file-read exposure in the authorized lab and used disclosed credentials to access the host over SSH.
- **Credential recovery and lateral movement:** Recovered a protected credential file by cracking a PGP key passphrase, then used the recovered information to access a second account.
- **Privilege escalation and impact:** Identified an unsafe sudo permission for `zip`, applied the relevant GTFOBins technique to obtain root-level access, and verified the lab objective.

**Tools Used:** Nmap, Metasploit Framework, John the Ripper (`gpg2john`), GnuPG, SSH, GTFOBins.

### Basic Pentesting: From Service Enumeration to Credentialed Access

**Objective:** Enumerate the lab host's exposed services and assess how weak credentials and SSH key protection could lead to account access.

#### Methodology & Key Takeaways

- **Reconnaissance and enumeration:** Used Nmap and enum4linux to map services and enumerate SMB information, including potential usernames.
- **Web assessment:** Brute-forced web paths with Gobuster and reviewed a discovered directory for clues indicating weak credential practices.
- **Initial access:** Tested the lab's credential weakness against SSH with Hydra, then examined an SSH private key associated with another user.
- **Credential recovery and validation:** Cracked the key's passphrase with John the Ripper and used the recovered access to complete the lab objectives, reinforcing the importance of strong passwords and protected private keys.

**Tools Used:** Nmap, Gobuster, enum4linux, Hydra, John the Ripper (`ssh2john`), SSH.

### Vulnversity: Upload Validation and SUID Privilege Escalation

**Objective:** Evaluate a web application's file-upload controls and determine whether local privilege boundaries can be bypassed.

#### Methodology & Key Takeaways

- **Reconnaissance and enumeration:** Used Nmap to identify exposed services and Gobuster to discover web application paths.
- **Web exploitation:** Assessed the upload form's extension-based filtering and demonstrated why superficial file-name checks are not a sufficient security control.
- **Initial access:** In the isolated lab, used an accepted server-side script extension to obtain a remote shell and confirmed the access level.
- **Privilege escalation and impact:** Audited SUID programs, identified `systemctl` as an escalation path, and applied the corresponding GTFOBins technique to validate root-level impact.

**Tools Used:** Nmap, Gobuster, Netcat, GTFOBins.

### Wgel CTF: Source Review and Misconfigured Sudo Permissions

**Objective:** Combine lightweight web reconnaissance with host-level permission analysis to reach the lab's privileged objective.

#### Methodology & Key Takeaways

- **Reconnaissance and source analysis:** Scanned services with Nmap and inspected publicly served HTML for user-identifying information.
- **Web enumeration:** Used Gobuster to locate an exposed SSH-related directory and assessed the risk of publishing private authentication material.
- **Initial access:** Retrieved the lab's exposed RSA key and used it to authenticate to the host over SSH.
- **Privilege escalation and impact:** Reviewed sudo permissions, identified unrestricted use of `wget` as a root-level risk, and used it within the lab to demonstrate unauthorized access to protected data.

**Tools Used:** Nmap, Gobuster, `wget`, Netcat, SSH.

### Bounty Hacker: Anonymous FTP and Excessive Tar Privileges

**Objective:** Assess anonymous FTP exposure and determine how weak SSH credentials and overly broad sudo permissions affect host security.

#### Methodology & Key Takeaways

- **Reconnaissance and enumeration:** Used Nmap to identify FTP and SSH services, then verified that the lab FTP service permitted anonymous access.
- **Exposure assessment:** Reviewed the publicly accessible task materials and identified the security implications of distributing account and password-related information.
- **Initial access:** Evaluated SSH credential strength in the authorized environment using Hydra and obtained a valid lab account.
- **Privilege escalation and impact:** Audited sudo permissions, identified `tar` as an excessive privilege grant, and used the corresponding GTFOBins technique to validate root-level impact.

**Tools Used:** Nmap, FTP, Hydra, SSH, GTFOBins.

### Corridor: Predictable Object References in a Web Application

**Objective:** Assess whether predictable URL identifiers allow access to web resources that are not linked through the normal interface.

#### Methodology & Key Takeaways

- **Reconnaissance:** Inspected application navigation and URL patterns, noting that resource identifiers followed a consistent format.
- **Enumeration:** Compared identifiers and recognized that they corresponded to MD5 hashes of sequential numeric values.
- **Access-control assessment:** Tested whether changing an identifier exposed a resource outside the expected user-facing flow, demonstrating an insecure direct object reference (IDOR).
- **Impact and takeaway:** Confirmed access to the hidden lab resource and documented that unguessable-looking identifiers are not a substitute for server-side authorization checks.

**Tools Used:** Browser developer tools, MD5 hashing.

## Run Locally

No dependencies or build process are required. Clone the repository and open `index.html` in a browser, or serve the folder with any static web server.

```bash
git clone https://github.com/pixle-ui/neolearn.git
cd neolearn
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Author

**PÏXLĒ** — self-taught software and cybersecurity enthusiast.

- GitHub: [github.com/pixle-ui](https://github.com/pixle-ui)
- Email: [pixle.dev@proton.me](mailto:pixle.dev@proton.me)

## Safety

Security-related tutorials and projects are for systems and networks you own or are explicitly authorized to test, or for legal training labs. Always follow applicable laws and platform rules.

## License

MIT — free to use, modify, and share.
