// =============================================
// PLATFORMS
// =============================================
window.PLATFORMS = [
  {
    id: "linux", label: "Linux",
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-2.5 0-4 2-4 4.5 0 1.3.2 2.1-.6 3.2-.8 1.2-2.4 3-3 5.2-.5 1.7-.2 3.4.8 4 .6.4 1.5.3 2.3.5.6.2 1.2.6 1.7 1 .6.5 1.4.8 2.3.8.8 0 1.5-.3 2.1-.8.5-.4 1-.8 1.6-1 .8-.2 1.7-.1 2.3-.5 1-.6 1.3-2.3.8-4-.5-2.2-2.1-4-2.9-5.2-.8-1.1-.6-1.9-.6-3.2C16 4 14.5 2 12 2z"/></svg>'
  },
  {
    id: "android", label: "Android",
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 9v7a1 1 0 0 0 1 1h1v3a1.5 1.5 0 0 0 3 0v-3h2v3a1.5 1.5 0 0 0 3 0v-3h1a1 1 0 0 0 1-1V9H6zm-2 0a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4A1.5 1.5 0 0 0 4 9zm16 0a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 3 0v-4A1.5 1.5 0 0 0 20 9zM8.5 3.5l-1-1.7a.3.3 0 0 1 .5-.3l1 1.8a6.4 6.4 0 0 1 6 0l1-1.8a.3.3 0 0 1 .5.3l-1 1.7A5.5 5.5 0 0 1 18 8H6a5.5 5.5 0 0 1 2.5-4.5z"/></svg>'
  },
  {
    id: "mac", label: "Mac",
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>'
  },
  {
    id: "windows", label: "Windows",
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5l8-1.1v7.6H3V5.5zM12 4.2l9-1.2v8H12V4.2zM3 13h8v7.6l-8-1.1V13zm9 0h9v8l-9-1.2V13z"/></svg>'
  },
  {
    id: "ios", label: "iOS",
    svg: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1H7a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm-5 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM16 19H8V4h8v15z"/></svg>'
  }
];

// =============================================
// TUTORIALS — full library
// =============================================
window.TUTORIALS = [

  // ===== AI =====
  {
    id: "ollama", title: "Run AI Models Locally with Ollama", category: "AI",
    difficulty: "beginner", time: "15 min",
    summary: "Run Llama, Mistral, DeepSeek offline on your own machine.",
    intro: "Ollama runs large language models locally with one command.",
    tags: ["ai", "llm"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install", text: "One-line installer.", code: "curl -fsSL https://ollama.com/install.sh | sh", lang: "bash" },
        { title: "Start service", text: "Background.", code: "sudo systemctl enable --now ollama", lang: "bash" },
        { title: "Pull model", text: "Small first.", code: "ollama pull llama3.2", lang: "bash" },
        { title: "Chat", text: "Talk.", code: "ollama run llama3.2", lang: "bash" }
      ],
      android: [
        { title: "Install Termux", text: "F-Droid." },
        { title: "proot Ubuntu", text: "Full Linux.", code: "pkg install proot-distro -y\nproot-distro install ubuntu\nproot-distro login ubuntu", lang: "bash" },
        { title: "Ollama", text: "Install.", code: "curl -fsSL https://ollama.com/install.sh | sh", lang: "bash" },
        { title: "Tiny model", text: "Small fits phones.", code: "ollama pull tinyllama\nollama run tinyllama", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Homebrew.", code: "brew install ollama", lang: "bash" },
        { title: "Run", text: "M-series handles 7B.", code: "ollama serve\nollama pull llama3.2\nollama run llama3.2", lang: "bash" }
      ],
      windows: [
        { title: "Download", text: "Site.", code: "https://ollama.com/download", lang: "text" },
        { title: "Run", text: "PowerShell.", code: "ollama pull llama3.2\nollama run llama3.2", lang: "powershell" }
      ]
    },
    repo: { url: "https://github.com/ollama/ollama", label: "Ollama" }
  },

  {
    id: "gemini-cli", title: "Use Google Gemini from the Terminal", category: "AI",
    difficulty: "beginner", time: "10 min",
    summary: "Official Gemini CLI — chat with Gemini from your shell.",
    intro: "Google's official Gemini CLI.",
    tags: ["ai", "gemini"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Node.js", text: "Install.", code: "sudo apt install nodejs npm -y", lang: "bash" },
        { title: "Install CLI", text: "Global.", code: "sudo npm install -g @google/gemini-cli", lang: "bash" },
        { title: "Run", text: "Auth.", code: "gemini", lang: "bash" }
      ],
      android: [
        { title: "Node", text: "Termux.", code: "pkg install nodejs -y", lang: "bash" },
        { title: "Install", text: "npm.", code: "npm install -g @google/gemini-cli", lang: "bash" },
        { title: "Run", text: "Auth.", code: "gemini", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew + npm.", code: "brew install node\nsudo npm install -g @google/gemini-cli", lang: "bash" },
        { title: "Run", text: "Auth.", code: "gemini", lang: "bash" }
      ],
      windows: [
        { title: "Node", text: "nodejs.org.", code: "https://nodejs.org", lang: "text" },
        { title: "Install", text: "PowerShell.", code: "npm install -g @google/gemini-cli\ngemini", lang: "powershell" }
      ]
    },
    repo: { url: "https://github.com/google-gemini/gemini-cli", label: "Gemini CLI" }
  },

  {
    id: "deepseek", title: "Chat with DeepSeek R1 Locally", category: "AI",
    difficulty: "beginner", time: "8 min",
    summary: "Reasoning model that fits on modest hardware.",
    intro: "DeepSeek R1 — open reasoning model.",
    tags: ["ai", "deepseek"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Ensure Ollama", text: "See Ollama." },
        { title: "Pull", text: "Small.", code: "ollama pull deepseek-r1:1.5b", lang: "bash" },
        { title: "Run", text: "Ask.", code: "ollama run deepseek-r1:1.5b", lang: "bash" }
      ],
      android: [
        { title: "proot Ubuntu", text: "See Ollama." },
        { title: "Pull", text: "1.5B.", code: "ollama pull deepseek-r1:1.5b", lang: "bash" },
        { title: "Run", text: "Be patient.", code: "ollama run deepseek-r1:1.5b", lang: "bash" }
      ],
      mac: [
        { title: "Pull + run", text: "7B works.", code: "ollama pull deepseek-r1:7b\nollama run deepseek-r1:7b", lang: "bash" }
      ],
      windows: [
        { title: "Pull + run", text: "PowerShell.", code: "ollama pull deepseek-r1:7b\nollama run deepseek-r1:7b", lang: "powershell" }
      ]
    },
    repo: { url: "https://ollama.com/library/deepseek-r1", label: "DeepSeek" }
  },

  // ===== HACKING =====
  {
    id: "nmap", title: "Scan Your Own Network with Nmap", category: "Hacking",
    difficulty: "beginner", time: "15 min",
    summary: "Discover devices on YOUR OWN network.",
    intro: "Nmap — industry-standard network scanner.",
    tags: ["nmap"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "⚠️ Own only", text: "Own networks only.", note: { type: "warn", text: "Others = illegal." } },
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt install nmap -y", lang: "bash" },
        { title: "Subnet", text: "Check IP.", code: "ip a", lang: "bash" },
        { title: "Ping sweep", text: "Who's alive?", code: "nmap -sn 192.168.1.0/24", lang: "bash" },
        { title: "Ports", text: "Common.", code: "nmap -F 192.168.1.1", lang: "bash" },
        { title: "Deep", text: "OS + versions.", code: "sudo nmap -sV -O -A 192.168.1.1", lang: "bash" }
      ],
      android: [
        { title: "⚠️ Own only", text: "Your network.", note: { type: "warn", text: "Others = illegal." } },
        { title: "Install", text: "Termux.", code: "pkg install nmap -y", lang: "bash" },
        { title: "IP", text: "ifconfig.", code: "ifconfig", lang: "bash" },
        { title: "Scan", text: "Sweep + ports.", code: "nmap -sn 192.168.1.0/24\nnmap -F 192.168.1.1", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install nmap", lang: "bash" },
        { title: "Scan", text: "Subnet.", code: "nmap -sn 192.168.1.0/24", lang: "bash" }
      ],
      windows: [
        { title: "Download", text: "nmap.org.", code: "https://nmap.org/download.html", lang: "text" },
        { title: "Scan", text: "PowerShell.", code: "nmap -sn 192.168.1.0/24", lang: "powershell" }
      ]
    },
    repo: { url: "https://nmap.org/book/man.html", label: "Nmap" }
  },

  {
    id: "metasploit-theory", title: "Metasploit: How Exploitation Frameworks Work", category: "Hacking",
    difficulty: "intermediate", time: "20 min",
    summary: "Understand what Metasploit is and how penetration testers use it — safely.",
    intro: "Metasploit is the most popular exploitation framework. This tutorial explains the concepts and how to practice in LEGAL labs, not how to attack real systems.",
    tags: ["metasploit", "pentest"], platforms: ["linux", "mac"],
    steps: {
      linux: [
        { title: "⚠️ Legal warning", text: "Exploiting systems you don't own is a serious crime. Use only on TryHackMe/HackTheBox labs or your own VMs.", note: { type: "danger", text: "Legal labs only." } },
        { title: "What it is", text: "A framework with modules: exploits, payloads, auxiliaries, post-exploitation. Automates finding and using vulnerabilities." },
        { title: "Install (legal labs)", text: "Kali ships it. Or:", code: "sudo apt install metasploit-framework -y", lang: "bash" },
        { title: "Start the console", text: "Only run against lab machines.", code: "msfconsole", lang: "bash" },
        { title: "Basic workflow", text: "Search → use → show options → set → run.", code: "search <keyword>\nuse <module>\nshow options\nset RHOSTS <lab-ip>\nrun", lang: "bash" },
        { title: "Practice legally", text: "Free legal targets.", code: "https://tryhackme.com\nhttps://www.hackthebox.com", lang: "text" },
        { title: "Ethical rule", text: "Never use on systems you don't own or have written permission to test." }
      ],
      mac: [
        { title: "⚠️ Legal warning", text: "Legal labs only.", note: { type: "danger", text: "Others = crime." } },
        { title: "Easier path", text: "Run Kali Linux in a VM (UTM or VirtualBox) — Metasploit is pre-installed." },
        { title: "Practice legally", text: "TryHackMe free labs.", code: "https://tryhackme.com", lang: "text" }
      ]
    },
    repo: { url: "https://www.metasploit.com/", label: "Metasploit" }
  },

  {
    id: "hydra-defense", title: "Password Attacks: How Hydra Works (Defense)", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "Understand password-cracking tools to defend against them better.",
    intro: "Hydra is a password-cracking tool used by pentesters and attackers. Learn what it does and how to harden against it.",
    tags: ["hydra", "defense"], platforms: ["linux", "mac"],
    steps: {
      linux: [
        { title: "⚠️ Defense only", text: "Running Hydra against real accounts is a crime.", note: { type: "danger", text: "Defense only." } },
        { title: "What Hydra does", text: "Tries username/password lists against logins — SSH, FTP, HTTP forms, etc. Fast but loud (creates many failed logins)." },
        { title: "Detection", text: "Watch auth logs.", code: "sudo tail -f /var/log/auth.log", lang: "bash" },
        { title: "Defense 1: Fail2ban", text: "Auto-blocks offending IPs.", code: "sudo apt install fail2ban -y\nsudo systemctl enable --now fail2ban", lang: "bash" },
        { title: "Defense 2: SSH keys only", text: "Disable password auth entirely.", code: "sudo nano /etc/ssh/sshd_config\n# PasswordAuthentication no", lang: "bash" },
        { title: "Defense 3: 2FA", text: "Even correct passwords fail without a second factor." },
        { title: "Practice legally", text: "TryHackMe has Hydra labs against your own machines.", code: "https://tryhackme.com", lang: "text" }
      ],
      mac: [
        { title: "⚠️ Defense only", text: "Defense only.", note: { type: "danger", text: "Others = crime." } },
        { title: "Enable firewall", text: "System Settings → Network → Firewall ON." },
        { title: "Strong login password", text: "Use a passphrase." },
        { title: "Practice legally", text: "TryHackMe.", code: "https://tryhackme.com", lang: "text" }
      ]
    },
    repo: { url: "https://tryhackme.com", label: "TryHackMe (legal labs)" }
  },

  {
    id: "hashcat-theory", title: "Password Hashes & Hashcat (Defense)", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "What password hashes are and how attackers crack them.",
    intro: "Passwords aren't stored in plain text — they're hashed. Understanding hashing teaches you why password managers matter.",
    tags: ["hashcat", "hashes"], platforms: ["linux", "mac", "windows"],
    steps: {
      linux: [
        { title: "⚠️ Defense only", text: "Cracking hashes without permission is illegal.", note: { type: "danger", text: "Defense only." } },
        { title: "What a hash is", text: "A one-way function: password → hash. Attacker tries millions of guesses, hashing each, until one matches." },
        { title: "Why bcrypt/argon2 matter", text: "Slow hashes defeat fast cracking. Never store MD5/SHA1 passwords." },
        { title: "Test your own hash", text: "Generate on YOUR OWN files.", code: "echo -n 'mypassword' | sha256sum", lang: "bash" },
        { title: "Defense: password managers", text: "Long random passwords can't be cracked by dictionary attacks. Use Bitwarden or KeePass." },
        { title: "Practice legally", text: "TryHackMe hash-cracking rooms.", code: "https://tryhackme.com", lang: "text" }
      ],
      mac: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Generate hashes", text: "Local test.", code: "echo -n 'mypassword' | shasum -a 256", lang: "bash" },
        { title: "Use strong passwords", text: "Password manager recommended." }
      ],
      windows: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Generate hash", text: "PowerShell.", code: "$hash = [System.BitConverter]::ToString([System.Security.Cryptography.SHA256]::Create().ComputeHash([System.Text.Encoding]::UTF8.GetBytes('mypassword')))", lang: "powershell" },
        { title: "Use strong passwords", text: "Bitwarden, KeePass." }
      ]
    },
    repo: { url: "https://hashcat.net/wiki/", label: "Hashcat Wiki" }
  },

  {
    id: "steganography", title: "Steganography: Hide Data in Images", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "Hide text inside PNGs — a classic trick.",
    intro: "Steganography hides data inside other files. Used in CTFs and by penetration testers for payload delivery.",
    tags: ["steganography", "ctf"], platforms: ["linux", "mac", "android"],
    steps: {
      linux: [
        { title: "What it is", text: "Hiding data in plain sight — e.g. text in image pixels." },
        { title: "Install tools", text: "steghide + binwalk.", code: "sudo apt install steghide binwalk -y", lang: "bash" },
        { title: "Hide text in image", text: "Needs a JPEG.", code: "steghide embed -cf image.jpg -ef secret.txt", lang: "bash" },
        { title: "Extract", text: "Recover the hidden file.", code: "steghide extract -sf image.jpg", lang: "bash" },
        { title: "Detect hidden files", text: "binwalk scans for embedded content.", code: "binwalk image.jpg", lang: "bash" },
        { title: "Practice legally", text: "CTFs like picoCTF have great steg challenges.", code: "https://picoctf.org", lang: "text" }
      ],
      mac: [
        { title: "Install", text: "Homebrew.", code: "brew install steghide", lang: "bash" },
        { title: "Hide + extract", text: "Same commands.", code: "steghide embed -cf image.jpg -ef secret.txt", lang: "bash" }
      ],
      android: [
        { title: "Install Termux + proot Ubuntu", text: "See proot tutorial." },
        { title: "Inside Ubuntu", text: "Install tools.", code: "apt install steghide binwalk -y", lang: "bash" },
        { title: "Use", text: "Same commands.", code: "steghide embed -cf image.jpg -ef secret.txt", lang: "bash" }
      ]
    },
    repo: { url: "https://steghide.sourceforge.net/", label: "Steghide" }
  },

  {
    id: "osint", title: "OSINT: Find Public Info About Anyone (Ethically)", category: "Hacking",
    difficulty: "beginner", time: "15 min",
    summary: "Open Source Intelligence — using only public info, legally.",
    intro: "OSINT = gathering info from public sources. Used by journalists, security researchers, and private investigators. Learn the tools and the ethics.",
    tags: ["osint", "recon"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Ethics first", text: "Only search for people with consent or for legitimate purposes (checking your own footprint, security research, journalism)." },
        { title: "Google dorks", text: "Site-specific searches reveal public info.", code: "site:example.com filetype:pdf\n\"John Doe\" site:linkedin.com", lang: "text" },
        { title: "Check your own footprint", text: "See what's public about you.", code: "https://haveibeenpwned.com\nhttps://web.archive.org", lang: "text" },
        { title: "Username search", text: "Cross-platform handle search.", code: "https://namechk.com\nhttps://whatsmyname.app", lang: "text" },
        { title: "Metadata", text: "Photos often contain GPS + device info.", code: "exiftool photo.jpg", lang: "bash" },
        { title: "Remove your data", text: "Google yourself, opt out of data brokers, tight privacy settings." }
      ],
      android: [
        { title: "Ethics first", text: "Only for legitimate purposes." },
        { title: "Check your footprint", text: "Open in browser.", code: "https://haveibeenpwned.com", lang: "text" },
        { title: "Username search", text: "Browser.", code: "https://namechk.com", lang: "text" }
      ],
      mac: [
        { title: "Ethics first", text: "Legitimate use only." },
        { title: "exiftool", text: "Install + inspect.", code: "brew install exiftool\nexiftool photo.jpg", lang: "bash" }
      ],
      windows: [
        { title: "Ethics first", text: "Legitimate use only." },
        { title: "exiftool", text: "Download + use.", code: "https://exiftool.org", lang: "text" }
      ],
      ios: [
        { title: "Ethics first", text: "Legitimate use only." },
        { title: "Check footprint", text: "Safari.", code: "https://haveibeenpwned.com", lang: "text" }
      ]
    },
    repo: { url: "https://osintframework.com/", label: "OSINT Framework" }
  },

  {
    id: "termux-cool", title: "10 Cool Things to Do in Termux", category: "Hacking",
    difficulty: "beginner", time: "20 min",
    summary: "Phone → portable Linux power tool.",
    intro: "Termux — full terminal on Android.",
    tags: ["termux"], platforms: ["android"],
    steps: {
      android: [
        { title: "Install", text: "F-Droid." },
        { title: "Update", text: "First.", code: "pkg update && pkg upgrade -y", lang: "bash" },
        { title: "1. Storage", text: "Access files.", code: "termux-setup-storage", lang: "bash" },
        { title: "2. yt-dlp", text: "Videos.", code: "pkg install python ffmpeg -y\npip install -U yt-dlp", lang: "bash" },
        { title: "3. SSH", text: "Remote.", code: "pkg install openssh -y", lang: "bash" },
        { title: "4. Code", text: "Neovim + Git.", code: "pkg install git neovim -y", lang: "bash" },
        { title: "5. Web server", text: "Serve.", code: "python -m http.server 8080", lang: "bash" },
        { title: "6. Nmap", text: "Scan.", code: "pkg install nmap -y", lang: "bash" },
        { title: "7. proot", text: "Full Linux.", code: "pkg install proot-distro -y\nproot-distro install ubuntu", lang: "bash" },
        { title: "8. Compile C", text: "Clang.", code: "pkg install clang -y", lang: "bash" },
        { title: "9. tmux", text: "Sessions.", code: "pkg install tmux -y", lang: "bash" },
        { title: "10. Backup", text: "Save.", code: "tar -czf ~/storage/shared/termux-$(date +%F).tar.gz ~/", lang: "bash" }
      ]
    },
    repo: { url: "https://wiki.termux.com/wiki/Main_Page", label: "Termux Wiki" }
  },

  {
    id: "termux-setup", title: "Essential Termux Setup (Do This First)", category: "Hacking",
    difficulty: "beginner", time: "12 min",
    summary: "Configure Termux properly once.",
    intro: "Setup saves pain later.",
    tags: ["termux", "setup"], platforms: ["android"],
    steps: {
      android: [
        { title: "F-Droid", text: "Not Play Store.", note: { type: "warn", text: "F-Droid only." } },
        { title: "Update", text: "First.", code: "pkg update && pkg upgrade -y", lang: "bash" },
        { title: "Storage", text: "Grant.", code: "termux-setup-storage", lang: "bash" },
        { title: "Repos", text: "root + x11.", code: "pkg install root-repo x11-repo -y", lang: "bash" },
        { title: "Essentials", text: "Tools.", code: "pkg install git python nodejs nano curl wget tmux openssh -y", lang: "bash" },
        { title: "Prompt", text: "Optional zsh.", code: "pkg install zsh -y\nsh -c \"$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"", lang: "bash" },
        { title: "Backup", text: "Weekly.", code: "tar -czf ~/storage/downloads/termux-$(date +%F).tar.gz ~/", lang: "bash" }
      ]
    },
    repo: { url: "https://wiki.termux.com/wiki/Getting_started", label: "Termux Setup" }
  },

  {
    id: "termux-cron", title: "Schedule Tasks on Android (Termux Cron)", category: "Hacking",
    difficulty: "intermediate", time: "18 min",
    summary: "Automate backups and downloads in the background.",
    intro: "Termux cron jobs.",
    tags: ["termux", "cron"], platforms: ["android"],
    steps: {
      android: [
        { title: "Install", text: "F-Droid." },
        { title: "Cron", text: "Packages.", code: "pkg install cronie termux-services -y", lang: "bash" },
        { title: "Storage", text: "Grant.", code: "termux-setup-storage", lang: "bash" },
        { title: "Start", text: "Background.", code: "sv-enable crond", lang: "bash" },
        { title: "Script", text: "Create.", code: "mkdir -p ~/scripts\nnano ~/scripts/backup.sh", lang: "bash" },
        { title: "Content", text: "Backup logic.", code: "#!/data/data/com.termux/files/usr/bin/bash\nDEST=~/storage/downloads/backups\nmkdir -p $DEST\ncp -r ~/important $DEST/$(date +%F)\necho \"Backup done\" >> ~/backup.log", lang: "bash" },
        { title: "chmod", text: "Executable.", code: "chmod +x ~/scripts/backup.sh", lang: "bash" },
        { title: "Crontab", text: "Edit.", code: "crontab -e", lang: "bash" },
        { title: "Schedule", text: "Daily 3 AM.", code: "0 3 * * * ~/scripts/backup.sh", lang: "text" }
      ]
    },
    repo: { url: "https://wiki.termux.com/wiki/Termux-services", label: "Termux Services" }
  },

  {
    id: "termux-server", title: "Turn Your Phone into a Linux Server", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "SSH into your own phone from a laptop.",
    intro: "Termux runs SSH server.",
    tags: ["termux", "ssh"], platforms: ["android"],
    steps: {
      android: [
        { title: "Install", text: "F-Droid." },
        { title: "SSH", text: "OpenSSH.", code: "pkg install openssh -y", lang: "bash" },
        { title: "Password", text: "Required.", code: "passwd", lang: "bash" },
        { title: "Username", text: "u0_aXXX.", code: "whoami", lang: "bash" },
        { title: "Start", text: "Port 8022.", code: "sshd", lang: "bash" },
        { title: "IP", text: "Find.", code: "ifconfig", lang: "bash" },
        { title: "Connect", text: "From laptop.", code: "ssh -p 8022 u0_aXXX@192.168.1.42", lang: "bash" },
        { title: "Keep alive", text: "Disable battery opt for Termux." }
      ]
    },
    repo: { url: "https://wiki.termux.com/wiki/Remote_Access", label: "Termux Remote" }
  },

  {
    id: "revanced", title: "Ad-Free YouTube with ReVanced", category: "Hacking",
    difficulty: "intermediate", time: "25 min",
    summary: "Patch YouTube for no ads.",
    intro: "ReVanced patches YouTube APK.",
    tags: ["revanced"], platforms: ["android"],
    steps: {
      android: [
        { title: "⚠️ Official only", text: "revanced.app or GitHub.", note: { type: "danger", text: "Random APKs = malware." } },
        { title: "Uninstall YT updates", text: "Settings → Apps → YouTube → Uninstall updates." },
        { title: "Manager", text: "Download.", code: "https://revanced.app/download", lang: "text" },
        { title: "Allow installs", text: "Settings → Apps → Special access → Install unknown apps." },
        { title: "Patcher", text: "Pick YouTube." },
        { title: "Patches", text: "Hide ads, SponsorBlock, Background." },
        { title: "Patch", text: "Manager patches APK." },
        { title: "Install", text: "Uninstall original if needed." }
      ]
    },
    repo: { url: "https://revanced.app/", label: "ReVanced" }
  },

  {
    id: "wifi-audit", title: "Audit Your Own WiFi Network", category: "Hacking",
    difficulty: "intermediate", time: "20 min",
    summary: "See devices, spot intruders.",
    intro: "Audit your WiFi.",
    tags: ["wifi"], platforms: ["linux", "android", "mac"],
    steps: {
      linux: [
        { title: "⚠️ Own only", text: "Own WiFi.", note: { type: "danger", text: "Others = crime." } },
        { title: "Install", text: "Tools.", code: "sudo apt install nmap aircrack-ng net-tools -y", lang: "bash" },
        { title: "Devices", text: "Fast scan.", code: "sudo nmap -sn 192.168.1.0/24", lang: "bash" },
        { title: "Encryption", text: "Check.", code: "sudo iwlist wlan0 scan | grep -i encryption", lang: "bash" }
      ],
      android: [
        { title: "⚠️ Own only", text: "Your network.", note: { type: "danger", text: "Others = illegal." } },
        { title: "Fing", text: "Play Store." },
        { title: "Scan", text: "Auto-detect." },
        { title: "Router", text: "192.168.1.1 — change default pw." },
        { title: "Termux nmap", text: "Advanced.", code: "pkg install nmap -y\nnmap -sn 192.168.1.0/24", lang: "bash" }
      ],
      mac: [
        { title: "⚠️ Own only", text: "Own network." },
        { title: "Install + scan", text: "Brew + nmap.", code: "brew install nmap\nsudo nmap -sn 192.168.1.0/24", lang: "bash" }
      ]
    },
    repo: { url: "https://www.aircrack-ng.org/documentation.html", label: "Aircrack-ng" }
  },

  {
    id: "bruteforce-defend", title: "How Brute-Force Attacks Work (Defense)", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "Understand attacks to defend better.",
    intro: "Theory + defense. No attack code.",
    tags: ["defense"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "⚠️ Defense only", text: "Defense only.", note: { type: "danger", text: "Defense only." } },
        { title: "How it works", text: "Many passwords fast. Rate-limits stop it." },
        { title: "Passphrases", text: "Length beats complexity.", code: "# Bad: P@ss1\n# Good: correct-horse-battery-staple-42", lang: "text" },
        { title: "Fail2ban", text: "Auto-block.", code: "sudo apt install fail2ban -y\nsudo systemctl enable --now fail2ban", lang: "bash" },
        { title: "2FA", text: "Aegis or Authy." },
        { title: "SSH hardening", text: "Rate limits.", code: "sudo nano /etc/ssh/sshd_config\n# MaxAuthTries 3\n# LoginGraceTime 30", lang: "bash" },
        { title: "Practice", text: "TryHackMe.", code: "https://tryhackme.com", lang: "text" }
      ],
      android: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Protect accounts", text: "1. Password manager\n2. Enable 2FA\n3. Never reuse" },
        { title: "Practice", text: "TryHackMe.", code: "https://tryhackme.com", lang: "text" }
      ],
      mac: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "FileVault", text: "Encryption.", code: "System Settings → Privacy & Security → FileVault", lang: "text" }
      ],
      windows: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Lockout", text: "Policy.", code: "secpol.msc → Account Lockout Policy", lang: "text" },
        { title: "2FA", text: "Microsoft account." }
      ]
    },
    repo: { url: "https://tryhackme.com", label: "TryHackMe" }
  },

  {
    id: "phishing-detect", title: "How to Spot a Phishing Attack", category: "Hacking",
    difficulty: "beginner", time: "10 min",
    summary: "#1 way accounts get stolen.",
    intro: "Learn the tells.",
    tags: ["phishing"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Signs", text: "Urgency, bad grammar, mismatched sender, wrong link." },
        { title: "Check URL", text: "Real domain = right before first slash.", code: "# Real: https://github.com/google\n# Fake: https://github.com.secure-login.xyz/google", lang: "text" },
        { title: "Preview links", text: "Hover or long-press." },
        { title: "2FA", text: "Stolen passwords become useless." },
        { title: "Report", text: "To brand's phishing address." }
      ],
      android: [
        { title: "Signs", text: "SMS links, urgent bank msgs, fake delivery." },
        { title: "Long-press link", text: "Preview URL." },
        { title: "2FA", text: "Google Auth / Aegis." },
        { title: "Report", text: "Long-press → Report." }
      ],
      mac: [
        { title: "Apple phishing", text: "Real Apple = @apple.com only." },
        { title: "Report", text: "reportphishing@apple.com." }
      ],
      windows: [
        { title: "Microsoft phishing", text: "Fake 'unusual sign-in'." },
        { title: "Check URL", text: "microsoft.com, live.com only." },
        { title: "Report", text: "Outlook: Report → Phishing." }
      ],
      ios: [
        { title: "Fake Apple msgs", text: "Apple never asks pw via iMessage." },
        { title: "Report", text: "reportphishing@apple.com." }
      ]
    },
    repo: { url: "https://www.phishing.org/what-is-phishing", label: "Phishing.org" }
  },

  {
    id: "wireshark", title: "Analyze Network Traffic with Wireshark", category: "Networking",
    difficulty: "intermediate", time: "20 min",
    summary: "See every packet.",
    intro: "Wireshark — capture + inspect traffic.",
    tags: ["wireshark"], platforms: ["linux", "mac", "windows"],
    steps: {
      linux: [
        { title: "⚠️ Own only", text: "Own networks only.", note: { type: "warn", text: "Own only." } },
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt install wireshark -y", lang: "bash" },
        { title: "Non-root", text: "Group.", code: "sudo usermod -aG wireshark $USER\nnewgrp wireshark", lang: "bash" },
        { title: "Capture", text: "Pick interface." },
        { title: "Filters", text: "Cheat.", code: "http\ndns\ntcp.port == 443\nip.addr == 192.168.1.1", lang: "text" },
        { title: "Follow", text: "Right-click → Follow TCP Stream." }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install --cask wireshark", lang: "bash" },
        { title: "Capture", text: "en0." }
      ],
      windows: [
        { title: "Install", text: "Site.", code: "https://www.wireshark.org/download.html", lang: "text" },
        { title: "Capture", text: "WiFi adapter." }
      ]
    },
    repo: { url: "https://www.wireshark.org/docs/", label: "Wireshark" }
  },

  // ===== ANDROID =====
  {
    id: "magisk", title: "Root Android with Magisk", category: "Android",
    difficulty: "advanced", time: "30 min",
    summary: "Systemless root.",
    intro: "Magisk patches boot image.",
    tags: ["root"], platforms: ["android"],
    steps: {
      android: [
        { title: "⚠️ Back up", text: "Unlocking wipes data.", note: { type: "danger", text: "All data lost." } },
        { title: "OEM unlock", text: "Developer options ON." },
        { title: "Fastboot", text: "Unlock.", code: "adb reboot bootloader\nfastboot flashing unlock", lang: "bash" },
        { title: "boot.img", text: "From firmware." },
        { title: "Magisk app", text: "GitHub." },
        { title: "Patch", text: "Magisk → Install → Select and Patch." },
        { title: "Flash", text: "Patched boot.", code: "fastboot flash boot magisk_patched.img\nfastboot reboot", lang: "bash" },
        { title: "Verify", text: "Magisk → Installed." }
      ]
    },
    repo: { url: "https://github.com/topjohnwu/Magisk", label: "Magisk" }
  },

  {
    id: "adb", title: "Set Up ADB & Fastboot", category: "Android",
    difficulty: "intermediate", time: "12 min",
    summary: "Bridge between PC and Android.",
    intro: "ADB + Fastboot.",
    tags: ["adb"], platforms: ["linux", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt install android-tools-adb android-tools-fastboot -y", lang: "bash" },
        { title: "USB debug", text: "Developer options ON." },
        { title: "Verify", text: "Accept prompt.", code: "adb devices", lang: "bash" },
        { title: "Files", text: "Push/pull.", code: "adb push file.txt /sdcard/\nadb pull /sdcard/photo.jpg", lang: "bash" },
        { title: "Install", text: "APK.", code: "adb install app.apk", lang: "bash" },
        { title: "Modes", text: "Fastboot or recovery.", code: "adb reboot bootloader\nadb reboot recovery", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install android-platform-tools", lang: "bash" },
        { title: "Verify", text: "adb devices.", code: "adb devices", lang: "bash" }
      ],
      windows: [
        { title: "Download", text: "Google.", code: "https://developer.android.com/tools/releases/platform-tools", lang: "text" },
        { title: "Verify", text: "In folder.", code: ".\\adb devices", lang: "powershell" }
      ]
    },
    repo: { url: "https://developer.android.com/tools/adb", label: "ADB" }
  },

  {
    id: "proot", title: "Run Full Linux on Android (proot)", category: "Android",
    difficulty: "intermediate", time: "20 min",
    summary: "Real Ubuntu inside Termux.",
    intro: "proot-distro — no root.",
    tags: ["proot"], platforms: ["android"],
    steps: {
      android: [
        { title: "Termux", text: "F-Droid." },
        { title: "Install", text: "proot-distro.", code: "pkg update && pkg upgrade -y\npkg install proot-distro -y", lang: "bash" },
        { title: "List", text: "Distros.", code: "proot-distro list", lang: "bash" },
        { title: "Install", text: "Ubuntu.", code: "proot-distro install ubuntu", lang: "bash" },
        { title: "Login", text: "Inside.", code: "proot-distro login ubuntu", lang: "bash" },
        { title: "Setup", text: "Tools.", code: "apt update && apt upgrade -y\napt install python3 git nano -y", lang: "bash" },
        { title: "Storage", text: "Link phone files.", code: "ln -s /data/data/com.termux/files/home/storage ~/storage", lang: "bash" }
      ]
    },
    repo: { url: "https://github.com/termux/proot-distro", label: "proot-distro" }
  },

  {
    id: "custom-rom", title: "Flash a Custom ROM (LineageOS)", category: "Android",
    difficulty: "advanced", time: "1 hour",
    summary: "Clean, privacy ROM.",
    intro: "LineageOS — most popular ROM.",
    tags: ["rom"], platforms: ["android"],
    steps: {
      android: [
        { title: "⚠️ Verify model", text: "Wrong ROM bricks.", note: { type: "danger", text: "lineageos.org/devices." } },
        { title: "Back up", text: "Wipes phone." },
        { title: "Unlock bootloader", text: "See Magisk." },
        { title: "Download", text: "ROM + recovery." },
        { title: "Flash recovery", text: "Fastboot.", code: "fastboot flash recovery recovery.img\nfastboot reboot recovery", lang: "bash" },
        { title: "Wipe", text: "Format data." },
        { title: "Sideload", text: "Apply from ADB.", code: "adb sideload lineage-21.zip", lang: "bash" },
        { title: "GApps", text: "Optional.", code: "adb sideload MindTheGapps.zip", lang: "bash" },
        { title: "Reboot", text: "First boot 5–10 min." }
      ]
    },
    repo: { url: "https://wiki.lineageos.org/devices/", label: "LineageOS" }
  },

  // ===== STREAMING =====
  {
    id: "ytdlp", title: "Download Any Video with yt-dlp", category: "Streaming",
    difficulty: "beginner", time: "8 min",
    summary: "YouTube, TikTok, 1000+ sites.",
    intro: "yt-dlp — fast youtube-dl fork.",
    tags: ["yt-dlp"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Install", text: "pip.", code: "pip install -U yt-dlp", lang: "bash" },
        { title: "Download", text: "URL.", code: "yt-dlp \"URL\"", lang: "bash" },
        { title: "MP3", text: "Audio.", code: "yt-dlp -x --audio-format mp3 \"URL\"", lang: "bash" },
        { title: "Playlist", text: "Numbered.", code: "yt-dlp -o \"%(playlist_index)s - %(title)s.%(ext)s\" \"PLAYLIST\"", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "Termux.", code: "pkg install python ffmpeg -y\npip install -U yt-dlp", lang: "bash" },
        { title: "Storage", text: "Grant.", code: "termux-setup-storage", lang: "bash" },
        { title: "Download", text: "To Downloads.", code: "cd ~/storage/downloads\nyt-dlp \"URL\"", lang: "bash" },
        { title: "MP3", text: "Audio.", code: "yt-dlp -x --audio-format mp3 \"URL\"", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install yt-dlp", lang: "bash" },
        { title: "Download", text: "URL.", code: "yt-dlp \"URL\"", lang: "bash" }
      ],
      windows: [
        { title: "Install", text: "winget.", code: "winget install yt-dlp", lang: "powershell" },
        { title: "Download", text: "URL.", code: "yt-dlp \"URL\"", lang: "powershell" }
      ],
      ios: [
        { title: "a-Shell", text: "App Store." },
        { title: "Install", text: "pip.", code: "pip install yt-dlp", lang: "bash" },
        { title: "Download", text: "Documents.", code: "yt-dlp \"URL\"", lang: "bash" }
      ]
    },
    repo: { url: "https://github.com/yt-dlp/yt-dlp", label: "yt-dlp" }
  },

  {
    id: "ani-cli", title: "Watch Anime Free with ani-cli", category: "Streaming",
    difficulty: "beginner", time: "10 min",
    summary: "Anime from terminal.",
    intro: "Open-source anime CLI.",
    tags: ["anime"], platforms: ["linux", "android", "mac"],
    steps: {
      linux: [
        { title: "Deps", text: "Debian/Ubuntu.", code: "sudo apt install git mpv fzf -y", lang: "bash" },
        { title: "Install", text: "Clone.", code: "git clone https://github.com/pystardust/ani-cli\ncd ani-cli\nsudo cp ani-cli /usr/local/bin/\nsudo chmod +x /usr/local/bin/ani-cli", lang: "bash" },
        { title: "Run", text: "Search.", code: "ani-cli", lang: "bash" }
      ],
      android: [
        { title: "Termux", text: "F-Droid." },
        { title: "Deps", text: "Inside.", code: "pkg install git mpv fzf -y", lang: "bash" },
        { title: "Install", text: "Copy.", code: "git clone https://github.com/pystardust/ani-cli\ncd ani-cli\ncp ani-cli $PREFIX/bin/\nchmod +x $PREFIX/bin/ani-cli", lang: "bash" },
        { title: "Run", text: "Search.", code: "ani-cli", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install git mpv fzf\ngit clone https://github.com/pystardust/ani-cli\ncd ani-cli\nsudo cp ani-cli /usr/local/bin/\nsudo chmod +x /usr/local/bin/ani-cli", lang: "bash" }
      ]
    },
    repo: { url: "https://github.com/pystardust/ani-cli", label: "ani-cli" }
  },

  {
    id: "stremio", title: "Free Movies & TV (Stremio + Torrentio)", category: "Streaming",
    difficulty: "beginner", time: "12 min",
    summary: "Huge streaming library.",
    intro: "Stremio legal. Torrentio — follow laws.",
    tags: ["stremio"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Legal", text: "Know laws.", note: { type: "warn", text: "Know laws." } },
        { title: "Install", text: "App.", code: "https://www.stremio.com/downloads", lang: "text" },
        { title: "Torrentio", text: "Browser.", code: "https://torrentio.strem.fun/", lang: "text" },
        { title: "Watch", text: "Search." }
      ],
      android: [
        { title: "Install", text: "Play Store." },
        { title: "Torrentio", text: "Chrome.", code: "https://torrentio.strem.fun/", lang: "text" },
        { title: "Player", text: "VLC." },
        { title: "Watch", text: "Search." }
      ],
      mac: [
        { title: "Install + Torrentio", text: "Same.", code: "https://www.stremio.com/downloads", lang: "text" }
      ],
      windows: [
        { title: "Install + Torrentio", text: "Same.", code: "https://www.stremio.com/downloads", lang: "text" }
      ],
      ios: [
        { title: "Install", text: "App Store." },
        { title: "Torrentio", text: "Safari.", code: "https://torrentio.strem.fun/", lang: "text" }
      ]
    },
    repo: { url: "https://www.stremio.com/", label: "Stremio" }
  },

  {
  id: "moonlight",
  title: "Stream PC Games to Any Device",
  category: "Streaming",
  difficulty: "intermediate",
  time: "20 min",
  summary: "Play PC games on your phone, tablet, or another PC using Sunshine + Moonlight.",
  intro: "Sunshine runs on your gaming PC as the host. Moonlight runs on the device you want to play on — phone, tablet, Mac, or another PC. Free, low-latency, over your own network.",
  tags: ["gaming", "streaming"],
  platforms: ["linux", "android", "mac", "windows", "ios"],
  steps: {
    linux: [
      { title: "Install Sunshine (on gaming PC)", text: "Download the Linux build.", code: "https://github.com/LizardByte/Sunshine/releases", lang: "text" },
      { title: "Configure Sunshine", text: "Open the web UI in a browser on the same PC.", code: "https://localhost:47990", lang: "text" },
      { title: "Create admin account", text: "First launch asks you to set a username + password for the web UI." },
      { title: "Add your games", text: "In the Sunshine web UI → Applications → + Add. Point it to your game's .exe or a launcher like Steam, Epic, Heroic." },
      { title: "Install Moonlight on client", text: "On the device you want to play on, install Moonlight — see your platform's tab." }
    ],
    android: [
      { title: "Install Sunshine (on gaming PC)", text: "Follow the Linux/Windows/Mac tab for the host. Sunshine must run on your gaming PC." },
      { title: "Install Moonlight", text: "On your Android phone/tablet, from Play Store or F-Droid." },
      { title: "Pair with your PC", text: "Open Moonlight → it auto-detects PCs on your WiFi. Tap yours → a 4-digit PIN appears." },
      { title: "Enter PIN in Sunshine", text: "On your PC, open the Sunshine web UI → PIN section → paste the PIN → confirm." },
      { title: "Set stream quality", text: "Start at 20 Mbps on 5GHz WiFi. Raise if smooth, lower if stuttering.", note: { type: "tip", text: "Ethernet on the PC is strongly recommended." } },
      { title: "Add a controller", text: "Bluetooth controller (Xbox, PS5, 8BitDo) gives the best experience. Touchscreen works but is clunky." },
      { title: "Play", text: "Pick a game → it launches on your PC and streams to your phone." }
    ],
    mac: [
      { title: "Install Sunshine (on gaming PC)", text: "Sunshine runs on the PC that has the games. See the Linux/Windows tab on that machine." },
      { title: "Install Moonlight on Mac", text: "Download from the official site.", code: "https://moonlight-stream.org/", lang: "text" },
      { title: "Pair with your PC", text: "Open Moonlight → it auto-detects your gaming PC on the same network → tap it → get a PIN." },
      { title: "Authorize on PC", text: "On your gaming PC, open the Sunshine web UI at localhost:47990 → paste the PIN → confirm." },
      { title: "Play", text: "Pick a game and start streaming. Use the Mac keyboard/mouse or a Bluetooth controller." },
      { title: "Performance tip", text: "5GHz WiFi or Ethernet required. 2.4GHz will lag badly.", note: { type: "tip", text: "Lower the bitrate if you see stutter." } }
    ],
    windows: [
      { title: "Install Sunshine on your gaming PC", text: "Download the Windows installer.", code: "https://github.com/LizardByte/Sunshine/releases", lang: "text" },
      { title: "Set up Sunshine", text: "Open https://localhost:47990 in a browser → create admin account." },
      { title: "Add games", text: "Applications → + Add → point to your game .exe or launcher (Steam, Epic, Xbox app)." },
      { title: "Install Moonlight on client", text: "On the device you'll play on — phone, tablet, Mac, or another PC." },
      { title: "Pair", text: "Moonlight auto-detects your PC on the same WiFi → enter the PIN shown on your client into the Sunshine web UI." },
      { title: "Play", text: "Pick a game and stream. Start at 20 Mbps on 5GHz WiFi or Ethernet." }
    ],
    ios: [
      { title: "Install Sunshine (on gaming PC)", text: "Sunshine runs on your PC — see the Linux/Windows/Mac tab." },
      { title: "Install Moonlight", text: "From the App Store. Free." },
      { title: "Pair with PC", text: "Open Moonlight → auto-detects PCs on your WiFi → tap yours → get a PIN." },
      { title: "Authorize", text: "On your PC, open Sunshine's web UI → paste the PIN → confirm." },
      { title: "Add a controller", text: "Bluetooth controller strongly recommended. iPhone touchscreen for games is rough." },
      { title: "Play", text: "Pick a game → streams to your iPhone/iPad." }
    ]
  },
  repo: { url: "https://github.com/LizardByte/Sunshine", label: "Sunshine on GitHub" }
}

  // ===== NETWORKING =====
  {
    id: "wireguard", title: "Set Up Your Own VPN (WireGuard)", category: "Networking",
    difficulty: "intermediate", time: "25 min",
    summary: "Modern VPN.",
    intro: "WireGuard — fast, simple.",
    tags: ["vpn"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt update\nsudo apt install wireguard -y", lang: "bash" },
        { title: "Keys", text: "Server.", code: "wg genkey | tee privatekey | wg pubkey > publickey", lang: "bash" },
        { title: "Config", text: "/etc/wireguard/wg0.conf", code: "[Interface]\nAddress = 10.0.0.1/24\nListenPort = 51820\nPrivateKey = <server>", lang: "ini" },
        { title: "Firewall", text: "UFW.", code: "sudo ufw allow 51820/udp", lang: "bash" },
        { title: "Start", text: "Boot.", code: "sudo systemctl enable --now wg-quick@wg0", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "WireGuard app." },
        { title: "Tunnel", text: "QR or paste." },
        { title: "Always-on", text: "VPN settings." }
      ],
      mac: [
        { title: "Install", text: "App Store.", code: "https://apps.apple.com/app/wireguard/id1451685025", lang: "text" },
        { title: "Tunnel", text: "Paste or scan." }
      ],
      windows: [
        { title: "Install", text: "Site.", code: "https://www.wireguard.com/install/", lang: "text" },
        { title: "Tunnel", text: "Import .conf." }
      ],
      ios: [
        { title: "Install", text: "App Store.", code: "https://apps.apple.com/app/wireguard/id1441195209", lang: "text" },
        { title: "Tunnel", text: "Scan or paste." }
      ]
    },
    repo: { url: "https://www.wireguard.com/quickstart/", label: "WireGuard" }
  },

  {
    id: "nextcloud", title: "Self-Host Your Own Cloud", category: "Networking",
    difficulty: "intermediate", time: "30 min",
    summary: "Your own Google Drive.",
    intro: "Nextcloud — self-hosted.",
    tags: ["cloud"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Docker", text: "Install.", code: "curl -fsSL https://get.docker.com | sh", lang: "bash" },
        { title: "Run", text: "Quick.", code: "docker run -d -p 8080:80 nextcloud", lang: "bash" },
        { title: "Open", text: "Wizard.", code: "http://your-server-ip:8080", lang: "text" }
      ],
      android: [
        { title: "Client", text: "Play Store." },
        { title: "Log in", text: "Server + account." },
        { title: "Auto-upload", text: "Photos." }
      ],
      mac: [
        { title: "Client", text: "nextcloud.com.", code: "https://nextcloud.com/install/", lang: "text" }
      ],
      windows: [
        { title: "Client", text: "nextcloud.com.", code: "https://nextcloud.com/install/", lang: "text" }
      ],
      ios: [
        { title: "Client", text: "App Store." },
        { title: "Files integration", text: "Location." }
      ]
    },
    repo: { url: "https://github.com/nextcloud/server", label: "Nextcloud" }
  },

  {
    id: "pcapdroid", title: "Capture Network Traffic on Android", category: "Networking",
    difficulty: "intermediate", time: "15 min",
    summary: "No root capture.",
    intro: "PCAPdroid — own device only.",
    tags: ["pcap"], platforms: ["android"],
    steps: {
      android: [
        { title: "⚠️ Legal", text: "Own device.", note: { type: "danger", text: "Others = crime." } },
        { title: "Install", text: "F-Droid.", code: "https://f-droid.org/packages/com.emanuelef.remote_capture/", lang: "text" },
        { title: "Start", text: "Tap play." },
        { title: "Filter", text: "App-specific." },
        { title: "Export", text: "PCAP → Wireshark." }
      ]
    },
    repo: { url: "https://github.com/emanuelef/PCAPdroid", label: "PCAPdroid" }
  },

  // ===== CODING =====
  {
    id: "js-basics", title: "JavaScript in 20 Minutes", category: "Coding",
    difficulty: "beginner", time: "20 min",
    summary: "The language that runs the web.",
    intro: "JavaScript powers every website. Learn variables, functions, arrays, and DOM.",
    tags: ["javascript"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Open DevTools", text: "F12 in any browser → Console tab." },
        { title: "Variables", text: "let/const.", code: "let name = \"Neo\";\nconst age = 42;\nconsole.log(name, age);", lang: "javascript" },
        { title: "Functions", text: "Arrow functions.", code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));", lang: "javascript" },
        { title: "Arrays", text: "List data.", code: "const colors = [\"red\", \"blue\"];\ncolors.push(\"green\");\nconsole.log(colors.length);", lang: "javascript" },
        { title: "Objects", text: "Key-value.", code: "const user = { name: \"Neo\", age: 42 };\nconsole.log(user.name);", lang: "javascript" },
        { title: "DOM", text: "Manipulate the page.", code: "document.body.style.background = \"black\";\ndocument.title = \"Changed!\";", lang: "javascript" },
        { title: "Events", text: "Respond to clicks.", code: "document.addEventListener(\"click\", () => alert(\"Clicked!\"));", lang: "javascript" }
      ],
      android: [
        { title: "Kiwi Browser", text: "Full dev tools on Android." },
        { title: "Console", text: "Menu → Dev tools → Console." },
        { title: "Try it", text: "Same examples.", code: "let name = \"Neo\";\nconsole.log(name);", lang: "javascript" },
        { title: "Edit pages live", text: "Any site, instantly.", code: "document.body.style.background = \"pink\";", lang: "javascript" }
      ],
      mac: [
        { title: "Safari DevTools", text: "Safari → Develop → Show JavaScript Console." },
        { title: "Try basics", text: "Same code.", code: "const x = [1,2,3].map(n => n * 2);\nconsole.log(x);", lang: "javascript" }
      ],
      windows: [
        { title: "DevTools", text: "F12 → Console." },
        { title: "Try basics", text: "Same code.", code: "console.log(\"hello world\");", lang: "javascript" }
      ],
      ios: [
        { title: "Safari Web Inspector", text: "Enable in Settings → Safari → Advanced → Web Inspector." },
        { title: "Or use Play.js", text: "Real JS editor for iOS." }
      ]
    },
    repo: { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", label: "MDN JavaScript" }
  },

  {
    id: "react-basics", title: "React in 15 Minutes", category: "Coding",
    difficulty: "intermediate", time: "15 min",
    summary: "Build interactive UIs with React.",
    intro: "React is the most popular UI framework. Learn components, props, and state.",
    tags: ["react", "javascript"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install Node", text: "Prereq.", code: "sudo apt install nodejs npm -y", lang: "bash" },
        { title: "Create app", text: "Vite is fastest.", code: "npm create vite@latest myapp -- --template react\ncd myapp\nnpm install\nnpm run dev", lang: "bash" },
        { title: "Components", text: "Edit src/App.jsx.", code: "function Hello({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default function App() {\n  return <Hello name=\"Neo\" />;\n}", lang: "javascript" },
        { title: "State", text: "useState hook.", code: "import { useState } from 'react';\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;\n}", lang: "javascript" },
        { title: "Build", text: "For production.", code: "npm run build", lang: "bash" }
      ],
      android: [
        { title: "Install Node", text: "Termux.", code: "pkg install nodejs -y", lang: "bash" },
        { title: "Create", text: "Vite app.", code: "npm create vite@latest myapp -- --template react\ncd myapp\nnpm install\nnpm run dev -- --host", lang: "bash" },
        { title: "Open in browser", text: "localhost:5173." }
      ],
      mac: [
        { title: "Setup", text: "Brew + create.", code: "brew install node\nnpm create vite@latest myapp -- --template react\ncd myapp && npm install && npm run dev", lang: "bash" }
      ],
      windows: [
        { title: "Setup", text: "Node + create.", code: "npm create vite@latest myapp -- --template react\ncd myapp && npm install && npm run dev", lang: "powershell" }
      ]
    },
    repo: { url: "https://react.dev/learn", label: "React Docs" }
  },

  {
    id: "git", title: "Git in 10 Commands", category: "Coding",
    difficulty: "beginner", time: "15 min",
    summary: "Daily version control.",
    intro: "10 commands cover 95%.",
    tags: ["git"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt install git -y", lang: "bash" },
        { title: "Identity", text: "Once.", code: "git config --global user.name \"You\"\ngit config --global user.email \"you@example.com\"", lang: "bash" },
        { title: "Init", text: "Start.", code: "git init\ngit status", lang: "bash" },
        { title: "Commit", text: "Save.", code: "git add .\ngit commit -m \"Message\"", lang: "bash" },
        { title: "Push", text: "GitHub.", code: "git push -u origin main", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "Termux.", code: "pkg install git -y", lang: "bash" },
        { title: "Storage", text: "Grant.", code: "termux-setup-storage", lang: "bash" },
        { title: "Identity", text: "Once.", code: "git config --global user.name \"You\"\ngit config --global user.email \"you@example.com\"", lang: "bash" },
        { title: "Clone", text: "Into Downloads.", code: "cd ~/storage/downloads\ngit clone https://github.com/user/repo", lang: "bash" },
        { title: "Workflow", text: "Add/commit/push.", code: "git add .\ngit commit -m \"update\"\ngit push", lang: "bash" }
      ],
      mac: [
        { title: "Install + identity", text: "Brew.", code: "brew install git\ngit config --global user.name \"You\"\ngit config --global user.email \"you@example.com\"", lang: "bash" }
      ],
      windows: [
        { title: "Install + identity", text: "winget.", code: "winget install Git.Git\ngit config --global user.name \"You\"\ngit config --global user.email \"you@example.com\"", lang: "powershell" }
      ]
    },
    repo: { url: "https://git-scm.com/doc", label: "Git Docs" }
  },

  {
    id: "pages", title: "Host a Website Free (GitHub Pages)", category: "Coding",
    difficulty: "beginner", time: "10 min",
    summary: "Public URL free.",
    intro: "Static hosting.",
    tags: ["github"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Repo", text: "New.", code: "https://github.com/new", lang: "text" },
        { title: "Push", text: "Or upload.", code: "git init\ngit add .\ngit commit -m \"first\"\ngit remote add origin https://github.com/you/repo.git\ngit push -u origin main", lang: "bash" },
        { title: "Enable", text: "Settings → Pages." },
        { title: "Visit", text: "Wait + link.", code: "https://yourname.github.io/repo/", lang: "text" }
      ],
      android: [
        { title: "Repo", text: "Chrome." },
        { title: "Upload", text: "Add file." },
        { title: "Enable", text: "Pages." },
        { title: "Tip", text: "Desktop site for settings." }
      ],
      mac: [
        { title: "Create + enable", text: "Same as Linux." }
      ],
      windows: [
        { title: "Create + enable", text: "GitHub Desktop or web." }
      ],
      ios: [
        { title: "Repo", text: "Safari." },
        { title: "Upload", text: "Add file." },
        { title: "Enable", text: "Pages." },
        { title: "Tip", text: "Request desktop site." }
      ]
    },
    repo: { url: "https://pages.github.com/", label: "GitHub Pages" }
  },

  {
    id: "docker", title: "Get Started with Docker", category: "Coding",
    difficulty: "intermediate", time: "20 min",
    summary: "Containers.",
    intro: "Docker packages apps.",
    tags: ["docker"], platforms: ["linux", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install", text: "Official.", code: "curl -fsSL https://get.docker.com | sh", lang: "bash" },
        { title: "Group", text: "No sudo.", code: "sudo usermod -aG docker $USER\nnewgrp docker", lang: "bash" },
        { title: "Test", text: "Hello.", code: "docker run hello-world", lang: "bash" },
        { title: "Cheat", text: "Common.", code: "docker ps\ndocker images\ndocker run -d -p 8080:80 nginx\ndocker stop <id>", lang: "bash" }
      ],
      mac: [
        { title: "Desktop", text: "docker.com.", code: "https://www.docker.com/products/docker-desktop/", lang: "text" },
        { title: "Test", text: "Hello.", code: "docker run hello-world", lang: "bash" }
      ],
      windows: [
        { title: "Desktop", text: "WSL2 required.", code: "https://www.docker.com/products/docker-desktop/", lang: "text" },
        { title: "Test", text: "Hello.", code: "docker run hello-world", lang: "powershell" }
      ]
    },
    repo: { url: "https://docs.docker.com/get-started/", label: "Docker Docs" }
  },

  {
    id: "tmux", title: "Master tmux", category: "Coding",
    difficulty: "intermediate", time: "12 min",
    summary: "Terminal multiplexer.",
    intro: "Split terminal, persistent.",
    tags: ["tmux"], platforms: ["linux", "android", "mac"],
    steps: {
      linux: [
        { title: "Install", text: "Debian/Ubuntu.", code: "sudo apt install tmux -y", lang: "bash" },
        { title: "Start", text: "Named.", code: "tmux new -s work", lang: "bash" },
        { title: "Keys", text: "Prefix Ctrl+B.", code: "Ctrl+B %      → split vertical\nCtrl+B \"      → split horizontal\nCtrl+B arrow  → move panes\nCtrl+B d      → detach", lang: "text" },
        { title: "Reattach", text: "After detach.", code: "tmux attach -t work", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "Termux.", code: "pkg install tmux -y", lang: "bash" },
        { title: "Use", text: "Same.", code: "tmux new -s work", lang: "bash" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install tmux", lang: "bash" }
      ]
    },
    repo: { url: "https://github.com/tmux/tmux", label: "tmux" }
  },

  {
    id: "ssh", title: "SSH Like a Pro", category: "Coding",
    difficulty: "beginner", time: "10 min",
    summary: "Keys, aliases, tunnels.",
    intro: "SSH — remote login standard.",
    tags: ["ssh"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Key", text: "Generate.", code: "ssh-keygen -t ed25519 -C \"you@email\"", lang: "bash" },
        { title: "Copy", text: "To server.", code: "ssh-copy-id user@server.com", lang: "bash" },
        { title: "Connect", text: "No password.", code: "ssh user@server.com", lang: "bash" },
        { title: "Alias", text: "~/.ssh/config.", code: "Host vps\n  HostName server.com\n  User you", lang: "text" },
        { title: "Tunnel", text: "Local port forward.", code: "ssh -L 8080:localhost:80 user@server", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "Termux.", code: "pkg install openssh -y", lang: "bash" },
        { title: "Key", text: "Same.", code: "ssh-keygen -t ed25519", lang: "bash" },
        { title: "Connect", text: "Same.", code: "ssh user@server.com", lang: "bash" }
      ],
      mac: [
        { title: "Built-in", text: "Generate.", code: "ssh-keygen -t ed25519", lang: "bash" },
        { title: "Connect", text: "Copy + go.", code: "ssh-copy-id user@server.com\nssh user@server.com", lang: "bash" }
      ],
      windows: [
        { title: "Built-in", text: "Win10+ PowerShell.", code: "ssh-keygen -t ed25519\nssh user@server.com", lang: "powershell" }
      ]
    },
    repo: { url: "https://www.ssh.com/academy/ssh", label: "SSH Academy" }
  },

  {
    id: "python-venv", title: "Python Virtual Environments", category: "Coding",
    difficulty: "beginner", time: "8 min",
    summary: "Isolated dependencies.",
    intro: "venv per project.",
    tags: ["python"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install", text: "Python + venv.", code: "sudo apt install python3 python3-venv -y", lang: "bash" },
        { title: "Create", text: "In project.", code: "cd myproject\npython3 -m venv .venv", lang: "bash" },
        { title: "Activate", text: "Every terminal.", code: "source .venv/bin/activate", lang: "bash" },
        { title: "Install", text: "Isolated pip.", code: "pip install requests\npip freeze > requirements.txt", lang: "bash" }
      ],
      android: [
        { title: "Install", text: "Termux.", code: "pkg install python -y", lang: "bash" },
        { title: "Create + use", text: "Same.", code: "python -m venv .venv\nsource .venv/bin/activate", lang: "bash" }
      ],
      mac: [
        { title: "Install + use", text: "Brew.", code: "brew install python\npython3 -m venv .venv\nsource .venv/bin/activate", lang: "bash" }
      ],
      windows: [
        { title: "Install", text: "python.org.", code: "https://www.python.org/downloads/", lang: "text" },
        { title: "Create + use", text: "Different path.", code: "python -m venv .venv\n.venv\\Scripts\\activate", lang: "powershell" }
      ]
    },
    repo: { url: "https://docs.python.org/3/tutorial/venv.html", label: "venv" }
  },

  // ===== LINUX =====
  {
    id: "arch", title: "Install Arch Linux from Scratch", category: "Linux",
    difficulty: "advanced", time: "45 min",
    summary: "Build Arch yourself.",
    intro: "UEFI assumed.",
    tags: ["arch"], platforms: ["linux"],
    steps: {
      linux: [
        { title: "Boot ISO", text: "USB.", note: { type: "danger", text: "Erases disk." } },
        { title: "Partition", text: "EFI + root.", code: "cfdisk /dev/nvme0n1", lang: "bash" },
        { title: "Format", text: "FAT32 + ext4.", code: "mkfs.fat -F32 /dev/nvme0n1p1\nmkfs.ext4 /dev/nvme0n1p2", lang: "bash" },
        { title: "Mount", text: "Root then EFI.", code: "mount /dev/nvme0n1p2 /mnt\nmkdir -p /mnt/boot/efi\nmount /dev/nvme0n1p1 /mnt/boot/efi", lang: "bash" },
        { title: "Base", text: "Kernel + tools.", code: "pacstrap -K /mnt base linux linux-firmware nano networkmanager sudo", lang: "bash" },
        { title: "fstab + chroot", text: "Enter.", code: "genfstab -U /mnt >> /mnt/etc/fstab\narch-chroot /mnt", lang: "bash" },
        { title: "GRUB", text: "Bootloader.", code: "pacman -S grub efibootmgr\ngrub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg", lang: "bash" },
        { title: "Reboot", text: "Enable + restart.", code: "systemctl enable NetworkManager\nexit\numount -R /mnt\nreboot", lang: "bash" }
      ]
    },
    repo: { url: "https://wiki.archlinux.org/title/Installation_guide", label: "Arch Guide" }
  },

  {
    id: "linux-rice", title: "Customize Your Linux Desktop (Ricing)", category: "Linux",
    difficulty: "intermediate", time: "30 min",
    summary: "Make it yours.",
    intro: "Ricing your desktop.",
    tags: ["ricing"], platforms: ["linux"],
    steps: {
      linux: [
        { title: "Base", text: "i3/bspwm/Hyprland — or KDE/GNOME." },
        { title: "Terminal", text: "Kitty or Alacritty.", code: "sudo apt install kitty -y", lang: "bash" },
        { title: "Nerd Fonts", text: "Icons.", code: "https://www.nerdfonts.com/font-downloads", lang: "text" },
        { title: "Prompt", text: "Starship.", code: "curl -sS https://starship.rs/install.sh | sh", lang: "bash" },
        { title: "Inspiration", text: "r/unixporn." },
        { title: "Dotfiles", text: "Clone.", code: "git clone https://github.com/yourfavorite/dotfiles", lang: "bash" }
      ]
    },
    repo: { url: "https://www.reddit.com/r/unixporn/", label: "r/unixporn" }
  },

  {
    id: "bash", title: "Bash Scripting for Beginners", category: "Linux",
    difficulty: "beginner", time: "20 min",
    summary: "Automate boring stuff.",
    intro: "Bash — default shell.",
    tags: ["bash"], platforms: ["linux", "android", "mac"],
    steps: {
      linux: [
        { title: "First script", text: "hello.sh.", code: "#!/bin/bash\necho \"Hello, $USER!\"", lang: "bash" },
        { title: "Run", text: "chmod + execute.", code: "chmod +x hello.sh\n./hello.sh", lang: "bash" },
        { title: "Variables", text: "Store.", code: "name=\"Neo\"\necho \"Hi $name\"", lang: "bash" },
        { title: "Conditionals", text: "If.", code: "if [ -f myfile.txt ]; then\n  echo \"Exists\"\nfi", lang: "bash" },
        { title: "Loops", text: "Repeat.", code: "for i in 1 2 3; do\n  echo \"$i\"\ndone", lang: "bash" }
      ],
      android: [
        { title: "Same as Linux", text: "Bash in Termux.", code: "nano hello.sh\nbash hello.sh", lang: "bash" }
      ],
      mac: [
        { title: "Bash works", text: "macOS uses zsh but bash runs.", code: "#!/bin/bash\necho \"Hi $USER\"", lang: "bash" }
      ]
    },
    repo: { url: "https://www.gnu.org/software/bash/manual/", label: "Bash Manual" }
  },

  // ===== iOS =====
  {
    id: "ios-ashell", title: "Get a Real Terminal on iPhone (a-Shell)", category: "iOS",
    difficulty: "beginner", time: "10 min",
    summary: "Unix shell for iOS.",
    intro: "a-Shell — legit shell.",
    tags: ["ios"], platforms: ["ios"],
    steps: {
      ios: [
        { title: "Install", text: "App Store." },
        { title: "Explore", text: "Basic commands." },
        { title: "Help", text: "See included.", code: "help", lang: "bash" },
        { title: "Python", text: "Run.", code: "python3 -c \"print('hello')\"", lang: "bash" },
        { title: "pip", text: "Install packages.", code: "pip install requests", lang: "bash" },
        { title: "Files", text: "Files app → On My iPhone → a-Shell." }
      ]
    },
    repo: { url: "https://holzschu.github.io/a-Shell_iOS/", label: "a-Shell" }
  },

  {
    id: "ios-shortcuts", title: "Automate Your iPhone with Shortcuts", category: "iOS",
    difficulty: "beginner", time: "15 min",
    summary: "No coding needed.",
    intro: "Shortcuts — visual automation.",
    tags: ["ios", "shortcuts"], platforms: ["ios"],
    steps: {
      ios: [
        { title: "Open", text: "Pre-installed." },
        { title: "New", text: "Tap +." },
        { title: "Action", text: "'Get Current Weather'." },
        { title: "Chain", text: "'Show Result'." },
        { title: "Widget", text: "Add to home." },
        { title: "Automation", text: "'When I arrive at home'." },
        { title: "API", text: "'Get Contents of URL'.", code: "https://api.github.com/users/torvalds", lang: "text" }
      ]
    },
    repo: { url: "https://support.apple.com/guide/shortcuts/welcome/ios", label: "Shortcuts Guide" }
  },

  {
    id: "ios-scriptable", title: "Write JS Widgets on iOS (Scriptable)", category: "iOS",
    difficulty: "intermediate", time: "20 min",
    summary: "JavaScript widgets.",
    intro: "Scriptable runs JS on iOS.",
    tags: ["ios", "javascript"], platforms: ["ios"],
    steps: {
      ios: [
        { title: "Install", text: "App Store." },
        { title: "Script", text: "Tap + → paste.", code: "let date = new Date()\nlet greeting = date.getHours() < 12 ? \"Good morning\" : \"Good evening\"\nScript.setWidget({ body: greeting })\nScript.complete()", lang: "javascript" },
        { title: "Widget", text: "Long-press home → + → Scriptable." },
        { title: "Assign", text: "Edit widget → script." },
        { title: "API", text: "Fetch data.", code: "let req = new Request(\"https://api.github.com/users/torvalds\")\nlet json = await req.loadJSON()\nScript.setWidget({ body: json.name })\nScript.complete()", lang: "javascript" }
      ]
    },
    repo: { url: "https://docs.scriptable.app/", label: "Scriptable Docs" }
  },

  {
    id: "ios-python", title: "Run Python on iPhone", category: "iOS",
    difficulty: "intermediate", time: "15 min",
    summary: "Python on iOS.",
    intro: "a-Shell or Pythonista.",
    tags: ["ios", "python"], platforms: ["ios"],
    steps: {
      ios: [
        { title: "a-Shell", text: "Free." },
        { title: "Script", text: "Run.", code: "nano script.py\npython3 script.py", lang: "bash" },
        { title: "pip", text: "Install.", code: "pip install requests", lang: "bash" },
        { title: "Pythonista", text: "Paid IDE." },
        { title: "Files", text: "On My iPhone." }
      ]
    },
    repo: { url: "https://holzschu.github.io/a-Shell_iOS/", label: "a-Shell" }
  },

  // ===== MAC =====
  {
    id: "mac-homebrew", title: "Homebrew Masterclass (macOS)", category: "Mac",
    difficulty: "beginner", time: "15 min",
    summary: "Install anything on macOS.",
    intro: "Homebrew — package manager.",
    tags: ["mac", "homebrew"], platforms: ["mac"],
    steps: {
      mac: [
        { title: "Install", text: "One-liner.", code: "/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"", lang: "bash" },
        { title: "Verify", text: "Version.", code: "brew --version", lang: "bash" },
        { title: "Update", text: "Current.", code: "brew update && brew upgrade", lang: "bash" },
        { title: "CLI tools", text: "Common.", code: "brew install git node python ffmpeg wget", lang: "bash" },
        { title: "GUI apps", text: "Casks.", code: "brew install --cask firefox vlc visual-studio-code", lang: "bash" },
        { title: "Cleanup", text: "Free space.", code: "brew cleanup", lang: "bash" },
        { title: "Bundle", text: "Save setup.", code: "brew bundle dump", lang: "bash" }
      ]
    },
    repo: { url: "https://brew.sh/", label: "Homebrew" }
  }

];