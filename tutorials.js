// =============================================
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
// TUTORIALS
// =============================================
window.TUTORIALS = [

  // ===== AI =====
  {
    id: "ollama", title: "Run AI Models Locally with Ollama", category: "AI",
    difficulty: "beginner", time: "15 min",
    summary: "Run Llama, Mistral, DeepSeek offline on your own machine.",
    intro: "Ollama runs large language models locally with one command. No API keys, nothing leaves your device.",
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
        { title: "Tiny model", text: "Fits phones.", code: "ollama pull tinyllama\nollama run tinyllama", lang: "bash" }
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
    summary: "Official Gemini CLI.",
    intro: "Google's official Gemini CLI gives you a fast AI assistant in the terminal.",
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
    summary: "Understand what Metasploit is — safely.",
    intro: "Metasploit is the most popular exploitation framework. Concepts only, legal labs only.",
    tags: ["metasploit"], platforms: ["linux", "mac"],
    steps: {
      linux: [
        { title: "⚠️ Legal warning", text: "Exploiting systems you don't own is a crime. Use TryHackMe/HackTheBox labs only.", note: { type: "danger", text: "Legal labs only." } },
        { title: "What it is", text: "Framework with modules: exploits, payloads, auxiliaries, post-exploitation." },
        { title: "Install", text: "Kali ships it. Or:", code: "sudo apt install metasploit-framework -y", lang: "bash" },
        { title: "Start", text: "Lab machines only.", code: "msfconsole", lang: "bash" },
        { title: "Workflow", text: "Search → use → set → run.", code: "search <keyword>\nuse <module>\nshow options\nset RHOSTS <lab-ip>\nrun", lang: "bash" },
        { title: "Practice", text: "Free legal targets.", code: "https://tryhackme.com\nhttps://www.hackthebox.com", lang: "text" }
      ],
      mac: [
        { title: "⚠️ Legal warning", text: "Legal labs only.", note: { type: "danger", text: "Others = crime." } },
        { title: "Easier path", text: "Run Kali Linux in UTM or VirtualBox — Metasploit pre-installed." },
        { title: "Practice", text: "TryHackMe.", code: "https://tryhackme.com", lang: "text" }
      ]
    },
    repo: { url: "https://www.metasploit.com/", label: "Metasploit" }
  },

  {
    id: "hydra-defense", title: "Password Attacks: How Hydra Works (Defense)", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "Understand password-cracking tools to defend.",
    intro: "Hydra is a password-cracking tool. Learn what it does and how to harden against it.",
    tags: ["hydra", "defense"], platforms: ["linux", "mac"],
    steps: {
      linux: [
        { title: "⚠️ Defense only", text: "Running Hydra against real accounts is a crime.", note: { type: "danger", text: "Defense only." } },
        { title: "What Hydra does", text: "Tries password lists against logins. Fast but loud." },
        { title: "Detection", text: "Watch auth logs.", code: "sudo tail -f /var/log/auth.log", lang: "bash" },
        { title: "Defense 1: Fail2ban", text: "Auto-blocks.", code: "sudo apt install fail2ban -y\nsudo systemctl enable --now fail2ban", lang: "bash" },
        { title: "Defense 2: SSH keys only", text: "Disable password auth.", code: "sudo nano /etc/ssh/sshd_config\n# PasswordAuthentication no", lang: "bash" },
        { title: "Defense 3: 2FA", text: "Even correct passwords fail." },
        { title: "Practice", text: "TryHackMe labs.", code: "https://tryhackme.com", lang: "text" }
      ],
      mac: [
        { title: "⚠️ Defense only", text: "Defense only.", note: { type: "danger", text: "Others = crime." } },
        { title: "Firewall", text: "System Settings → Network → Firewall ON." },
        { title: "Strong password", text: "Use a passphrase." }
      ]
    },
    repo: { url: "https://tryhackme.com", label: "TryHackMe" }
  },

  {
    id: "hashcat-theory", title: "Password Hashes & Hashcat (Defense)", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "What password hashes are and how attackers crack them.",
    intro: "Passwords are stored as hashes. Understanding hashing teaches why password managers matter.",
    tags: ["hashcat", "hashes"], platforms: ["linux", "mac", "windows"],
    steps: {
      linux: [
        { title: "⚠️ Defense only", text: "Cracking hashes without permission is illegal.", note: { type: "danger", text: "Defense only." } },
        { title: "What a hash is", text: "One-way function: password → hash. Attacker guesses, hashes, compares." },
        { title: "Slow hashes matter", text: "bcrypt and argon2 defeat fast cracking. Never store MD5/SHA1." },
        { title: "Generate your own", text: "Local test.", code: "echo -n 'mypassword' | sha256sum", lang: "bash" },
        { title: "Defense: managers", text: "Long random passwords can't be cracked. Bitwarden, KeePass." }
      ],
      mac: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Generate", text: "Local.", code: "echo -n 'mypassword' | shasum -a 256", lang: "bash" }
      ],
      windows: [
        { title: "⚠️ Defense only", text: "Defense only." },
        { title: "Generate", text: "PowerShell.", code: "$h = [System.BitConverter]::ToString([System.Security.Cryptography.SHA256]::Create().ComputeHash([System.Text.Encoding]::UTF8.GetBytes('mypassword')))", lang: "powershell" }
      ]
    },
    repo: { url: "https://hashcat.net/wiki/", label: "Hashcat Wiki" }
  },

  {
    id: "steganography", title: "Steganography: Hide Data in Images", category: "Hacking",
    difficulty: "intermediate", time: "15 min",
    summary: "Hide text inside PNGs.",
    intro: "Steganography hides data inside other files. Used in CTFs and by pentesters.",
    tags: ["steganography"], platforms: ["linux", "mac", "android"],
    steps: {
      linux: [
        { title: "What it is", text: "Hiding data in plain sight — text in image pixels." },
        { title: "Install", text: "steghide + binwalk.", code: "sudo apt install steghide binwalk -y", lang: "bash" },
        { title: "Hide", text: "Needs JPEG.", code: "steghide embed -cf image.jpg -ef secret.txt", lang: "bash" },
        { title: "Extract", text: "Recover.", code: "steghide extract -sf image.jpg", lang: "bash" },
        { title: "Detect", text: "binwalk scans.", code: "binwalk image.jpg", lang: "bash" },
        { title: "Practice", text: "picoCTF has great steg challenges.", code: "https://picoctf.org", lang: "text" }
      ],
      mac: [
        { title: "Install", text: "Brew.", code: "brew install steghide", lang: "bash" },
        { title: "Use", text: "Same commands.", code: "steghide embed -cf image.jpg -ef secret.txt", lang: "bash" }
      ],
      android: [
        { title: "proot Ubuntu", text: "See proot tutorial." },
        { title: "Install inside", text: "apt tools.", code: "apt install steghide binwalk -y", lang: "bash" }
      ]
    },
    repo: { url: "https://steghide.sourceforge.net/", label: "Steghide" }
  },

  {
    id: "osint", title: "OSINT: Find Public Info Ethically", category: "Hacking",
    difficulty: "beginner", time: "15 min",
    summary: "Open Source Intelligence — public info only.",
    intro: "OSINT = gathering info from public sources. Used by journalists and researchers.",
    tags: ["osint", "recon"], platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Ethics first", text: "Only for legitimate purposes (own footprint, research, journalism)." },
        { title: "Google dorks", text: "Site-specific searches.", code: "site:example.com filetype:pdf\n\"John Doe\" site:linkedin.com", lang: "text" },
        { title: "Check your footprint", text: "See what's public about you.", code: "https://haveibeenpwned.com\nhttps://web.archive.org", lang: "text" },
        { title: "Username search", text: "Cross-platform.", code: "https://namechk.com\nhttps://whatsmyname.app", lang: "text" },
        { title: "Metadata", text: "Photos contain GPS.", code: "exiftool photo.jpg", lang: "bash" },
        { title: "Remove your data", text: "Google yourself, opt out of brokers, tighten privacy." }
      ],
      android: [
        { title: "Ethics first", text: "Legitimate only." },
        { title: "Check footprint", text: "Browser.", code: "https://haveibeenpwned.com", lang: "text" },
        { title: "Username search", text: "Browser.", code: "https://namechk.com", lang: "text" }
      ],
      mac: [
        { title: "Ethics first", text: "Legitimate only." },
        { title: "exiftool", text: "Install + inspect.", code: "brew install exiftool\nexiftool photo.jpg", lang: "bash" }
      ],
      windows: [
        { title: "Ethics first", text: "Legitimate only." },
        { title: "exiftool", text: "Download.", code: "https://exiftool.org", lang: "text" }
      ],
      ios: [
        { title: "Ethics first", text: "Legitimate only." },
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
    summary: "Automate backups in the background.",
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
    summary: "SSH into your own phone.",
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
    summary: "Play PC games on your phone, tablet, or another computer using Sunshine + Moonlight.",
    intro: "Sunshine runs on your gaming PC as the host. Moonlight runs on the device you want to play on — phone, tablet, Mac, or another PC. Free, low-latency, over your own network.",
    tags: ["gaming", "streaming"],
    platforms: ["linux", "android", "mac", "windows", "ios"],
    steps: {
      linux: [
        { title: "Install Sunshine (on gaming PC)", text: "Download the Linux build.", code: "https://github.com/LizardByte/Sunshine/releases", lang: "text" },
        { title: "Configure Sunshine", text: "Open the web UI in a browser on the same PC.", code: "https://localhost:47990", lang: "text" },
        { title: "Create admin account", text: "First launch asks for username + password for the web UI." },
        { title: "Add your games", text: "Sunshine → Applications → + Add. Point to your game or launcher." },
        { title: "Install Moonlight on client", text: "On the device you'll play on — see your platform's tab." }
      ],
      android: [
        { title: "Install Sunshine (on gaming PC)", text: "Follow Linux/Windows/Mac tab for the host PC." },
        { title: "Install Moonlight", text: "On your Android phone/tablet, from Play Store or F-Droid." },
        { title: "Pair with PC", text: "Moonlight auto-detects your PC → tap it → a 4-digit PIN appears." },
        { title: "Enter PIN in Sunshine", text: "On your PC, open the Sunshine web UI → paste PIN → confirm." },
        { title: "Set stream quality", text: "Start at 20 Mbps on 5GHz WiFi.", note: { type: "tip", text: "Ethernet on the PC is best." } },
        { title: "Add a controller", text: "Bluetooth controller gives the best experience." },
        { title: "Play", text: "Pick a game → it launches and streams to your phone." }
      ],
      mac: [
        { title: "Install Sunshine (on gaming PC)", text: "Sunshine runs on the PC that has the games — see Linux/Windows tab." },
        { title: "Install Moonlight on Mac", text: "Download from the official site.", code: "https://moonlight-stream.org/", lang: "text" },
        { title: "Pair with PC", text: "Moonlight auto-detects your PC → tap it → get a PIN." },
        { title: "Authorize on PC", text: "On your PC: Sunshine web UI → paste PIN → confirm." },
        { title: "Play", text: "Pick a game. Use Mac keyboard/mouse or a Bluetooth controller." },
        { title: "Performance tip", text: "5GHz WiFi or Ethernet required.", note: { type: "tip", text: "Lower bitrate if stutter." } }
      ],
      windows: [
        { title: "Install Sunshine (on gaming PC)", text: "Download the Windows installer.", code: "https://github.com/LizardByte/Sunshine/releases", lang: "text" },
        { title: "Set up Sunshine", text: "Open https://localhost:47990 → create admin account." },
        { title: "Add games", text: "Applications → + Add → point to your game or launcher." },
        { title: "Install Moonlight on client", text: "On the device you'll play on." },
        { title: "Pair", text: "Moonlight auto-detects → enter the PIN in Sunshine web UI." },
        { title: "Play", text: "Start at 20 Mbps on 5GHz WiFi or Ethernet." }
      ],
      ios: [
        { title: "Install Sunshine (on gaming PC)", text: "See Linux/Windows/Mac tab for the host." },
        { title: "Install Moonlight", text: "From the App Store. Free." },
        { title: "Pair with PC", text: "Moonlight auto-detects PCs → tap yours → get a PIN." },
        { title: "Authorize", text: "On your PC: Sunshine web UI → paste PIN → confirm." },
        { title: "Add a controller", text: "Bluetooth controller strongly recommended." },
        { title: "Play", text: "Pick a game → streams to iPhone/iPad." }
      ]
    },
    repo: { url: "https://github.com/LizardByte/Sunshine", label: "Sunshine" }
  },

  // ===== NETWORKING =====
  {
  id: "wireguard",
  title: "Set Up Your Own VPN (WireGuard)",
  category: "Networking",
  difficulty: "intermediate",
  time: "30 min",
  summary: "Build your own private VPN server — connect your phone, laptop, and any device to it, from anywhere.",
  intro: "WireGuard is a modern VPN protocol that's faster and simpler than OpenVPN. You run a small server (on a VPS or at home), and connect your devices to it. Use it to encrypt traffic on public WiFi, access your home network remotely, or bypass restrictions.",
  tags: ["vpn", "wireguard", "privacy", "self-hosted"],
  platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "What a VPN actually does (and why free VPNs are dangerous)",
    "Set up a WireGuard server on a Linux VPS",
    "Generate secure keys",
    "Connect from Android, iOS, Mac, and Windows",
    "Test that it's really working"
  ],
  steps: {
    linux: [
      { chapter: "Understanding", title: "What you're building", text: "You'll create a small VPN server on a cheap Linux VPS (or a Raspberry Pi at home). Then you connect your phone and laptop to it. All traffic between them is encrypted end-to-end.", type: "read" },
      { title: "Get a server", text: "Any Linux VPS works. Cheap options: **Hetzner** (~€4/mo), **DigitalOcean** ($6/mo), **Oracle Cloud** (free tier). A $5 VPS handles 20+ devices easily.", note: { type: "tip", text: "Oracle Cloud gives you a free-forever ARM VPS with 24GB RAM." }, type: "read" },
      { chapter: "Server setup", title: "SSH into your server", text: "Connect from your own computer.", code: "ssh root@your-server-ip", type: "code" },
      { title: "Install WireGuard", text: "Works on Debian, Ubuntu, Fedora, Arch.", code: "sudo apt update\nsudo apt install wireguard -y", type: "code" },
      { title: "Enable IP forwarding", text: "The server needs to forward packets between clients and the internet.", code: "echo 'net.ipv4.ip_forward=1' | sudo tee /etc/sysctl.d/99-wireguard.conf\nsudo sysctl -p /etc/sysctl.d/99-wireguard.conf", type: "code" },
      { chapter: "Generate keys", title: "Server keys", text: "WireGuard uses public-key cryptography. Generate a private key and derive the public key from it.", code: "cd /etc/wireguard\nwg genkey | sudo tee server-private.key | wg pubkey | sudo tee server-public.key\nsudo chmod 600 server-private.key", type: "code" },
      { title: "Client keys (one per device)", text: "Every device gets its own keypair. For your first phone:", code: "wg genkey | tee phone-private.key | wg pubkey > phone-public.key", type: "code" },
      { chapter: "Server config", title: "Create wg0.conf", text: "This is the WireGuard server configuration.", code: "sudo nano /etc/wireguard/wg0.conf", type: "code" },
      { title: "Paste this", text: "Replace `<server_private_key>` and `<phone_public_key>` with actual values from your `.key` files. Run `cat` on them to see the contents.", code: "[Interface]\nAddress = 10.0.0.1/24\nListenPort = 51820\nPrivateKey = <server_private_key>\nPostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\nPostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\n\n[Peer]\n# Phone\nPublicKey = <phone_public_key>\nAllowedIPs = 10.0.0.2/32", lang: "ini", type: "code" },
      { title: "Note on eth0", text: "If your server's main network interface is named differently (check with `ip a`), replace `eth0`. It's often `eth0`, `ens3`, or `enp1s0`.", type: "tip" },
      { chapter: "Start the server", title: "Open the firewall", text: "Allow UDP port 51820 through.", code: "sudo ufw allow 51820/udp", type: "code" },
      { title: "Start WireGuard", text: "Enable it on boot and start it now.", code: "sudo systemctl enable --now wg-quick@wg0", type: "code" },
      { title: "Check status", text: "Should show the interface is up.", code: "sudo wg show", output: "interface: wg0\n  public key: ...\n  listening port: 51820", type: "try" },
      { chapter: "Client config", title: "Generate phone config", text: "This is what your phone will import. Save it as phone.conf.", code: "cat > phone.conf << EOF\n[Interface]\nPrivateKey = $(cat phone-private.key)\nAddress = 10.0.0.2/24\nDNS = 1.1.1.1\n\n[Peer]\nPublicKey = $(cat server-public.key)\nEndpoint = YOUR_SERVER_IP:51820\nAllowedIPs = 0.0.0.0/0\nPersistentKeepalive = 25\nEOF\ncat phone.conf", type: "code" },
      { title: "Add more devices", text: "Repeat the key + config steps for each device. Give each one a unique IP (10.0.0.3, 10.0.0.4, etc.). The server config gets one `[Peer]` block per device.", type: "tip" },
      { title: "Done", text: "The server is running. Now go to your phone's tab to install the client and connect.", type: "read" }
    ],
    android: [
      { chapter: "Before you start", title: "You need a server first", text: "WireGuard on Android is just the **client**. You need a server to connect to. Follow the **Linux** tab on a VPS to set one up — takes 15 minutes. Then come back.", type: "read" },
      { title: "The client config", text: "Your server should have given you a `phone.conf` file. You'll import it on your phone.", type: "read" },
      { chapter: "Install", title: "Install the app", text: "**WireGuard** from Play Store or F-Droid. Free, official, no ads.", code: "https://play.google.com/store/apps/details?id=com.wireguard.android", type: "code" },
      { chapter: "Import config", title: "Method 1: QR code (easiest)", text: "On your server, run this to display a QR code:", code: "pkg install qrencode -y\nqrencode -t ansiutf8 < phone.conf", type: "code" },
      { title: "Scan it", text: "Open WireGuard on your phone → tap **+** → **Scan from QR code** → point at the terminal.", type: "try" },
      { title: "Method 2: Paste config text", text: "In WireGuard app: tap **+** → **Create from file or archive**, or tap **+** → **Create empty tunnel** and paste the content of `phone.conf`.", type: "read" },
      { chapter: "Connect", title: "Turn it on", text: "You'll see a new tunnel. Tap the toggle to connect. Status should change to **Active**.", type: "try" },
      { title: "Verify it works", text: "Open a browser → visit `https://ifconfig.me`. The IP shown should be your **server's** IP, not your phone's real IP.", code: "https://ifconfig.me", type: "try" },
      { chapter: "Always-on VPN", title: "Auto-connect", text: "Settings → Network & Internet → VPN → WireGuard → toggle **Always-on VPN** ON. Now the tunnel comes up whenever your phone boots.", type: "code" },
      { title: "Per-app VPN", text: "In WireGuard app → tap your tunnel → **Edit** → you can specify apps that should **skip** the VPN, or only ones that should **use** it.", type: "tip" },
      { chapter: "Troubleshooting", title: "Tunnel connects but nothing loads", text: "Most common cause: the server's `eth0` in the config is wrong. SSH into the server, run `ip a`, find the real interface name, update `/etc/wireguard/wg0.conf`, then `sudo wg-quick down wg0 && sudo wg-quick up wg0`.", type: "warn" }
    ],
    mac: [
      { chapter: "Before you start", title: "Server first", text: "You need a WireGuard server. If you don't have one, follow the **Linux** tab on a VPS. Then return here with your `client.conf` file.", type: "read" },
      { chapter: "Install", title: "Install from the App Store", text: "Official app by WireGuard Development Team. Free.", code: "https://apps.apple.com/app/wireguard/id1451685025", type: "code" },
      { title: "Or via Homebrew", text: "If you prefer command line:", code: "brew install --cask wireguard-tools", type: "code" },
      { chapter: "Import the tunnel", title: "Add a tunnel", text: "Open the WireGuard app → click **Add Tunnel** → **Import tunnel(s) from file** → pick your `client.conf`.", type: "try" },
      { title: "Or paste manually", text: "Click **Add Tunnel** → **Add empty tunnel** → paste your config content in the text field.", type: "code" },
      { chapter: "Activate", title: "Connect", text: "Click **Activate** next to your tunnel. The menu bar icon changes to show you're connected.", type: "try" },
      { title: "Verify", text: "Open Safari → visit `https://ifconfig.me`. Your IP should be your server's IP.", code: "https://ifconfig.me", type: "try" },
      { chapter: "On-Demand", title: "Auto-connect on untrusted WiFi", text: "In WireGuard → your tunnel → **Edit** → **On-Demand** → add rules like \"activate on untrusted WiFi, deactivate on trusted\". Useful for coffee shops and airports.", type: "tip" },
      { title: "Multiple tunnels", text: "You can add multiple tunnels (work, home, VPS) and switch between them. Only one active at a time.", type: "read" }
    ],
    windows: [
      { chapter: "Before you start", title: "Server first", text: "You need a WireGuard server. Follow the **Linux** tab on a VPS. Then come back with your `client.conf`.", type: "read" },
      { chapter: "Install", title: "Download the installer", text: "Official WireGuard for Windows. Free, no ads.", code: "https://www.wireguard.com/install/", type: "code" },
      { title: "Run the installer", text: "Double-click the `.msi` file → follow the wizard. May ask for admin rights.", type: "read" },
      { chapter: "Import tunnel", title: "Add tunnel from file", text: "Open WireGuard → click **Add Tunnel** → **Import tunnel(s) from file** → select your `.conf`.", type: "try" },
      { title: "Or paste manually", text: "Click **Add Tunnel** → **Add empty tunnel** → paste config → **Save**.", type: "code" },
      { chapter: "Connect", title: "Activate", text: "Click **Activate** next to the tunnel. It turns green/blue when active.", type: "try" },
      { title: "Verify", text: "Open PowerShell and run:", code: "curl ifconfig.me", output: "Your server's IP (not your home IP)", type: "try" },
      { chapter: "Advanced", title: "Pin to taskbar", text: "Right-click the WireGuard taskbar icon → **Pin to taskbar** for quick access.", type: "tip" },
      { title: "Start on boot", text: "WireGuard launches on boot by default. It does **not** auto-connect unless you enable it in the tunnel's settings.", type: "read" }
    ],
    ios: [
      { chapter: "Before you start", title: "Server first", text: "You need a WireGuard server. Follow the **Linux** tab on a VPS to set one up. Then come back with your `client.conf`.", type: "read" },
      { chapter: "Install", title: "Install from the App Store", text: "**WireGuard** by WireGuard Development Team. Free, no ads.", code: "https://apps.apple.com/app/wireguard/id1441195209", type: "code" },
      { chapter: "Import tunnel", title: "Scan QR code (easiest)", text: "On your server, display the QR code:", code: "qrencode -t ansiutf8 < client.conf", type: "code" },
      { title: "Scan it", text: "Open WireGuard → tap **+** → **Create from QR code** → point at the QR.", type: "try" },
      { title: "Or paste config", text: "Open WireGuard → tap **+** → **Create from file or archive** → or **Create empty tunnel** and paste.", type: "read" },
      { chapter: "Connect", title: "Toggle the tunnel", text: "Tap the toggle next to the tunnel name. iOS will ask permission for a VPN configuration the first time — tap **Allow**.", type: "try" },
      { title: "Verify", text: "Open Safari → visit `https://ifconfig.me` → your IP should be the server's.", code: "https://ifconfig.me", type: "try" },
      { chapter: "On-Demand", title: "Auto-connect", text: "Settings app → VPN → tap the (i) next to WireGuard → **Connect On Demand** → configure rules like \"Always\" or \"Only on WiFi\".", type: "code" },
      { title: "Per-app VPN", text: "iOS doesn't support per-app VPN from WireGuard — it's all-or-nothing. If you need that, use **Tailscale** (based on WireGuard).", type: "warn" }
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

  {
  id: "js-basics", title: "JavaScript in 20 Minutes", category: "Coding",
  difficulty: "beginner", time: "20 min",
  summary: "The language that runs the web — learn it by typing in your browser console.",
  intro: "JavaScript powers every website you visit. Instead of reading theory, you'll type real code into your browser console and see it work immediately. Nothing to install.",
  tags: ["javascript", "web", "beginner"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Open the browser console (no setup needed)",
    "Store data with variables",
    "Write functions that do things",
    "Work with lists (arrays) and objects",
    "Change a webpage with code"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Open the console", text: "Press **F12** in any browser → click the **Console** tab. That's your playground. Every line you type runs instantly.", type: "read" },
      { title: "Try your first line", text: "Type this and hit Enter:", code: "console.log(\"Hello, world!\");", output: "Hello, world!", type: "try" },

      { chapter: "Variables", title: "What is a variable?", text: "A variable is a **container for a value**. Use `let` for values that change, `const` for values that stay the same.", type: "read" },
      { title: "Create one", text: "Try this:", code: "let name = \"Neo\";\nconsole.log(name);", output: "Neo", type: "try" },
      { title: "Change it", text: "`let` values can be reassigned. `const` values cannot.", code: "let age = 20;\nage = 21;\nconsole.log(age);", output: "21", type: "try" },
      { title: "Why this matters", text: "Variables are how your code remembers things — a username, a score, a list of items. Everything else builds on this.", type: "read" },

      { chapter: "Functions", title: "What is a function?", text: "A function is a **reusable block of code**. You give it a name, and run it whenever you want.", type: "read" },
      { title: "Simple function", text: "Try this:", code: "function greet() {\n  console.log(\"Hi there!\");\n}\ngreet();", output: "Hi there!", type: "try" },
      { title: "Function with a value", text: "Functions can take input and return output. This is called an **arrow function**.", code: "const add = (a, b) => a + b;\nconsole.log(add(5, 3));", output: "8", type: "try" },

      { chapter: "Arrays — lists of things", title: "What is an array?", text: "An array is a **list**. Items are stored in order, starting at index 0.", type: "read" },
      { title: "Create a list", text: "Try this:", code: "const fruits = [\"apple\", \"banana\", \"cherry\"];\nconsole.log(fruits[0]);\nconsole.log(fruits.length);", output: "apple\n3", type: "try" },
      { title: "Add and loop", text: "Push adds to the end. `forEach` runs a function for each item.", code: "fruits.push(\"orange\");\nfruits.forEach(f => console.log(f));", output: "apple\nbanana\ncherry\norange", type: "try" },

      { chapter: "Objects — labeled data", title: "What is an object?", text: "An object stores **key-value pairs**. Like a labeled box with named compartments.", type: "read" },
      { title: "Create one", text: "Try this:", code: "const user = { name: \"Neo\", age: 42 };\nconsole.log(user.name);", output: "Neo", type: "try" },

      { chapter: "Change the page", title: "JavaScript's real power", text: "JavaScript can modify any part of a webpage live. This is called the **DOM** (Document Object Model).", type: "read" },
      { title: "Change the background", text: "Open any website → console → try this. **Watch the page change instantly.**", code: "document.body.style.background = \"black\";", type: "try" },
      { title: "React to clicks", text: "Add an event listener — a function that runs when something happens.", code: "document.addEventListener(\"click\", () => alert(\"You clicked!\"));", type: "try" },

      { chapter: "Where to go from here", title: "You know the basics", text: "Variables, functions, arrays, objects, and DOM. That's the core of every JavaScript app — including big frameworks like React. Everything else is a variation of these.", type: "read" },
      { title: "Next step", text: "Practice by changing a real webpage. Open any site, use the console to modify it. Or take our **React in 15 Minutes** tutorial next.", type: "tip" }
    ],
    android: [
      { chapter: "Setup", title: "Install Kiwi Browser", text: "Kiwi Browser is Chrome with **full developer tools on mobile** — essential for JavaScript. Download from Play Store.", type: "read" },
      { title: "Open the console", text: "In Kiwi: tap the ⋮ menu → **Dev tools** → **Console** tab. This is your playground.", type: "read" },
      { title: "Try your first line", text: "Type this and hit Enter:", code: "console.log(\"Hello from Android!\");", output: "Hello from Android!", type: "try" },

      { chapter: "Variables and functions", title: "Variables", text: "Containers for values.", code: "let name = \"Neo\";\nconsole.log(name);", output: "Neo", type: "try" },
      { title: "Functions", text: "Reusable code blocks.", code: "const add = (a, b) => a + b;\nconsole.log(add(5, 3));", output: "8", type: "try" },

      { chapter: "Modify a real page", title: "The fun part", text: "Open any website in Kiwi → console → type this. Watch it change live.", code: "document.body.style.background = \"black\";\ndocument.body.style.color = \"neonpink\";", type: "try" },
      { title: "Or take a screenshot mod", text: "You can even change text:", code: "document.querySelector(\"h1\").textContent = \"HACKED (just for fun)\";", type: "try" },
      { title: "Note", text: "These changes are only in your browser. Refresh the page and everything resets. Nothing is saved — you're just experimenting.", type: "tip" }
    ],
    mac: [
      { chapter: "Setup", title: "Open Safari DevTools", text: "Safari → **Develop** menu → **Show JavaScript Console**. If you don't see Develop: Safari → Settings → Advanced → tick **Show features for web developers**.", type: "read" },
      { title: "Or use Chrome (easier)", text: "Download Chrome → press **F12** → Console tab.", type: "tip" },
      { title: "First line", text: "Try this:", code: "console.log(\"Hello, world!\");", output: "Hello, world!", type: "try" },

      { chapter: "Core concepts", title: "Variables", text: "Containers for values.", code: "let name = \"Neo\";\nconst age = 42;\nconsole.log(name, age);", output: "Neo 42", type: "try" },
      { title: "Functions", text: "Reusable code.", code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3));", output: "5", type: "try" },
      { title: "Arrays", text: "Lists.", code: "const x = [1, 2, 3].map(n => n * 2);\nconsole.log(x);", output: "[2, 4, 6]", type: "try" },

      { chapter: "Change a webpage", title: "The DOM", text: "JavaScript can modify the page you're looking at.", code: "document.body.style.background = \"black\";", type: "try" }
    ],
    windows: [
      { chapter: "Setup", title: "Open DevTools", text: "Press **F12** in any browser (Chrome, Edge, Firefox) → click the **Console** tab.", type: "read" },
      { title: "First line", text: "Try this:", code: "console.log(\"Hello, world!\");", output: "Hello, world!", type: "try" },

      { chapter: "Core concepts", title: "Variables", text: "Containers for values.", code: "let name = \"Neo\";\nconsole.log(name);", output: "Neo", type: "try" },
      { title: "Functions", text: "Reusable code.", code: "const add = (a, b) => a + b;\nconsole.log(add(5, 3));", output: "8", type: "try" },
      { title: "Arrays", text: "Lists.", code: "const fruits = [\"apple\", \"banana\"];\nconsole.log(fruits.length);", output: "2", type: "try" },

      { chapter: "Change a webpage", title: "The DOM", text: "Modify the current page live.", code: "document.body.style.background = \"black\";", type: "try" }
    ],
    ios: [
      { chapter: "Setup", title: "Two options", text: "iOS Safari doesn't show a console easily. Use one of these instead:\n\n1. **Play.js** — real JavaScript editor + console for iOS (App Store)\n2. **Safari Web Inspector** — needs a Mac connected (skip if you don't have one)", type: "read" },
      { title: "Recommended: Play.js", text: "Free app, gives you a proper JS editor and console. Install it, then open a new file.", type: "tip" },
      { title: "First line", text: "In Play.js:", code: "console.log(\"Hello from iOS!\");", output: "Hello from iOS!", type: "try" },
      { chapter: "Core concepts", title: "Variables", text: "Containers for values.", code: "let name = \"Neo\";\nconsole.log(name);", output: "Neo", type: "try" },
      { title: "Functions", text: "Reusable code.", code: "const add = (a, b) => a + b;\nconsole.log(add(5, 3));", output: "8", type: "try" }
    ]
  },
  repo: { url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", label: "MDN JavaScript" }
},

  {
    id: "react-basics", title: "React in 15 Minutes", category: "Coding",
    difficulty: "intermediate", time: "15 min",
    summary: "Build interactive UIs.",
    intro: "React — most popular UI framework.",
    tags: ["react"], platforms: ["linux", "android", "mac", "windows"],
    steps: {
      linux: [
        { title: "Install Node", text: "Prereq.", code: "sudo apt install nodejs npm -y", lang: "bash" },
        { title: "Create app", text: "Vite is fastest.", code: "npm create vite@latest myapp -- --template react\ncd myapp\nnpm install\nnpm run dev", lang: "bash" },
        { title: "Components", text: "Edit src/App.jsx.", code: "function Hello({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\nexport default function App() {\n  return <Hello name=\"Neo\" />;\n}", lang: "javascript" },
        { title: "State", text: "useState hook.", code: "import { useState } from 'react';\nexport default function App() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Clicked {count}</button>;\n}", lang: "javascript" },
        { title: "Build", text: "Production.", code: "npm run build", lang: "bash" }
      ],
      android: [
        { title: "Install Node", text: "Termux.", code: "pkg install nodejs -y", lang: "bash" },
        { title: "Create", text: "Vite app.", code: "npm create vite@latest myapp -- --template react\ncd myapp\nnpm install\nnpm run dev -- --host", lang: "bash" }
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
  },

{
  id: "termux-beginner", title: "Termux: Complete Beginner Guide", category: "Hacking",
  difficulty: "beginner", time: "15 min",
  summary: "What Termux is, how to install it properly, and what you can actually do with it.",
  intro: "Termux is a free Android app that gives you a real Linux terminal on your phone — no root, no computer needed. It runs thousands of Linux tools. This is the starting point for everything else.",
  tags: ["termux", "android", "beginner"], platforms: ["android"],
  learnList: [
    "Install Termux the right way (F-Droid, not Play Store)",
    "Run your first Linux commands",
    "Grant storage access",
    "Install essential tools",
    "Understand what you can actually do with it"
  ],
  steps: {
    android: [
      { chapter: "What is Termux?", title: "A real Linux terminal on your phone", text: "Termux is a terminal emulator **plus** a Linux environment for Android. It runs **Bash**, **Python**, **Node.js**, **Git**, **SSH**, and thousands of Linux packages — all on your phone, no root, no computer.", type: "read" },
      { title: "Why it matters", text: "Every command in the rest of our tutorials works here. It turns your phone into a portable Linux workstation. People use it for coding, downloading videos, running servers, automating tasks, and cybersecurity practice.", type: "read" },

      { chapter: "Install the right way", title: "⚠️ Don't use Play Store", text: "The Play Store version of Termux is **abandoned and broken**. It hasn't been updated since 2020 and many packages fail to install.", note: { type: "warn", text: "F-Droid version is the only one that works properly." }, type: "warn" },
      { title: "Download F-Droid", text: "F-Droid is a free app store for open-source Android apps. Download the APK from f-droid.org. Your phone will warn you about installing from an unknown source — that's expected, tap Allow.", code: "https://f-droid.org", lang: "text", type: "code" },
      { title: "Install Termux from F-Droid", text: "Open F-Droid → search **Termux** → Install. Total download is about 90 MB.", type: "try" },

      { chapter: "First commands", title: "Open Termux", text: "You'll see a black screen with a `$` prompt. That's the terminal — a text interface where you type commands and press Enter.", type: "read" },
      { title: "Try a few basics", text: "These tell you about your environment.", code: "whoami\npwd\nuname -a", output: "u0_a123\n/data/data/com.termux/files/home\nLinux localhost 5.10.xxx aarch64 Android", type: "try" },
      { title: "What those mean", text: "**whoami** = your username inside Termux\n**pwd** = current folder (print working directory)\n**uname -a** = kernel info\n\nYou'll use these commands forever.", type: "read" },

      { chapter: "Update everything", title: "Update packages first", text: "Always do this on a new install. Downloads the latest versions of every installed package.", code: "pkg update && pkg upgrade -y", type: "code" },
      { title: "Why this matters", text: "Termux packages are downloaded from a repository. If you don't update first, some installs fail with confusing errors.", type: "tip" },

      { chapter: "Access your files", title: "Grant storage access", text: "By default Termux can't see your phone's photos, downloads, or other apps. This command asks Android for permission.", code: "termux-setup-storage", output: "A permission dialog appears — tap Allow.", type: "code" },
      { title: "What you get", text: "After allowing, a `storage` folder appears in your home directory. It links to your phone's real folders.", code: "ls ~/storage", output: "dcim  downloads  movies  music  pictures  shared", type: "try" },
      { title: "This is huge", text: "Now any file you download in Termux (videos, scripts, code) can be saved where you can actually see it in your file manager.", type: "read" },

      { chapter: "Install useful tools", title: "Essentials in one command", text: "Git for version control, Python for scripting, Node for JS, nano for editing, curl/wget for downloads.", code: "pkg install git python nodejs nano curl wget -y", type: "code" },
      { title: "Verify it worked", text: "Check Python and Git versions.", code: "python --version\ngit --version", output: "Python 3.12.1\ngit version 2.45.0", type: "try" },

      { chapter: "What can you actually do?", title: "Eight real use cases", text: "• **Download videos** with yt-dlp (YouTube, TikTok, 1000+ sites)\n• **SSH into servers** using the same tools as on a PC\n• **Run Python scripts** without needing a computer\n• **Serve files over WiFi** — turn your phone into a mini web server\n• **Scan your own network** with nmap\n• **Run full Linux** (Ubuntu, Debian, Arch) using proot-distro\n• **Automate tasks** with cron jobs\n• **Practice coding** anywhere, offline", type: "read" },
      { title: "What's next", text: "You now have a working Linux environment. The next step is making it yours — a nice prompt, backup habits, and the tools you'll actually use.\n\nSee our **Essential Termux Setup** tutorial next.", type: "tip" }
    ]
  },
  repo: { url: "https://wiki.termux.com/wiki/Main_Page", label: "Termux Wiki" }
},
{
  id: "html-css-basics", title: "Build Your First Website (HTML + CSS)", category: "Coding",
  difficulty: "beginner", time: "25 min",
  summary: "Learn HTML and CSS by building a real page from scratch. No frameworks, no installs.",
  intro: "HTML is the structure of every website. CSS makes it look good. This tutorial builds a real page step by step — the same way NeoLearn itself was built.",
  tags: ["html", "css", "web", "beginner"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Create your first HTML page",
    "Add headings, paragraphs, links, and images",
    "Style pages with CSS",
    "Link CSS and JavaScript to your HTML",
    "Preview and share your site"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "What you need", text: "A text editor and any web browser. That's it. No installs, no accounts, no build tools.", type: "read" },
      { title: "Create your project folder", text: "Make a new folder and enter it.", code: "mkdir my-site\ncd my-site", type: "code" },

      { chapter: "Your first HTML file", title: "Create index.html", text: "Every website needs a file called `index.html` — that's the first thing browsers look for.", code: "nano index.html", type: "code" },
      { title: "HTML skeleton", text: "Every HTML page starts with this structure. Copy it exactly — everything else goes between `<body>` tags.", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n</head>\n<body>\n  <h1>Hello, world!</h1>\n  <p>My first website.</p>\n</body>\n</html>", lang: "html", type: "code" },
      { title: "Open it in your browser", text: "Double-click the file (or drag it into a browser window). **You should see \"Hello, world!\" on the page.**", type: "try" },

      { chapter: "More HTML elements", title: "Headings and paragraphs", text: "There are 6 heading sizes: `<h1>` (biggest) to `<h6>` (smallest). Paragraphs use `<p>`.", code: "<h1>Big heading</h1>\n<h2>Smaller heading</h2>\n<p>A paragraph of text.</p>", lang: "html", type: "code" },
      { title: "Lists", text: "Use `<ul>` for bullet lists, `<ol>` for numbered. Each item is an `<li>`.", code: "<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>", lang: "html", type: "code" },
      { title: "Links and images", text: "`<a>` creates links (href = destination). `<img>` shows images (src = file).", code: "<a href=\"https://example.com\">Click me</a>\n<img src=\"photo.jpg\" alt=\"My photo\">", lang: "html", type: "code" },
      { title: "Add them to your page", text: "Paste a few of these inside `<body>` in your `index.html`. Save, refresh the browser, and watch them appear.", type: "try" },

      { chapter: "Make it look good with CSS", title: "Create style.css", text: "CSS goes in a **separate file**. Create it next to your HTML.", code: "nano style.css", type: "code" },
      { title: "Your first CSS", text: "CSS rules look like: `selector { property: value; }`. The `body` selector styles the whole page.", code: "body {\n  font-family: sans-serif;\n  background: #111;\n  color: white;\n  padding: 40px;\n  line-height: 1.6;\n}\n\nh1 {\n  color: #ff2fb9;\n  font-size: 48px;\n}", lang: "css", type: "code" },
      { title: "Link the CSS to your HTML", text: "Add this line inside `<head>` (before `</head>`):", code: "<link rel=\"stylesheet\" href=\"style.css\">", lang: "html", type: "code" },
      { title: "Refresh and see the magic", text: "Save both files. Refresh your browser. **The page should now be dark with a pink heading.**", type: "try" },
      { title: "Why this matters", text: "Everything you see on NeoLearn right now — the dark background, the glowing buttons, the layout — is just CSS like this. Once you understand the pattern, you can build any look.", type: "read" },

      { chapter: "Add interactivity (optional)", title: "Create script.js", text: "JavaScript makes pages do things. Same pattern as CSS — separate file, linked from HTML.", code: "nano script.js", type: "code" },
      { title: "A tiny script", text: "This runs when the page loads.", code: "document.querySelector('h1').onclick = () => {\n  alert('You clicked the heading!');\n};", lang: "javascript", type: "code" },
      { title: "Link it (before </body>)", text: "Add this at the bottom of your HTML file, right before `</body>`.", code: "<script src=\"script.js\"></script>", lang: "html", type: "code" },
      { title: "Test it", text: "Click the heading on your page. An alert should appear.", type: "try" },

      { chapter: "Next steps", title: "You built a website", text: "That's the entire foundation. **HTML = structure. CSS = look. JavaScript = behavior.** Everything else in web development is more of the same patterns.", type: "read" },
      { title: "Share it online (free)", text: "See our **Host a Website Free (GitHub Pages)** tutorial to put this live on the internet in 5 minutes.", type: "tip" }
    ],
    android: [
      { chapter: "Setup", title: "Install Acode", text: "Acode is a free code editor for Android — makes writing HTML on your phone actually pleasant. Get it from Play Store.", type: "read" },
      { title: "Create your project", text: "In Acode: tap **+** → **New folder** → name it `my-site`. Open it.", type: "code" },
      { title: "Create index.html", text: "Tap **+** → **New file** → name it `index.html` (lowercase!).", type: "code" },

      { chapter: "Your first HTML", title: "Paste this skeleton", text: "Everything in HTML goes between `<body>` tags.", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Hello from my phone!</h1>\n  <p>Built with Acode.</p>\n</body>\n</html>", lang: "html", type: "code" },
      { title: "Preview it", text: "In Acode, tap the ▶ (play) button at the bottom. Your page appears. **That's a real webpage.**", type: "try" },
      { title: "Add more elements", text: "Try adding a list and a link inside `<body>`.", code: "<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>\n<a href=\"https://neolearn-a09.pages.dev\">NeoLearn</a>", lang: "html", type: "code" },

      { chapter: "Style with CSS", title: "Create style.css", text: "Same folder as index.html. Tap **+** → **New file** → `style.css`.", type: "code" },
      { title: "Paste this", text: "The `body` rule styles the whole page. `h1` styles the heading.", code: "body {\n  font-family: sans-serif;\n  background: #111;\n  color: white;\n  padding: 30px;\n}\n\nh1 {\n  color: #ff2fb9;\n}", lang: "css", type: "code" },
      { title: "Preview again", text: "Save and preview. The page should now be dark with a pink heading.", type: "try" },

      { chapter: "Next steps", title: "You built a website on your phone", text: "Seriously — you built a real webpage without a computer. That's a superpower.", type: "read" },
      { title: "Host it online", text: "See our **Host a Website Free (GitHub Pages)** tutorial to put this live on the internet.", type: "tip" }
    ],
    mac: [
      { chapter: "Setup", title: "Install VS Code", text: "Free, professional editor.", code: "brew install --cask visual-studio-code", type: "code" },
      { title: "Create your project", text: "Open VS Code → File → Open Folder → create a new folder called `my-site`.", type: "read" },
      { chapter: "Your first HTML", title: "Create index.html", text: "Click the **New File** icon → name it `index.html`. Paste this:", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Hello, world!</h1>\n  <p>My first website.</p>\n</body>\n</html>", lang: "html", type: "code" },
      { title: "Preview", text: "Right-click the file → **Open in Browser**. Or double-click it in Finder.", type: "try" },
      { chapter: "Style it", title: "Create style.css", text: "Same folder. Paste this:", code: "body {\n  font-family: sans-serif;\n  background: #111;\n  color: white;\n  padding: 40px;\n}\nh1 { color: #ff2fb9; }", lang: "css", type: "code" },
      { title: "Refresh and see", text: "Save both. Refresh browser. Dark page with pink heading.", type: "try" }
    ],
    windows: [
      { chapter: "Setup", title: "Install VS Code", text: "Download from code.visualstudio.com — free. Or use Notepad if you prefer.", type: "read" },
      { title: "Create your project", text: "Make a new folder called `my-site` on your Desktop. Open VS Code → File → Open Folder.", type: "read" },
      { chapter: "Your first HTML", title: "Create index.html", text: "New file → save as `index.html` inside `my-site`. Paste:", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Hello, world!</h1>\n  <p>My first website.</p>\n</body>\n</html>", lang: "html", type: "code" },
      { title: "Preview", text: "Double-click `index.html` in Explorer. It opens in your browser.", type: "try" },
      { chapter: "Style it", title: "Create style.css", text: "New file in the same folder. Paste:", code: "body {\n  font-family: sans-serif;\n  background: #111;\n  color: white;\n  padding: 40px;\n}\nh1 { color: #ff2fb9; }", lang: "css", type: "code" },
      { title: "Refresh", text: "Save. Refresh browser. Dark page with pink heading.", type: "try" }
    ],
    ios: [
      { chapter: "Setup", title: "Install Textastic or Koder", text: "Both are free code editors for iPhone/iPad. Textastic is polished; Koder is minimal. Pick either.", type: "read" },
      { title: "Create your project", text: "In the Files app, create a folder called `my-site` in **On My iPhone**.", type: "read" },
      { chapter: "Your first HTML", title: "Create index.html", text: "Open your editor, create a new file called `index.html` inside `my-site`. Paste:", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Site</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Hello from iOS!</h1>\n  <p>Built on my iPhone.</p>\n</body>\n</html>", lang: "html", type: "code" },
      { title: "Preview in Safari", text: "Open the Files app → tap `index.html` → Share → **Open in Safari**. Your page loads.", type: "try" },
      { chapter: "Style it", title: "Create style.css", text: "Same folder. Paste:", code: "body {\n  font-family: sans-serif;\n  background: #111;\n  color: white;\n  padding: 40px;\n}\nh1 { color: #ff2fb9; }", lang: "css", type: "code" },
      { title: "Refresh Safari", text: "Save in your editor. Swipe down in Safari to reload. Dark page with pink heading.", type: "try" }
    ]
  },
  repo: { url: "https://developer.mozilla.org/en-US/docs/Learn", label: "MDN Web Docs" }
},

{
  id: "phone-backup", title: "Back Up Your Android Phone Properly", category: "Android",
  difficulty: "beginner", time: "15 min",
  summary: "Never lose photos, contacts, or app data again.",
  intro: "Most people only back up when it's too late. This walks through a complete backup that takes 15 minutes and protects everything.",
  tags: ["android", "backup"], platforms: ["android"],
  steps: {
    android: [
      { title: "What to back up", text: "• Photos and videos\n• Contacts\n• WhatsApp chats\n• App data (saved games, settings)\n• Documents\n• Authenticator codes (very important)" },
      { title: "Photos: Google Photos", text: "Open Google Photos → profile picture → Backup → ON. Uploads in the background. Free tier = 15GB shared with Gmail." },
      { title: "Alternative: use your own storage", text: "For unlimited: turn on Google Photos with 'Storage saver' quality — still good enough for most." },
      { title: "Contacts: Google account", text: "Settings → Accounts → Google → make sure Contacts is synced. Then they're safe." },
      { title: "WhatsApp backup", text: "WhatsApp → Settings → Chats → Chat backup → Back up to Google Drive → set frequency to Daily." },
      { title: "App data: Google backup", text: "Settings → System → Backup → Back up to Google Drive → ON. Restores apps and many settings on a new phone." },
      { title: "Authenticator codes", text: "CRITICAL — if you lose these, you lose access to accounts. Google Authenticator: settings → Transfer accounts. Authy, Aegis, or 2FAS: use their export feature." },
      { title: "Full manual backup (advanced)", text: "For everything including files — use Termux to tar your storage.", code: "pkg install tar -y\ntermux-setup-storage\ntar -czf ~/storage/shared/backup-$(date +%F).tar.gz ~/storage/shared/DCIM", lang: "bash" },
      { title: "Test your restore", text: "A backup you've never restored is not a backup. If you have an old phone, restore it once. That's how you know it works." }
    ]
  },
  repo: { url: "https://support.google.com/android/answer/2819582", label: "Google Backup Guide" }
},

{
  id: "file-transfer", title: "Transfer Files Between Phone and PC", category: "Android",
  difficulty: "beginner", time: "12 min",
  summary: "Every way to move files between your phone and computer — cable, WiFi, Bluetooth, apps.",
  intro: "The most common question people ask. Here are all the ways, ranked from easiest to best.",
  tags: ["android", "files"], platforms: ["android", "linux", "mac", "windows"],
  steps: {
    android: [
      { title: "Option 1: USB cable (fastest)", text: "Plug phone into PC. Swipe down on phone → tap the USB notification → select 'File transfer' (not 'Charging only'). Then browse files from your PC." },
      { title: "Option 2: Google Drive (easy, needs internet)", text: "Upload from phone → download on PC. Free 15GB. Good for a few files." },
      { title: "Option 3: Snapdrop / PairDrop (WiFi only)", text: "Open pairdrop.net on BOTH phone and PC (same WiFi). They find each other automatically. Drag files between. No install." },
      { title: "Option 4: LocalSend (best overall)", text: "Install LocalSend on both phone and PC (from localsend.org). Same WiFi → send files instantly. No account, no internet needed." },
      { title: "Option 5: Bluetooth (slow, works anywhere)", text: "Pair phone and PC → send file. Only useful for tiny files. Skip unless WiFi isn't available." },
      { title: "Option 6: ADB over USB (advanced)", text: "From PC, pull files from phone.", code: "adb pull /sdcard/DCIM/Camera ~/phone-photos", lang: "bash" },
      { title: "Option 7: Termux as a file server", text: "Serve your phone files over WiFi.", code: "# On phone in Termux:\npkg install python -y\ntermux-setup-storage\ncd ~/storage/shared\npython -m http.server 8080\n# Then open http://phone-ip:8080 in your PC browser", lang: "bash" },
      { title: "Recommended setup", text: "Install LocalSend on both. It's fast, private, works offline, and takes 2 minutes to set up. That's the one to remember." }
    ],
    linux: [
      { title: "USB transfer on Linux", text: "Plug phone in, select 'File transfer'. Your file manager shows the phone automatically." },
      { title: "ADB pull", text: "For any file from phone.", code: "adb pull /sdcard/DCIM/Camera ~/phone-photos", lang: "bash" },
      { title: "LocalSend", text: "Download from localsend.org.", code: "https://localsend.org", lang: "text" }
    ],
    mac: [
      { title: "USB transfer on Mac", text: "Plug phone in → open Android File Transfer or use OpenMTP (free, from openmtp.ganeshrvel.com)." },
      { title: "LocalSend for Mac", text: "Download from localsend.org.", code: "https://localsend.org", lang: "text" }
    ],
    windows: [
      { title: "USB transfer on Windows", text: "Plug phone in → select 'File transfer' → open Explorer → your phone appears under 'This PC'." },
      { title: "LocalSend", text: "Download from localsend.org.", code: "https://localsend.org", lang: "text" }
    ]
  },
  repo: { url: "https://localsend.org", label: "LocalSend" }
},

{
  id: "free-games", title: "Play Games for Free (Legally)", category: "Streaming",
  difficulty: "beginner", time: "15 min",
  summary: "Free PC and Android games that don't require pirating anything.",
  intro: "You don't need cracked games. There are hundreds of legal free games — some are amazing. Here's where to find them and how to play.",
  tags: ["games", "free"], platforms: ["linux", "android", "mac", "windows"],
  steps: {
    linux: [
      { title: "Epic Games Store (free games weekly)", text: "Every Thursday, Epic gives 1–2 games free. Keep them forever. Website or Heroic Launcher on Linux.", code: "https://store.epicgames.com/free-games", lang: "text" },
      { title: "Install Heroic Launcher (Epic/GOG on Linux)", text: "Open source launcher for Epic and GOG.", code: "https://heroicgameslauncher.com", lang: "text" },
      { title: "Steam Free-to-Play", text: "Filter Steam by Free to Play. Includes: CS2, Dota 2, Warframe, Path of Exile, Destiny 2, hundreds more.", code: "https://store.steampowered.com/genre/Free%20to%20Play/", lang: "text" },
      { title: "GOG free games", text: "GOG gives away games occasionally + has a free section.", code: "https://www.gog.com/games?priceRange=0,0", lang: "text" },
      { title: "Itch.io (indie goldmine)", text: "Thousands of free indie games. Filter by price.", code: "https://itch.io/games/free", lang: "text" },
      { title: "Open-source games (best-kept secret)", text: "0 A.D. (Age of Empires style), SuperTuxKart, Xonotic, OpenTTD, Battle for Wesnoth. Full quality, completely free." },
      { title: "SuperTuxKart install (Linux)", text: "Mario Kart style, free.", code: "sudo apt install supertuxkart -y", lang: "bash" },
      { title: "0 A.D. install", text: "Historical RTS, gorgeous.", code: "sudo apt install 0ad -y", lang: "bash" }
    ],
    android: [
      { title: "Epic Games on Android", text: "Install the Epic Games app → free games section. Also available from epicgames.com on mobile browser." },
      { title: "Google Play free games", text: "Play Store → Games → filter → Free. Real quality games: Genshin Impact, Call of Duty Mobile, PUBG, Asphalt, hundreds more." },
      { title: "Open-source Android games", text: "F-Droid has amazing free games: Shattered Pixel Dungeon, Anuto TD, Minetest (Minecraft clone), SuperTuxKart." },
      { title: "Emulators (retro games you own)", text: "RetroArch, Dolphin, PPSSPP, AetherSX2. These let you play games from consoles you own — legal if you have the originals.", code: "https://www.retroarch.com", lang: "text" },
      { title: "Humble Bundle", text: "Pay a small amount, get many games. Often $1 for 5-10 games.", code: "https://www.humblebundle.com", lang: "text" }
    ],
    mac: [
      { title: "Epic + Steam + GOG", text: "All have macOS versions. Same free games apply.", code: "https://store.epicgames.com/free-games", lang: "text" },
      { title: "Whisky (run Windows games on Mac)", text: "Free Wine wrapper. For games that don't have Mac versions.", code: "https://getwhisky.app", lang: "text" }
    ],
    windows: [
      { title: "Epic Games Store", text: "Weekly free games. Keep them forever.", code: "https://store.epicgames.com/free-games", lang: "text" },
      { title: "Steam free-to-play", text: "Huge library, no cost.", code: "https://store.steampowered.com/genre/Free%20to%20Play/", lang: "text" },
      { title: "GOG free section", text: "Classic games, no DRM.", code: "https://www.gog.com/games?priceRange=0,0", lang: "text" }
    ]
  },
  repo: { url: "https://www.pcgamingwiki.com/wiki/Freeware_games", label: "PCGamingWiki Free Games" }
}

];