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
}, 
{
  id: "dns-adblock", title: "Block Ads Everywhere with DNS", category: "Networking",
  difficulty: "beginner", time: "15 min",
  summary: "Block ads on every device in your home — phone, tablet, TV, laptop — with one DNS change. No apps, no root.",
  intro: "DNS is how your device looks up website addresses. Change which DNS server you use, and you can block ads network-wide — before they ever reach your device. Works on every app, every browser, every device. Even ads inside mobile games.",
  tags: ["dns", "ads", "privacy", "network"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Understand what DNS is (in plain English)",
    "Block ads on your phone with free DNS",
    "Block ads on your whole home network",
    "Choose between AdGuard, NextDNS, and self-hosted",
    "Test that it's actually working"
  ],
  steps: {
    linux: [
      { chapter: "Understanding", title: "What is DNS?", text: "When you type `google.com`, your device asks a **DNS server** for its IP address. Ads work the same way — they ask for `ads.example.com`. If your DNS server **refuses to answer** for ad domains, ads simply don't load.", type: "read" },
      { title: "Why this beats ad-blocker apps", text: "Browser extensions only block ads in browsers. DNS blocking stops ads **everywhere** — apps, games, smart TVs, everything on your network.", type: "read" },

      { chapter: "Option 1: Public ad-blocking DNS (easiest)", title: "AdGuard DNS", text: "Free, no signup. Blocks ads and trackers. Just change your DNS settings to:\n\n**IPv4:** `94.140.14.14` and `94.140.15.15`\n**IPv6:** `2a10:50c0::ad1:ff` and `2a10:50c0::ad2:ff`", type: "code" },
      { title: "Alternative: Control D", text: "Also free. Blocks ads with `76.76.2.0` and `76.76.10.0`.", type: "tip" },

      { chapter: "Option 2: NextDNS (free, customizable)", title: "Better control", text: "NextDNS gives you a **personal dashboard** — see what's being blocked, allowlist/denylist custom domains, per-device profiles. Free tier = 300,000 queries/month (plenty for personal use).", code: "https://nextdns.io", type: "code" },
      { title: "Set it up", text: "Sign up → create a profile → you get a **custom DNS address** like `abcd12.dns.nextdns.io`. Use that as your DNS on any device." },

      { chapter: "Option 3: Pi-hole (self-hosted, best)", title: "Your own DNS server", text: "Pi-hole runs on a Raspberry Pi (or any Linux box) in your home. Every device on your WiFi goes through it. Blocks ads network-wide, including smart TVs and consoles.", code: "https://pi-hole.net", type: "code" },
      { title: "Quick install (on Debian/Ubuntu)", text: "One command installs and configures everything.", code: "curl -sSL https://install.pi-hole.net | bash", type: "code" },
      { title: "Then set your router's DNS", text: "Point your router to the Pi-hole's IP. Now every device in the house is protected automatically.", note: { type: "tip", text: "You can also set it per-device if you don't control the router." } },

      { chapter: "How to change DNS (Linux)", title: "System-wide DNS", text: "Edit resolved config or use NetworkManager. Simplest on NetworkManager systems:", code: "nmcli con mod \"Your WiFi\" ipv4.dns \"94.140.14.14 94.140.15.15\"\nnmcli con up \"Your WiFi\"", type: "code" },
      { title: "Verify", text: "Query a known ad domain — should return nothing.", code: "nslookup ads.doubleclick.net\n# Should return NXDOMAIN or 0.0.0.0", type: "try" },
      { title: "Or use systemd-resolved", text: "Edit /etc/systemd/resolved.conf and set `DNS=94.140.14.14 94.140.15.15`." },
      { title: "Test ads blocked", text: "Open a site with lots of ads (news sites are perfect). Should feel cleaner and load faster.", type: "try" }
    ],
    android: [
      { chapter: "Understanding", title: "What is DNS?", text: "DNS is how your phone finds websites. Change it, and you can block ads **in every app** — including games, Instagram, YouTube app. No root needed.", type: "read" },
      { chapter: "Fastest method: Private DNS", title: "Android 9+ has built-in Private DNS", text: "Settings → Network & Internet → Private DNS → **Private DNS provider hostname**", type: "code" },
      { title: "Enter AdGuard's address", text: "Type exactly:", code: "dns.adguard-dns.com", output: "Save. Done. Ads across all apps are now blocked.", type: "try" },
      { title: "Or use NextDNS for more control", text: "If you made a NextDNS profile:", code: "abcd12.dns.nextdns.io", type: "code" },

      { chapter: "Alternative: Local VPN apps", title: "If Private DNS isn't available", text: "Older Android (8 and below) — install **DNS66**, **Blokada**, or **Rethink DNS** from F-Droid. These create a local VPN that reroutes DNS. Free, no ads." },
      { title: "Rethink DNS install", text: "Our favorite — flexible, open source, no telemetry.", code: "https://f-droid.org/packages/com.celzero.bravedns/", type: "code" },

      { chapter: "Verify it's working", title: "Test", text: "Visit this URL — if it shows a blocked message, DNS is working:", code: "https://ads.doubleclick.net", type: "try" },
      { title: "Check in the browser", text: "Open a news site. Ads should be missing. Pages should load noticeably faster.", type: "try" },

      { chapter: "Bonus: block ads in games", title: "Even mobile games", text: "Ads in free games are served from the same ad networks. DNS blocking removes them without touching the game itself.", note: { type: "tip", text: "Some games check for blockers and may refuse to work. Just whitelist that domain in NextDNS if needed." } },
      { title: "You're done", text: "Every app on your phone is now ad-free. Battery lasts longer, data usage drops, and pages load faster.", type: "read" }
    ],
    mac: [
      { chapter: "Understanding", title: "What is DNS?", text: "DNS is how your Mac looks up website addresses. Change your DNS server to one that blocks ads, and every app gets cleaner.", type: "read" },
      { chapter: "Change DNS", title: "System Settings", text: "System Settings → Network → your WiFi → Details → **DNS** tab", type: "code" },
      { title: "Add these servers", text: "Remove existing ones, add:\n\n**94.140.14.14**\n**94.140.15.15**", type: "code" },
      { title: "Save + reapply", text: "Click **OK** → **Apply**. Then toggle WiFi off and on.", type: "try" },

      { chapter: "Verify", title: "Test", text: "In Terminal:", code: "dig ads.doubleclick.net\n# Should return NXDOMAIN or 0.0.0.0", type: "try" },
      { title: "Browse", text: "Open Safari or Chrome. Ads are gone from most sites.", type: "try" },

      { chapter: "Optional: NextDNS app", title: "For more control", text: "NextDNS has a Mac app that works over your custom profile.", code: "https://nextdns.io", type: "code" }
    ],
    windows: [
      { chapter: "Understanding", title: "What is DNS?", text: "Windows uses DNS to find websites. Change it to an ad-blocking server for system-wide blocking.", type: "read" },
      { chapter: "Change DNS", title: "Settings", text: "Settings → Network & Internet → Ethernet (or WiFi) → **Edit** under DNS server assignment", type: "code" },
      { title: "Enter these", text: "**Preferred:** `94.140.14.14`\n**Alternate:** `94.140.15.15`", type: "code" },
      { title: "Save", text: "Click OK → close settings → reconnect WiFi.", type: "try" },

      { chapter: "Verify", title: "Test in PowerShell", text: "Run this:", code: "nslookup ads.doubleclick.net", output: "Server:  UnKnown\nAddress:  94.140.14.14\n\nName: ads.doubleclick.net\n*** Can't find ads.doubleclick.net: No response from server", type: "try" },
      { title: "Browse", text: "Open Edge or Chrome. Most ads should be missing.", type: "try" },

      { chapter: "Bonus: NextDNS for granular control", title: "Custom rules per device", text: "Install the **NextDNS** app from nextdns.io. Lets you allowlist/blocklist domains and see stats.", code: "https://nextdns.io", type: "code" },
      { title: "Tip", text: "Some apps like Discord and Steam break with ad-blocking DNS. Just switch back temporarily if something stops working.", type: "warn" }
    ],
    ios: [
      { chapter: "Understanding", title: "What is DNS?", text: "iOS uses DNS to reach websites. Change it, and every app on your iPhone/iPad gets cleaner.", type: "read" },
      { chapter: "Manual DNS change", title: "Settings", text: "Settings → Wi-Fi → tap the **(i)** next to your network → **Configure DNS** → Manual", type: "code" },
      { title: "Remove existing, add these", text: "**94.140.14.14**\n**94.140.15.15**", type: "code" },
      { title: "Save", text: "Tap **Save** (top right). WiFi reconnects automatically.", type: "try" },

      { chapter: "Easier: Use an app", title: "AdGuard app", text: "The official AdGuard iOS app uses the same DNS servers, but works on cellular too (not just WiFi).", code: "https://apps.apple.com/app/adguard-adblock-privacy/id1047223162", type: "code" },
      { title: "NextDNS app", text: "Or NextDNS if you want custom rules and stats.", code: "https://apps.apple.com/app/nextdns/id1463342498", type: "code" },
      { title: "Why apps are better on iOS", text: "Manual DNS only works on WiFi. Apps use a VPN profile so it works on cellular too.", type: "tip" },

      { chapter: "Verify", title: "Test", text: "Open Safari → visit `ads.doubleclick.net` — should show a blocked message or fail to load.", type: "try" },
      { title: "Browse a news site", text: "Should feel cleaner. Ads missing, pages load faster.", type: "try" },
      { title: "Done", text: "Every app on your iPhone is now ad-free.", type: "read" }
    ]
  },
  repo: { url: "https://adguard-dns.io/", label: "AdGuard DNS" }
},

{
  id: "dns-gaming", title: "Best DNS Servers for Gaming (Lower Ping)", category: "Networking",
  difficulty: "beginner", time: "12 min",
  summary: "DNS doesn't affect ping in-game, but it does affect matchmaking and downloads. Here are the best servers for gaming.",
  intro: "DNS doesn't change your ping to the game server (that's your ISP route), but it **does** affect matchmaking speed, game downloads, update servers, and Store responsiveness. Choosing the right DNS can mean faster matches, faster downloads, and fewer errors.",
  tags: ["dns", "gaming", "ping"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Understand what DNS actually affects for gaming",
    "Best DNS servers for games in each region",
    "How to change DNS on every device",
    "How to test which is fastest for you"
  ],
  steps: {
    linux: [
      { chapter: "Truth first", title: "DNS doesn't lower in-game ping", text: "Ping to the game server depends on your ISP's route, not on DNS. **Ignore anyone who says a DNS will give you 'lower ping in CS2'.** However...", type: "read" },
      { title: "...it DOES affect these", text: "• Matchmaking queue times (finding players faster)\n• Game downloads and updates (Steam, Epic, PSN, Xbox)\n• Store loading speed\n• Login/authentication speed\n• Party/friend connections", type: "read" },

      { chapter: "Best gaming DNS servers", title: "Cloudflare (fastest overall)", text: "The fastest public DNS in the world — lowest latency for most regions.", code: "1.1.1.1\n1.0.0.1", type: "code" },
      { title: "Google DNS", text: "Second-fastest, very reliable. Slightly better for some regions.", code: "8.8.8.8\n8.8.4.4", type: "code" },
      { title: "Quad9", text: "Privacy-focused, blocks malicious domains. Good for competitive gaming.", code: "9.9.9.9\n149.112.112.112", type: "code" },
      { title: "For Nigerian / African users", text: "Cloudflare (1.1.1.1) usually wins because of its Lagos and Johannesburg PoPs. Google DNS is a close second.", note: { type: "tip", text: "Test both — 10 ms difference is meaningful." }, type: "tip" },

      { chapter: "Change DNS (Linux)", title: "NetworkManager", text: "One command per connection.", code: "nmcli con mod \"Your WiFi\" ipv4.dns \"1.1.1.1 1.0.0.1\"\nnmcli con up \"Your WiFi\"", type: "code" },

      { chapter: "Test which is fastest", title: "Simple benchmark", text: "Ping each DNS server to see which is fastest from your location.", code: "for dns in 1.1.1.1 8.8.8.8 9.9.9.9; do\n  echo \"=== $dns ===\"\n  ping -c 3 $dns\ndone", output: "=== 1.1.1.1 ===\nrtt min/avg/max = 12.4/13.1/14.2 ms\n\n=== 8.8.8.8 ===\nrtt min/avg/max = 18.2/19.5/21.0 ms\n\n=== 9.9.9.9 ===\nrtt min/avg/max = 15.0/16.2/17.8 ms", type: "try" },
      { title: "Pick the lowest average", text: "Whichever shows the lowest average ms wins for you. Re-test monthly if your ISP changes.", type: "read" }
    ],
    android: [
      { chapter: "Truth first", title: "DNS doesn't affect in-game ping", text: "Your match ping is decided by your ISP's route to the game server, not DNS. But it does affect **matchmaking speed** and **downloads**.", type: "read" },

      { chapter: "Best servers", title: "Fastest options", text: "• **Cloudflare** — `1.1.1.1`, `1.0.0.1`\n• **Google** — `8.8.8.8`, `8.8.4.4`\n• **Quad9** — `9.9.9.9`", type: "code" },
      { title: "Nigeria/Africa tip", text: "Cloudflare has a Lagos PoP, so `1.1.1.1` is usually best for us.", type: "tip" },

      { chapter: "Change DNS", title: "Private DNS (Android 9+)", text: "Settings → Network → Private DNS → **Hostname**", type: "code" },
      { title: "Enter Cloudflare", text: "Type exactly:", code: "one.one.one.one", type: "code" },
      { title: "Save", text: "Now DNS goes through Cloudflare on WiFi and mobile data.", type: "try" },

      { chapter: "Verify", title: "Check in the browser", text: "Visit:", code: "https://1.1.1.1/help", output: "Should say: 'Connected to 1.1.1.1 — Yes'", type: "try" }
    ],
    mac: [
      { chapter: "Truth first", title: "DNS ≠ lower ping", text: "Ping to the game server doesn't change with DNS. Matchmaking and downloads do.", type: "read" },
      { chapter: "Best servers", title: "Top three", text: "• Cloudflare: `1.1.1.1`, `1.0.0.1`\n• Google: `8.8.8.8`, `8.8.4.4`\n• Quad9: `9.9.9.9`", type: "code" },
      { chapter: "Change DNS", title: "System Settings", text: "System Settings → Network → WiFi → Details → DNS", type: "code" },
      { title: "Add servers", text: "Add `1.1.1.1` and `1.0.0.1`. Remove others.", type: "code" },
      { chapter: "Test", title: "Speed test", text: "In Terminal:", code: "for dns in 1.1.1.1 8.8.8.8; do ping -c 3 $dns; done", type: "try" }
    ],
    windows: [
      { chapter: "Truth first", title: "DNS ≠ lower ping", text: "Ping is set by your ISP route. DNS affects matchmaking and downloads.", type: "read" },
      { chapter: "Best servers", title: "Top three", text: "• Cloudflare: `1.1.1.1`, `1.0.0.1`\n• Google: `8.8.8.8`, `8.8.4.4`\n• Quad9: `9.9.9.9`", type: "code" },
      { chapter: "Change DNS", title: "Settings", text: "Settings → Network & Internet → WiFi (or Ethernet) → Edit DNS", type: "code" },
      { title: "Add servers", text: "Preferred: `1.1.1.1`\nAlternate: `1.0.0.1`", type: "code" },
      { chapter: "Test", title: "Benchmark", text: "In PowerShell:", code: "1.1.1.1, 8.8.8.8, 9.9.9.9 | ForEach-Object { Write-Host \"=== $_ ===\"; ping -n 3 $_ }", type: "try" }
    ],
    ios: [
      { chapter: "Truth first", title: "DNS ≠ lower ping", text: "Game ping is your ISP's route. DNS affects downloads and matchmaking.", type: "read" },
      { chapter: "Best servers", title: "Top three", text: "• Cloudflare: `1.1.1.1`, `1.0.0.1`\n• Google: `8.8.8.8`", type: "code" },
      { chapter: "Easiest: Cloudflare app", title: "1.1.1.1 app", text: "The official Cloudflare app from the App Store. One tap to enable. Works on WiFi and cellular.", code: "https://apps.apple.com/app/1-1-1-1-faster-internet/id1423538627", type: "code" },
      { title: "Or change manually", text: "Settings → WiFi → (i) icon → Configure DNS → Manual → add `1.1.1.1` and `1.0.0.1`", type: "code" },
      { chapter: "Test", title: "Verify with Cloudflare", text: "Open Safari:", code: "https://1.1.1.1/help", output: "Should say 'Connected to 1.1.1.1 — Yes'", type: "try" }
    ]
  },
  repo: { url: "https://one.one.one.one/", label: "Cloudflare 1.1.1.1" }
},
// ========== WINDOWS ==========
{
  id: "wsl2", title: "Run Linux on Windows (WSL2)", category: "Windows",
  difficulty: "beginner", time: "20 min",
  summary: "Real Linux running inside Windows — no dual boot, no VM lag.",
  intro: "WSL2 runs a real Linux kernel inside Windows. You get bash, apt, git, Docker, and thousands of Linux tools without leaving Windows. Perfect for developers who need both.",
  tags: ["windows", "linux", "wsl", "dev"], platforms: ["windows"],
  learnList: [
    "Install WSL2 in one command",
    "Pick a Linux distro",
    "Access Windows files from Linux",
    "Run GUI Linux apps on Windows",
    "Use it with VS Code"
  ],
  steps: {
    windows: [
      { chapter: "Setup", title: "One-command install", text: "Open PowerShell as Administrator and run this. It installs WSL2 + Ubuntu automatically.", code: "wsl --install", output: "Installing: Virtual Machine Platform\nInstalling: Windows Subsystem for Linux\nDownloading: Ubuntu\n\nPlease reboot your computer to finish installation.", type: "code" },
      { title: "Reboot", text: "Restart your PC. WSL2 needs the reboot to activate the virtual machine layer.", type: "read" },
      { title: "Complete Ubuntu setup", text: "Open the new **Ubuntu** app from the Start menu. It asks for a username and password. **Pick something simple** — this is separate from your Windows login.", type: "try" },

      { chapter: "Get oriented", title: "Update packages", text: "First thing inside Ubuntu.", code: "sudo apt update && sudo apt upgrade -y", type: "code" },
      { title: "Where are you?", text: "You're in /home/yourname — a Linux filesystem. Your Windows files live elsewhere.", code: "pwd\nls", output: "/home/neo\n(some default files)", type: "try" },

      { chapter: "Access Windows files", title: "Windows drives are mounted here", text: "Your C: drive is at /mnt/c.", code: "cd /mnt/c/Users/YourWindowsName/Desktop\nls", type: "code" },
      { title: "Tip: open Explorer here", text: "From Windows Explorer, you can access Linux files by typing `\\\\wsl$\\Ubuntu\\home\\yourname` in the address bar.", type: "tip" },

      { chapter: "Install dev tools", title: "Git, Python, Node", text: "All standard Linux packages.", code: "sudo apt install git python3 python3-pip nodejs npm -y", type: "code" },
      { title: "Verify", text: "Check versions.", code: "git --version\npython3 --version\nnode --version", output: "git version 2.45.0\nPython 3.12.3\nv20.11.0", type: "try" },

      { chapter: "GUI Linux apps", title: "WSLg (built-in on Windows 11)", text: "Windows 11 has WSLg — GUI Linux apps run natively. Try:", code: "sudo apt install gedit -y\ngedit", output: "A Linux text editor window opens on your Windows desktop.", type: "try" },

      { chapter: "VS Code integration", title: "Best of both worlds", text: "Install VS Code on Windows → install the **WSL** extension → now you can edit Linux files with VS Code's full UI.", code: "code .", output: "VS Code opens with a 'WSL: Ubuntu' indicator in the bottom-left corner.", type: "try" },
      { title: "This is the killer feature", text: "Windows UI + Linux terminal + full filesystem access. Developers use this daily.", type: "read" },

      { chapter: "Managing distros", title: "See installed distros", text: "From PowerShell:", code: "wsl --list --verbose", output: "  NAME      STATE           VERSION\n* Ubuntu    Running         2", type: "try" },
      { title: "Install more distros", text: "Debian, Kali, Alpine — all available.", code: "wsl --install -d kali-linux", type: "code" },
      { title: "Shut down WSL", text: "When you need to free resources.", code: "wsl --shutdown", type: "code" },
      { title: "You're done", text: "You now have full Linux running inside Windows.", type: "read" }
    ]
  },
  repo: { url: "https://learn.microsoft.com/en-us/windows/wsl/", label: "Microsoft WSL Docs" }
},

{
  id: "windows-terminal", title: "Level Up Windows Terminal", category: "Windows",
  difficulty: "beginner", time: "12 min",
  summary: "Transform your Windows terminal into a dev-ready powerhouse.",
  intro: "Windows Terminal is free, modern, and faster than cmd.exe. With a few tweaks it becomes a serious development tool.",
  tags: ["windows", "terminal", "dev"], platforms: ["windows"],
  learnList: [
    "Install and configure Windows Terminal",
    "Add transparency and custom fonts",
    "Set up Oh My Posh for a slick prompt",
    "Create custom profiles and shortcuts"
  ],
  steps: {
    windows: [
      { chapter: "Install", title: "From Microsoft Store", text: "Search **Windows Terminal** in the Store. Install.", code: "winget install Microsoft.WindowsTerminal", type: "code" },
      { title: "Or use winget", text: "If you have winget set up already.", type: "tip" },

      { chapter: "First tweaks", title: "Open settings", text: "Ctrl+, or the dropdown → Settings. Edit `settings.json` for full control." },
      { title: "Enable transparency", text: "Add to any profile's settings:", code: "\"useAcrylic\": true,\n\"acrylicOpacity\": 0.85,\n\"opacity\": 90", lang: "json", type: "code" },

      { chapter: "Better fonts", title: "Install a Nerd Font", text: "Nerd Fonts include icons for prompts. Download Cascadia Code NF:", code: "winget install -e --id Microsoft.CascadiaCode", type: "code" },
      { title: "Set it in Terminal", text: "Add to a profile:", code: "\"font\": {\n  \"face\": \"Cascadia Code NF\",\n  \"size\": 12\n}", lang: "json", type: "code" },

      { chapter: "Oh My Posh", title: "A slick prompt", text: "Oh My Posh changes your prompt to show git status, time, folders, icons.", code: "winget install JanDeDobbeleer.OhMyPosh", type: "code" },
      { title: "Set a theme", text: "Then pick a preset.", code: "oh-my-posh init pwsh --config \"$env:POSH_THEMES_PATH\\jandedobbeleer.omp.json\" | Invoke-Expression", type: "code" },
      { title: "See all themes", text: "Browse them here:", code: "https://ohmyposh.dev/docs/themes", type: "code" },

      { chapter: "Keyboard shortcuts", title: "Learn these", text: "• **Ctrl+Shift+T** — new tab\n• **Ctrl+Shift+W** — close tab\n• **Alt+Shift+D** — split pane\n• **Ctrl+Tab** — cycle tabs\n• **Ctrl+Shift+P** — command palette (run any action)", type: "read" },

      { chapter: "Profiles", title: "Multiple shells in tabs", text: "You can open PowerShell, WSL Ubuntu, cmd, and Azure Cloud Shell all in tabs of the same window. Add them via Settings → Add a new profile.", type: "read" },
      { title: "Default profile", text: "Set PowerShell 7 or WSL Ubuntu as your default for a better experience.", type: "tip" },
      { title: "Done", text: "You now have a terminal that rivals macOS/Linux setups.", type: "read" }
    ]
  },
  repo: { url: "https://ohmyposh.dev", label: "Oh My Posh" }
},

{
  id: "win-debloat", title: "Speed Up Windows (Debloat Guide)", category: "Windows",
  difficulty: "intermediate", time: "25 min",
  summary: "Remove bloatware, disable trackers, and make Windows actually fast.",
  intro: "Windows ships with dozens of apps you'll never use, telemetry you didn't ask for, and background services that eat resources. This tutorial removes all of it safely.",
  tags: ["windows", "performance", "privacy"], platforms: ["windows"],
  learnList: [
    "Remove preinstalled bloatware safely",
    "Disable telemetry and tracking",
    "Turn off unneeded background services",
    "Speed up startup and search"
  ],
  steps: {
    windows: [
      { chapter: "⚠️ Back up first", title: "Create a restore point", text: "Before any system change, make a restore point.", code: "Checkpoint-Computer -Description \"Before Debloat\" -RestorePointType \"MODIFY_SETTINGS\"", lang: "powershell", type: "code" },

      { chapter: "Remove bloatware", title: "List installed apps", text: "See what's installed.", code: "Get-AppxPackage | Select Name", lang: "powershell", type: "code" },
      { title: "Remove the worst offenders", text: "Safe to remove these:", code: "Get-AppxPackage *bing* | Remove-AppxPackage\nGet-AppxPackage *xbox* | Remove-AppxPackage\nGet-AppxPackage *zune* | Remove-AppxPackage\nGet-AppxPackage *skype* | Remove-AppxPackage\nGet-AppxPackage *solitaire* | Remove-AppxPackage", lang: "powershell", type: "code" },
      { title: "Or use a GUI tool", text: "For a safer click-based approach, use **Winhance** or **Chris Titus Tech's Windows Utility** — both open source and vetted.", type: "tip" },

      { chapter: "Disable telemetry", title: "Turn off tracking", text: "Settings → Privacy & Security → General → turn off all 4 options. Then Diagnostics → send optional data → OFF.", type: "code" },
      { title: "Disable Advertising ID", text: "Same page → scroll down. Turn off \"Let apps show me personalized ads\".", type: "read" },

      { chapter: "Reduce startup apps", title: "See what launches on boot", text: "Ctrl+Shift+Esc → Startup tab. Right-click → Disable for anything you don't need immediately.", type: "code" },
      { title: "Common junk", text: "• OneDrive (if you don't use it)\n• Teams\n• Spotify\n• Adobe Creative Cloud\n• Steam (unless you game daily)", type: "read" },

      { chapter: "Disable services", title: "Optional — advanced", text: "Warning: only disable these if you know what they do.", code: "services.msc", lang: "text", type: "code" },
      { title: "Safe to disable", text: "• **SysMain** (if you have an SSD)\n• **Windows Search** (if you don't use search)\n• **Print Spooler** (if you never print)\n• **Xbox services** (if you don't game on Xbox)", type: "warn" },

      { chapter: "Speed up search", title: "Rebuild search index", text: "Settings → Privacy & Security → Searching Windows → Advanced → Rebuild index.", type: "tip" },

      { chapter: "Final speedup", title: "Set power plan to High Performance", text: "For desktops and plugged-in laptops:", code: "powercfg -setactive SCHEME_MIN", lang: "powershell", type: "code" },
      { title: "Result", text: "You should see noticeably faster boots, less fan noise, more free RAM.", type: "read" }
    ]
  },
  repo: { url: "https://christitus.com/windows-tool/", label: "Chris Titus Windows Tool" }
},

{
  id: "win-backup", title: "Back Up Windows Properly", category: "Windows",
  difficulty: "beginner", time: "15 min",
  summary: "Never lose your files, programs, or Windows setup again.",
  intro: "A dead drive can happen in seconds. Here's a complete backup plan that costs nothing and saves everything — files, apps, and full system images.",
  tags: ["windows", "backup"], platforms: ["windows"],
  learnList: [
    "Back up files with File History",
    "Create a full system image",
    "Sync to cloud + external drive",
    "Test that your backup actually works"
  ],
  steps: {
    windows: [
      { chapter: "What to back up", title: "Three layers", text: "• **Files** — documents, photos, projects\n• **System** — installed programs and settings\n• **Boot** — the ability to restore after a crash\n\nEach needs a different method.", type: "read" },

      { chapter: "Layer 1: Files", title: "OneDrive (built-in)", text: "OneDrive syncs Desktop, Documents, and Pictures automatically. 5GB free.", code: "Settings → OneDrive → Sync folders", type: "code" },
      { title: "For more space", text: "Use an external drive + File History.", code: "Settings → System → Storage → Advanced → Backup options", type: "code" },
      { title: "Enable File History", text: "Pick an external drive. Windows backs up automatically every hour.", type: "try" },

      { chapter: "Layer 2: System image", title: "Full system backup", text: "Creates a bootable copy of your entire Windows install. If your drive dies, this restores everything.", code: "Control Panel → System and Security → File History → System Image Backup", lang: "text", type: "code" },
      { title: "Alternative: free imaging tools", text: "**Macrium Reflect Free** or **Veeam Agent Free** — both create bootable full-system images.", type: "tip" },

      { chapter: "Layer 3: Recovery drive", title: "USB recovery drive", text: "If Windows won't boot, you need a bootable USB to restore from. Make one now.", code: "Start menu → search \"Recovery Drive\" → open → insert USB (16GB+) → follow wizard", type: "code" },
      { title: "Test it works", text: "Boot from the USB once to verify it launches. A recovery drive you've never tested is not a recovery drive.", type: "warn" },

      { chapter: "Cloud backup", title: "Free options", text: "• **Google Drive** — 15GB free\n• **Proton Drive** — 5GB free, encrypted\n• **Mega** — 20GB free\n• **Backblaze** — paid but unlimited (~$7/mo)", type: "read" },

      { chapter: "Schedule it", title: "Automate", text: "Windows File History runs automatically after setup. For cloud backups, most services have auto-sync built in.", type: "tip" },
      { title: "The 3-2-1 rule", text: "**3** copies of data\n**2** different media types\n**1** offsite\n\nIf you follow this, you're essentially bulletproof.", type: "read" },
      { title: "Done", text: "You now have layers of protection. Sleep better.", type: "read" }
    ]
  },
  repo: { url: "https://www.microsoft.com/en-us/windows/backup", label: "Windows Backup" }
},

{
  id: "winlator", title: "Run Windows Apps on Android (Winlator)", category: "Windows",
  difficulty: "advanced", time: "25 min",
  summary: "Play PC games and run Windows software on your Android phone.",
  intro: "Winlator is an app that runs Windows programs on Android using Wine and Box86/Box64. No root needed. Real PC games, real Windows apps — on your phone.",
  tags: ["android", "windows", "gaming", "wine"], platforms: ["android"],
  learnList: [
    "Install Winlator correctly",
    "Set up a container for Windows apps",
    "Install a Windows program",
    "Tune performance for games"
  ],
  steps: {
    android: [
      { chapter: "Before you start", title: "Requirements", text: "• Snapdragon 8xx or newer (Snapdragon 855+)\n• At least 6GB RAM\n• 10GB free storage\n• Android 11+\n\nOlder chips will run simple apps but not games.", type: "read" },
      { title: "GPU note", text: "Adreno GPUs (Qualcomm) work best. Mali (MediaTek/Samsung) support is limited. Snapdragon is the ideal choice.", type: "warn" },

      { chapter: "Install Winlator", title: "Download from GitHub", text: "Official releases only — avoid third-party sites.", code: "https://github.com/brunodev85/winlator/releases", type: "code" },
      { title: "Install the APK", text: "Enable install from unknown sources if needed. Install like any APK.", type: "try" },
      { title: "Also install OBB", text: "Some Winlator versions need an OBB file placed in `/Android/obb/com.winlator/`. Check the release notes.", type: "warn" },

      { chapter: "First container", title: "Open Winlator", text: "Tap + to create a new container. This is like a mini Windows environment.", type: "try" },
      { title: "Container settings", text: "Recommended for most phones:\n• **Screen size:** 1280×720\n• **Graphics driver:** Turnip (Adreno) or VirGL\n• **DX wrapper:** DXVK (for DirectX 9-11 games)\n• **Box86/64:** Box64\n• **CPU cores:** match your phone (6 or 8)", type: "code" },
      { title: "Create it", text: "Tap the checkmark. Wait for setup (30 seconds).", type: "try" },

      { chapter: "Install a Windows app", title: "Copy an .exe to your phone", text: "Put the Windows installer (.exe or .msi) in your Downloads folder.", type: "read" },
      { title: "Inside the container", text: "Tap the container → it opens a Windows-like desktop with a file manager. Navigate to `D:` (your Downloads folder) → double-click the .exe.", type: "try" },
      { title: "Install it", text: "Follow the Windows installer as normal. It installs inside the container.", type: "read" },

      { chapter: "Performance tuning", title: "For games", text: "Edit the container → **Advanced** tab:\n• Enable **ESYNC** (better CPU usage)\n• Enable **Big Block** (faster)\n• Set **Video Memory Size** to 2048MB or 4096MB\n• Try different DX wrappers — DXVK 1.10.3 often works best", type: "code" },
      { title: "Gamepad", text: "Connect a Bluetooth controller (Xbox, PS5, 8BitDo). Winlator recognizes them automatically.", type: "tip" },

      { chapter: "What actually works", title: "Realistic games", text: "• **Older games** (2000–2015) — runs great\n• **Indie games** — often perfect\n• **Skyrim, GTA V, Witcher 3** — heavy but playable on flagship chips\n• **Modern AAA** — probably not", type: "read" },
      { title: "Windows apps", text: "• **Notepad++, GIMP, Paint.NET** — works\n• **Microsoft Office** — works but slow\n• **Chrome, Firefox** — works\n• **Adobe Creative Suite** — no", type: "read" },

      { chapter: "Troubleshooting", title: "App won't start", text: "Try a different DX wrapper. Try setting compatibility mode to Windows 7. Check the Winlator Discord for specific games.", type: "warn" },
      { title: "You did it", text: "You're running Windows apps on Android. This is genuinely impressive tech.", type: "read" }
    ]
  },
  repo: { url: "https://github.com/brunodev85/winlator", label: "Winlator on GitHub" }
},

{
  id: "win-shortcuts", title: "Essential Windows Keyboard Shortcuts", category: "Windows",
  difficulty: "beginner", time: "10 min",
  summary: "Save hours every week with these shortcuts.",
  intro: "Windows has hundreds of shortcuts. These 25 are the ones that save real time. Learn them and you'll never reach for the mouse for basic tasks again.",
  tags: ["windows", "shortcuts", "productivity"], platforms: ["windows"],
  learnList: [
    "Master Windows key shortcuts",
    "Window management shortcuts",
    "Virtual desktops",
    "Screen capture shortcuts"
  ],
  steps: {
    windows: [
      { chapter: "Windows key basics", title: "The essentials", text: "• **Win** — start menu\n• **Win + E** — File Explorer\n• **Win + I** — Settings\n• **Win + R** — Run dialog\n• **Win + L** — Lock screen\n• **Win + D** — Show desktop\n• **Win + S** — Search", type: "read" },

      { chapter: "Window management", title: "Move windows like a pro", text: "• **Win + ←/→** — snap window left/right\n• **Win + ↑** — maximize\n• **Win + ↓** — minimize\n• **Win + Shift + ←/→** — move to other monitor\n• **Alt + Tab** — switch apps\n• **Win + Tab** — task view", type: "read" },

      { chapter: "Virtual desktops", title: "Multiple screens, one monitor", text: "• **Win + Ctrl + D** — new desktop\n• **Win + Ctrl + →** — next desktop\n• **Win + Ctrl + ←** — previous desktop\n• **Win + Ctrl + F4** — close current desktop\n\nUseful for separating work/personal/hobby.", type: "read" },

      { chapter: "Screenshot shortcuts", title: "Better than Print Screen", text: "• **Win + Shift + S** — screenshot a region (opens snipping tool)\n• **Win + PrtScn** — full screenshot saved to Pictures\n• **Win + Alt + PrtScn** — screenshot of active window (saved to Videos)", type: "read" },

      { chapter: "File Explorer", title: "Speed through folders", text: "• **Ctrl + Shift + N** — new folder\n• **Alt + ↑** — go up a level\n• **Alt + ←** — back\n• **F2** — rename\n• **Shift + Delete** — delete permanently (no Recycle Bin)\n• **Ctrl + Shift + E** — expand folder tree", type: "read" },

      { chapter: "Power user", title: "For advanced users", text: "• **Win + X** — power user menu (device manager, disk management, terminal)\n• **Win + V** — clipboard history\n• **Win + .** — emoji picker\n• **Win + P** — projector/second screen mode", type: "read" },

      { chapter: "Practice", title: "Print this list", text: "Copy these onto a sticky note. Force yourself to use shortcuts for one day. By day 3 they're automatic.", type: "tip" },
      { title: "Done", text: "You just became noticeably faster on Windows.", type: "read" }
    ]
  },
  repo: { url: "https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows", label: "Microsoft Shortcuts" }
},

// ========== macOS ==========
{
  id: "mac-shortcuts", title: "Essential macOS Keyboard Shortcuts", category: "macOS",
  difficulty: "beginner", time: "10 min",
  summary: "Mac shortcuts are different from Windows. Learn the ones that matter.",
  intro: "Mac users who come from Windows often miss keyboard shortcuts. Here are the ones that make a Mac feel fast.",
  tags: ["mac", "shortcuts", "productivity"], platforms: ["mac"],
  learnList: [
    "Understand the ⌘ Cmd vs Ctrl difference",
    "Master the 20 most useful shortcuts",
    "Use Spotlight for everything",
    "Screenshot like a pro"
  ],
  steps: {
    mac: [
      { chapter: "Key symbols", title: "The four modifier keys", text: "• **⌘ Cmd** — like Windows Ctrl (main modifier)\n• **⌥ Option/Alt** — alternative functions\n• **⌃ Ctrl** — rarely used alone on Mac\n• **⇧ Shift** — same as everywhere", type: "read" },
      { title: "Print these symbols", text: "They appear in every menu bar. Learn to read them: ⌘ ⌥ ⌃ ⇧", type: "tip" },

      { chapter: "The essentials", title: "Core shortcuts", text: "• **⌘ + Space** — Spotlight search (your best friend)\n• **⌘ + Tab** — switch apps\n• **⌘ + Q** — quit app\n• **⌘ + W** — close window\n• **⌘ + N** — new window\n• **⌘ + Z** — undo\n• **⌘ + Shift + Z** — redo", type: "read" },

      { chapter: "Finder (Mac's File Explorer)", title: "Navigate files", text: "• **⌘ + Shift + N** — new folder\n• **⌘ + ↑** — go up a folder\n• **⌘ + ↓** — open file/folder\n• **⌘ + Delete** — move to Trash\n• **⌘ + Shift + Delete** — empty Trash\n• **Space** — Quick Look preview", type: "read" },
      { title: "Shortcut to anywhere", text: "⌘ + Shift + G — go to a specific folder by path.", type: "tip" },

      { chapter: "Screenshots", title: "Better than Windows", text: "• **⌘ + Shift + 3** — full screenshot\n• **⌘ + Shift + 4** — select region\n• **⌘ + Shift + 4 + Space** — screenshot a specific window\n• **⌘ + Shift + 5** — full screenshot toolbar (screen recording too)", type: "read" },

      { chapter: "Text editing", title: "Works in any app", text: "• **⌘ + ←/→** — jump to start/end of line\n• **⌥ + ←/→** — jump word by word\n• **⌘ + Backspace** — delete whole line\n• **⌥ + Backspace** — delete whole word\n• **⌘ + A** — select all\n• **⌘ + F** — find", type: "read" },

      { chapter: "Spotlight mastery", title: "⌘ + Space does everything", text: "Type math: `24 * 7` → answer appears\nType currency: `100 usd to ngn` → converts\nType app name → opens it\nType file name → finds it\nType `define word` → dictionary", type: "try" },

      { chapter: "Hidden gems", title: "⌥ Option magic", text: "• **⌥ + click** WiFi icon → detailed network info\n• **⌥ + click** sound icon → output device switch\n• **⌥ + drag file** → copy instead of move\n• **⌥ + Cmd + Esc** → Force Quit window", type: "read" },

      { title: "Done", text: "You just unlocked the speed of macOS.", type: "read" }
    ]
  },
  repo: { url: "https://support.apple.com/en-us/HT201236", label: "Apple Shortcuts" }
},

{
  id: "mac-raycast", title: "Raycast — The Mac Launcher You Need", category: "macOS",
  difficulty: "beginner", time: "15 min",
  summary: "Replace Spotlight and 10 other apps with one tool.",
  intro: "Raycast is a super-powered launcher for macOS. Free, fast, and it replaces Spotlight, clipboard managers, window managers, and more — all in one app.",
  tags: ["mac", "productivity", "raycast"], platforms: ["mac"],
  learnList: [
    "Install and set up Raycast",
    "Use it to launch apps faster than Spotlight",
    "Master the clipboard history",
    "Install extensions for extra power"
  ],
  steps: {
    mac: [
      { chapter: "Install", title: "Download Raycast", text: "Free from raycast.com. Once installed, it takes over ⌘ + Space (replacing Spotlight).", code: "https://raycast.com", type: "code" },
      { title: "Grant permissions", text: "Raycast needs Accessibility, Screen Recording, and Full Disk Access for some features. It'll walk you through each.", type: "read" },

      { chapter: "Core features", title: "⌘ + Space — the launcher", text: "Type anything:\n• App name → opens it\n• File name → searches\n• Math → calculates\n• `define word` → dictionary\n• Just like Spotlight but faster", type: "try" },
      { title: "Clipboard history", text: "Press ⌘ + Shift + V to see your clipboard history. Every text/image you've copied. Search, paste, done.", type: "code" },
      { title: "Window management", text: "Type `left` → snaps active window left. `right`, `maximize`, `center`, `top half` — all built in. **Replaces Magnet and Rectangle.**", type: "try" },

      { chapter: "Extensions", title: "Install extensions", text: "Open Raycast → type `store` → browse hundreds of extensions. Some useful ones:\n\n• **GitHub** — search repos and PRs\n• **Notion** — quick notes\n• **Spotify** — control playback\n• **Brew** — install Homebrew packages\n• **Kill Process** — force quit apps", type: "code" },
      { title: "Browser extension", text: "Install the Raycast browser extension → control tabs from the launcher.", type: "tip" },

      { chapter: "Custom aliases", title: "Speed up common actions", text: "Set aliases so `yt` opens YouTube, `g` opens GitHub. Preferences → Extensions → Aliases.", type: "code" },
      { title: "Script commands", text: "Advanced: write shell scripts and run them from Raycast. `echo` anything into the launcher.", type: "tip" },

      { chapter: "AI features", title: "Raycast AI (optional)", text: "There's an optional paid AI tier (or bring your own API key). Handy for quick questions without leaving your workflow. Free tier includes a few uses.", type: "read" },
      { title: "Result", text: "You just replaced 4–5 separate apps with one free tool.", type: "read" }
    ]
  },
  repo: { url: "https://raycast.com", label: "Raycast" }
},

{
  id: "mac-timemachine", title: "Back Up Mac with Time Machine", category: "macOS",
  difficulty: "beginner", time: "10 min",
  summary: "The easiest full-system backup on any OS.",
  intro: "Time Machine backs up your entire Mac automatically — files, apps, settings — and lets you restore anything from any point in time. Zero maintenance once set up.",
  tags: ["mac", "backup", "timemachine"], platforms: ["mac"],
  learnList: [
    "Set up Time Machine with an external drive",
    "Understand how hourly/daily backups work",
    "Restore a single file or the whole system",
    "Add a cloud backup as a second layer"
  ],
  steps: {
    mac: [
      { chapter: "Get a drive", title: "External drive options", text: "• **Any USB drive** — 1TB+ recommended\n• **Samsung T7 SSD** — fast, portable\n• **An old drive** — works fine if it's 2x your Mac's storage\n\nTime Machine uses the whole drive — don't store other files there.", type: "read" },

      { chapter: "Set up", title: "Open System Settings", text: "Settings → General → Time Machine.", code: "System Settings → General → Time Machine", type: "code" },
      { title: "Add backup disk", text: "Click **Add Backup Disk** → select your drive → optionally encrypt it (recommended).", type: "try" },
      { title: "Done", text: "Time Machine now backs up:\n• Every hour (for the last 24 hours)\n• Every day (for the last month)\n• Every week (until the drive fills)", type: "read" },

      { chapter: "How to use it", title: "Restore a single file", text: "Open the folder where the file lived → click the Time Machine icon in the menu bar → **Enter Time Machine** → navigate back in time → click **Restore**.", type: "try" },
      { title: "Restore your whole Mac", text: "Boot from macOS Recovery (hold ⌘ + R at boot) → choose **Restore from Time Machine Backup** → select your drive → wait.", type: "warn" },

      { chapter: "Second layer", title: "Cloud backup option", text: "Time Machine protects against drive failure but not theft or fire. Add a cloud layer:\n\n• **Backblaze** — $7/mo unlimited\n• **Arq** — bring your own cloud storage\n• **iCloud Drive** — free tier for documents", type: "read" },
      { title: "3-2-1 rule", text: "3 copies, 2 media types, 1 offsite. Time Machine + Backblaze + iCloud = you're bulletproof.", type: "tip" },

      { title: "Done", text: "Your Mac is now backed up automatically forever.", type: "read" }
    ]
  },
  repo: { url: "https://support.apple.com/en-us/HT201250", label: "Apple Time Machine" }
},

{
  id: "mac-privacy", title: "Lock Down macOS Privacy", category: "macOS",
  difficulty: "beginner", time: "15 min",
  summary: "Stop Apple and apps from tracking you. Real settings, real changes.",
  intro: "macOS has decent privacy defaults, but there's a lot you can tighten. Here's everything in one pass — takes 15 minutes and lasts forever.",
  tags: ["mac", "privacy", "security"], platforms: ["mac"],
  learnList: [
    "Disable Apple analytics and Siri data",
    "Control per-app permissions",
    "Enable FileVault encryption",
    "Set up a firmware password"
  ],
  steps: {
    mac: [
      { chapter: "Apple tracking", title: "Disable analytics", text: "Settings → Privacy & Security → **Analytics & Improvements** → turn off everything.", type: "code" },
      { title: "Turn off Siri data", text: "Settings → Privacy & Security → **Analytics** → turn off \"Improve Siri & Dictation\".", type: "read" },
      { title: "Disable personalized ads", text: "Settings → Privacy & Security → **Apple Advertising** → turn off \"Personalized Ads\".", type: "code" },

      { chapter: "App permissions", title: "Audit what has access", text: "Settings → Privacy & Security. Check each section:\n• **Location** — remove anything you don't need\n• **Microphone** — only apps that need it\n• **Camera** — same\n• **Files & Folders** — audit which apps see your files", type: "code" },
      { title: "Revoke liberally", text: "If you haven't used an app in 3 months, revoke its permissions. You can always re-grant later.", type: "tip" },

      { chapter: "Encryption", title: "Enable FileVault", text: "Full-disk encryption. If your Mac is stolen, nobody can read the drive.", code: "Settings → Privacy & Security → FileVault → Turn On", type: "code" },
      { title: "Save the recovery key", text: "Apple generates a 24-character key. **Save it somewhere off your Mac** (paper, password manager, Proton Mail draft).", type: "warn" },

      { chapter: "Firmware password", title: "Prevent boot tampering", text: "Advanced: prevents someone from booting your Mac from external media.", code: "Boot into Recovery (⌘ + R) → Utilities → Startup Security Utility → Turn On Firmware Password", type: "code" },

      { chapter: "Network", title: "Use encrypted DNS", text: "Settings → Network → WiFi → Details → DNS → add Cloudflare (1.1.1.1) or use an ad-blocking DNS like AdGuard.", type: "tip" },
      { title: "VPN for public WiFi", text: "Install WireGuard or Tailscale. Use them on any network you don't control.", type: "read" },

      { chapter: "Browser privacy", title: "Safari or Firefox with uBlock", text: "• **Safari** — Settings → Privacy → enable cross-site tracking prevention\n• **Firefox + uBlock Origin** — best-in-class ad blocking\n• **Brave** — pre-configured for privacy", type: "read" },
      { title: "Result", text: "Your Mac now leaks almost nothing.", type: "read" }
    ]
  },
  repo: { url: "https://support.apple.com/guide/mac-help/security-welcome/mac", label: "Apple Security Guide" }
},

// ========== iOS ==========
{
  id: "ios-privacy", title: "Lock Down iOS Privacy", category: "iOS",
  difficulty: "beginner", time: "15 min",
  summary: "Turn off the tracking Apple enables by default.",
  intro: "iOS is more private than Android, but Apple still tracks a lot. Here's what to turn off — one pass through Settings.",
  tags: ["ios", "privacy", "security"], platforms: ["ios"],
  learnList: [
    "Stop Apple ad tracking",
    "Control per-app permissions",
    "Enable Lockdown Mode for high-security needs",
    "Set up advanced data protection"
  ],
  steps: {
    ios: [
      { chapter: "Apple tracking", title: "Personalized ads", text: "Settings → Privacy & Security → **Apple Advertising** → turn off Personalized Ads.", type: "code" },
      { title: "Analytics sharing", text: "Settings → Privacy & Security → **Analytics & Improvements** → turn off everything.", type: "read" },
      { title: "Siri data", text: "Settings → Siri & Search → turn off \"Improve Siri & Dictation\" and all Siri suggestions toggles.", type: "code" },

      { chapter: "App permissions", title: "Audit location tracking", text: "Settings → Privacy & Security → **Location Services** → go through each app:\n• **Never** — weather, social media\n• **While Using** — maps, food delivery\n• **Always** — almost nothing", type: "code" },
      { title: "Precise location", text: "For each app, turn OFF \"Precise Location\" unless it's needed (Uber, food delivery).", type: "tip" },
      { title: "Other permissions", text: "Same section → check:\n• Photos\n• Contacts\n• Microphone\n• Camera\n• Tracking (turn OFF \"Allow Apps to Request to Track\")", type: "code" },

      { chapter: "Safari privacy", title: "Advanced protection", text: "Settings → Safari → Privacy & Security:\n• Enable **Prevent Cross-Site Tracking**\n• Enable **Hide IP Address**\n• Enable **Fraudulent Website Warning**", type: "code" },
      { title: "Content blockers", text: "Install **1Blocker** or **AdGuard** for iOS. Free tier handles most ads.", type: "tip" },

      { chapter: "High security", title: "Lockdown Mode", text: "For journalists, activists, or high-risk users. Blocks most advanced attacks at the cost of some features.", code: "Settings → Privacy & Security → Lockdown Mode → Turn On", type: "code" },

      { chapter: "Advanced Data Protection", title: "End-to-end encrypted iCloud", text: "Normally Apple can decrypt your iCloud backups. With ADP, only you can.", code: "Settings → [your name] → iCloud → Advanced Data Protection → Turn On", type: "code" },
      { title: "⚠️ Save recovery key", text: "If you lose your devices and recovery key, your data is gone forever. Store the key somewhere safe.", type: "warn" },

      { chapter: "WiFi privacy", title: "Private WiFi address", text: "Settings → WiFi → tap (i) next to network → **Private WiFi Address** → Rotating.", type: "code" },
      { title: "DNS", text: "Settings → General → VPN & Device Management → DNS → add a private DNS (AdGuard, NextDNS).", type: "tip" },

      { title: "Result", text: "Your iPhone now leaks almost nothing about you.", type: "read" }
    ]
  },
  repo: { url: "https://support.apple.com/guide/iphone/control-app-access-iph251e92810/ios", label: "Apple Privacy Guide" }
},

{
  id: "ios-shortcuts-advanced", title: "Advanced iOS Shortcuts (Beyond Basics)", category: "iOS",
  difficulty: "intermediate", time: "20 min",
  summary: "Automations that actually save time.",
  intro: "You know the basics of Shortcuts. These 8 specific shortcuts will change how you use your iPhone every day.",
  tags: ["ios", "shortcuts", "automation"], platforms: ["ios"],
  learnList: [
    "Create a morning routine automation",
    "Auto-share location with family",
    "Quick capture notes to Obsidian/Notion",
    "WiFi-based automations that actually work"
  ],
  steps: {
    ios: [
      { chapter: "Setup", title: "Open Shortcuts", text: "Pre-installed on iOS. Tap the **Automation** tab at the bottom.", type: "read" },

      { chapter: "Automation 1 — Morning routine", title: "Wake up smarter", text: "Automation → + → **Time of Day** → 7:00 AM, daily. Add actions:\n\n• Get weather forecast\n• Show the forecast\n• Play your morning playlist (Apple Music/Spotify)\n• Turn off Do Not Disturb\n\nResult: every morning, your phone briefs you.", type: "code" },
      { title: "Bonus: run silently", text: "Toggle **Ask Before Running** off. Now it runs automatically.", type: "tip" },

      { chapter: "Automation 2 — Arrive/leave home", title: "Location-based", text: "Automation → + → **Arrive** → your home address. Actions:\n\n• Send message to family: \"I'm home\"\n• Connect to home WiFi\n• Set Do Not Disturb on", type: "code" },

      { chapter: "Automation 3 — Night mode", title: "Sleep automation", text: "Automation → + → **Time of Day** → 11:00 PM. Actions:\n\n• Set Low Power Mode ON\n• Turn off WiFi and Bluetooth\n• Enable Do Not Disturb until 7 AM\n• Show \"Good night\" notification", type: "code" },

      { chapter: "Shortcut 4 — Quick note capture", title: "Notes to Obsidian/Notion", text: "New shortcut:\n\n• **Text** action → \"Quick note\"\n• **Ask for Input** → your note\n• **Append to Note** in Obsidian (or use Notion API)\n\nAssign to **Back Tap** (Settings → Accessibility → Touch → Back Tap → Double Tap → your shortcut).", type: "code" },
      { title: "Result", text: "Double-tap the back of your phone → instantly capture a note anywhere.", type: "tip" },

      { chapter: "Shortcut 5 — Share WiFi password", title: "No more typing passwords", text: "New shortcut:\n\n• **Get Text** → your WiFi password\n• **Copy to Clipboard**\n• **Show Notification** → \"Password copied\"\n\nAdd to home screen as an icon.", type: "code" },

      { chapter: "Shortcut 6 — Save all links", title: "Clipboard → Notes", text: "Share sheet shortcut:\n\n• **Receive URLs from Share Sheet**\n• **Append to Note** → \"Reading List\" note\n\nNow: any link → share → \"Save to Reading List\".", type: "code" },

      { chapter: "Shortcut 7 — Split expenses", title: "Tip calculator", text: "• **Ask for Input** (bill amount)\n• **Ask for Input** (number of people)\n• **Calculate** bill / people\n• **Show Result**\n\nAssign Siri phrase: \"Hey Siri, split bill\".", type: "code" },

      { chapter: "Shortcut 8 — Auto backup photos", title: "To Nextcloud/Google Photos", text: "Automation → **When I open Photos app** → run shortcut that uploads new files. Complex but powerful.", type: "read" },
      { title: "Result", text: "8 shortcuts that save you real minutes every day.", type: "read" }
    ]
  },
  repo: { url: "https://www.icloud.com/shortcuts", label: "iCloud Shortcuts Gallery" }
},

// ========== Android ==========
{
  id: "android-debloat", title: "Debloat Your Android (Speed It Up)", category: "Android",
  difficulty: "intermediate", time: "20 min",
  summary: "Remove bloatware without root. Faster phone, longer battery.",
  intro: "Most Android phones come with 20-40 preinstalled apps you'll never use. Most can be removed safely using ADB — no root required.",
  tags: ["android", "performance", "debloat"], platforms: ["android"],
  learnList: [
    "Set up ADB on your computer",
    "List bloatware apps safely",
    "Remove them without breaking the phone",
    "Restore accidentally removed apps"
  ],
  steps: {
    android: [
      { chapter: "⚠️ Before you start", title: "Back up first", text: "Debloating can cause issues if you remove the wrong thing. **Back up your phone** and note what you remove so you can reinstall if needed.", type: "warn" },
      { title: "You need a computer", text: "USB cable + computer with ADB installed. See our **ADB tutorial** if you haven't set it up.", type: "read" },

      { chapter: "Setup", title: "Enable USB debugging", text: "On your phone: Settings → About Phone → tap Build Number 7× → back → System → Developer Options → USB Debugging ON.", type: "code" },
      { title: "Connect phone to PC", text: "Plug in USB → phone asks to allow debugging → tap Allow.", type: "try" },
      { title: "Verify connection", text: "From your computer's terminal:", code: "adb devices", output: "List of devices attached\nABCD1234EFGH    device", type: "try" },

      { chapter: "List bloatware", title: "See what's installed", text: "This lists ALL packages. Scroll through — it's long.", code: "adb shell pm list packages", lang: "bash", type: "code" },
      { title: "Filter for bloatware patterns", text: "Look for names like `com.samsung.`, `com.miui.`, `com.facebook.`, etc. These are common targets.", type: "tip" },

      { chapter: "Remove safely", title: "Common safe removals", text: "⚠️ Research each package before removing. Here are commonly safe ones on Samsung/OnePlus/Xiaomi:", code: "# Facebook app (often preinstalled)\nadb shell pm uninstall --user 0 com.facebook.katana\n\n# Bixby (Samsung)\nadb shell pm uninstall --user 0 com.samsung.android.bixby.agent\n\n# Xbox (some devices)\nadb shell pm uninstall --user 0 com.microsoft.xboxone.smartglass\n\n# Duo/Meet if you don't use it\nadb shell pm uninstall --user 0 com.google.android.apps.tachyon", lang: "bash", type: "code" },
      { title: "Note what you remove", text: "Keep a list! You'll want this if you need to restore anything.", type: "warn" },

      { chapter: "Do NOT remove", title: "Leave these alone", text: "Never remove:\n• `com.android.systemui` (breaks UI)\n• `com.android.settings` (breaks settings)\n• `com.android.phone` (breaks calls)\n• Anything you don't recognize as third-party", type: "danger" },

      { chapter: "Restore if needed", title: "Undo a removal", text: "Uninstalls are per-user, so you can restore:", code: "adb shell cmd package install-existing com.facebook.katana", lang: "bash", type: "code" },
      { title: "Factory reset as nuclear option", text: "If something breaks badly, factory reset restores everything. This is why you back up first.", type: "read" },

      { chapter: "Result", title: "Check performance", text: "After removing 20+ bloatware apps, expect:\n• ~15–25% less background CPU usage\n• Faster boot times\n• Better battery life", type: "read" },
      { title: "Done", text: "Your phone is now leaner and faster.", type: "read" }
    ]
  },
  repo: { url: "https://developer.android.com/tools/adb", label: "ADB Docs" }
},

{
  id: "fdroid", title: "F-Droid: The Open-Source App Store", category: "Android",
  difficulty: "beginner", time: "12 min",
  summary: "Thousands of free, open-source, ad-free apps.",
  intro: "F-Droid is an alternative app store that only hosts free and open-source software. No ads, no tracking, no telemetry — and apps you can't get on Play Store.",
  tags: ["android", "fdroid", "open-source"], platforms: ["android"],
  learnList: [
    "Install F-Droid correctly",
    "Find the best open-source apps",
    "Add additional repos for more apps",
    "Auto-update apps safely"
  ],
  steps: {
    android: [
      { chapter: "Install", title: "Download F-Droid", text: "From the official site — avoid mirrors.", code: "https://f-droid.org", type: "code" },
      { title: "Enable installs", text: "Settings → Apps → Special access → Install unknown apps → allow for your browser.", type: "try" },
      { title: "Install and open", text: "Once installed, open F-Droid. It'll check for updates.", type: "read" },

      { chapter: "Essential apps to install", title: "Start with these", text: "• **NewPipe** — YouTube without ads\n• **Termux** — full Linux terminal\n• **Aurora Store** — Play Store without Google account\n• **AntennaPod** — podcast app\n• **OsmAnd~** — offline maps\n• **Fennec** — Firefox without tracking\n• **Bitwarden** — password manager\n• **Element** — Matrix chat", type: "code" },
      { title: "Aegis", text: "2FA authenticator. Open source, encrypted backups.", type: "tip" },
      { title: "VLC", text: "Plays literally any video format.", type: "tip" },
      { title: "Sharik", text: "Share files between phone and PC over WiFi. No internet needed.", type: "tip" },

      { chapter: "Add more repos", title: "Expand beyond default", text: "F-Droid only hosts apps that meet strict criteria. Add these additional repos for more:\n\n• **IzzyOnDroid** — quickly-updated apps\n• **Guardian Project** — privacy/security apps\n• **Bromite** — a Chromium-based browser", type: "code" },
      { title: "How to add a repo", text: "F-Droid → Settings → Repositories → + → paste repo URL. Example for IzzyOnDroid:", code: "https://apt.izzysoft.de/fdroid/repo", type: "code" },

      { chapter: "Auto-update", title: "Enable automatic updates", text: "F-Droid → Settings → Automatic Updates → ON. It checks daily and notifies you of updates.", type: "code" },
      { title: "Permission note", text: "F-Droid needs permission to install apps. This is normal for any app store.", type: "read" },

      { chapter: "Why open source matters", title: "No tracking", text: "Play Store apps can contain trackers, ads, telemetry. F-Droid verifies every app doesn't. Your data stays yours.", type: "read" },
      { title: "Combined with Aurora", text: "Use F-Droid for open-source apps + Aurora Store for Play Store apps you still need. **Complete de-Googling possible.**", type: "tip" },

      { title: "Done", text: "You just unlocked 4,000+ free apps.", type: "read" }
    ]
  },
  repo: { url: "https://f-droid.org", label: "F-Droid" }
},

{
  id: "aurora-store", title: "Aurora Store (Play Store Without Google)", category: "Android",
  difficulty: "beginner", time: "10 min",
  summary: "Download Play Store apps anonymously — no Google account needed.",
  intro: "Aurora Store is an open-source Play Store client. You can install any Play Store app without logging in with your Google account. Great for privacy and for phones without Google services.",
  tags: ["android", "aurora", "privacy"], platforms: ["android"],
  learnList: [
    "Install Aurora Store from F-Droid",
    "Download apps anonymously",
    "Log in with your Google account safely (optional)",
    "Update apps without Play Store"
  ],
  steps: {
    android: [
      { chapter: "Install", title: "Get it from F-Droid", text: "Open F-Droid → search **Aurora Store** → install. Or direct:", code: "https://f-droid.org/packages/com.aurora.store/", type: "code" },
      { title: "Alternative source", text: "Official GitHub releases if F-Droid is outdated.", code: "https://github.com/whyorean/AuroraStore/releases", type: "code" },

      { chapter: "First launch", title: "Choose a session type", text: "You'll see three options:\n\n• **Anonymous** — no login, uses a shared anonymous account\n• **Google** — log in with your real Google account\n• **Session** — use a token from another device\n\n**Anonymous is recommended** for most users.", type: "read" },
      { title: "Pick Anonymous", text: "Tap Anonymous → it fetches a session automatically. Done.", type: "try" },

      { chapter: "Use it", title: "Search and install", text: "The UI looks like Play Store. Search any app → tap Install → apps install via Android's normal installer.", type: "try" },
      { title: "Updates", text: "Aurora shows a badge when apps have updates. Tap to update each one.", type: "code" },
      { title: "Auto-update", text: "Settings → Updates → toggle **Auto-update apps** on. Runs in the background.", type: "tip" },

      { chapter: "Spoofing options", title: "For apps with location restrictions", text: "Aurora can pretend you're in a different country to get region-locked apps:\n\nSettings → Networking → Device spoofing → pick region.", type: "code" },
      { title: "Note about some apps", text: "Apps that check Play Integrity (banking, some games) may not work when installed via Aurora. They require real Google Services.", type: "warn" },

      { chapter: "For de-Googled phones", title: "Perfect for GrapheneOS / LineageOS", text: "If you're running a custom ROM without Google Play, Aurora gives you Play Store access without installing GApps.", type: "read" },
      { title: "Result", text: "Play Store apps, zero Google tracking.", type: "read" }
    ]
  },
  repo: { url: "https://github.com/whyorean/AuroraStore", label: "Aurora Store" }
},

// ========== AI ==========
{
  id: "whisper-local", title: "Transcribe Audio Offline with Whisper", category: "AI",
  difficulty: "intermediate", time: "20 min",
  summary: "OpenAI's Whisper transcribes any audio — offline, free, accurate.",
  intro: "Whisper is OpenAI's open-source speech recognition model. It transcribes audio in 99 languages with impressive accuracy. Runs on your device — no cloud, no API, no cost.",
  tags: ["ai", "whisper", "audio"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Install faster-whisper (the fast version)",
    "Transcribe an audio or video file",
    "Choose the right model size for your hardware",
    "Generate subtitles (SRT) automatically"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Install Python + ffmpeg", text: "Prerequisites.", code: "sudo apt install python3 python3-pip ffmpeg -y", type: "code" },
      { title: "Install faster-whisper", text: "Faster and lighter than the original.", code: "pip install faster-whisper", type: "code" },
      { title: "Optional: whisper.cpp", text: "Even faster, runs on CPU efficiently. Compile from source.", code: "git clone https://github.com/ggerganov/whisper.cpp\ncd whisper.cpp\nmake", lang: "bash", type: "code" },

      { chapter: "Basic transcription", title: "Transcribe any file", text: "Creates a Python script and run it:", code: "from faster_whisper import WhisperModel\n\nmodel = WhisperModel(\"base\", device=\"cpu\")\nsegments, info = model.transcribe(\"audio.mp3\")\n\nfor seg in segments:\n    print(f\"[{seg.start:.1f}s] {seg.text}\")", lang: "python", type: "code" },
      { title: "Or one-liner with whisper CLI", text: "Simpler:", code: "whisper audio.mp3 --model base --output_format txt", type: "code" },
      { title: "Save the output", text: "You'll get audio.txt, audio.srt, audio.vtt — all formats at once.", type: "read" },

      { chapter: "Choose a model size", title: "The size/accuracy tradeoff", text: "• **tiny** — fastest, decent accuracy (~1GB RAM)\n• **base** — good balance (~1GB RAM)\n• **small** — better accuracy (~2GB RAM)\n• **medium** — very good (~5GB RAM)\n• **large** — best, but needs 10GB+ RAM\n\nFor most uses, **small** is the sweet spot.", type: "read" },
      { title: "Auto-language detection", text: "Whisper detects language automatically. For mixed audio, specify with `--language en`.", type: "tip" },

      { chapter: "Generate subtitles", title: "SRT for videos", text: "Perfect for creating subtitles for YouTube videos.", code: "whisper video.mp4 --model small --output_format srt", output: "video.srt created — upload to YouTube.", type: "try" },

      { chapter: "Batch multiple files", title: "Transcribe a folder", text: "Simple Bash loop.", code: "for f in *.mp3; do\n  whisper \"$f\" --model base --output_dir ./transcripts\ndone", lang: "bash", type: "code" },

      { chapter: "Real-time mic", title: "Live transcription (advanced)", text: "Use `whisper-stream` for real-time — captures from your microphone and transcribes as you speak.", code: "pip install whisper-live", type: "code" },

      { title: "Done", text: "You can now transcribe anything, offline, for free.", type: "read" }
    ],
    mac: [
      { chapter: "Setup", title: "Install via Homebrew", text: "Prereqs.", code: "brew install python ffmpeg", type: "code" },
      { title: "Install Whisper", text: "Python package.", code: "pip3 install faster-whisper", type: "code" },
      { chapter: "Use it", title: "Transcribe", text: "Same Python script as Linux, or use the CLI:", code: "whisper audio.mp3 --model base", type: "code" },
      { title: "M-series advantage", text: "M1/M2/M3 chips run 'medium' models easily — much faster than Intel Macs.", type: "tip" }
    ],
    windows: [
      { chapter: "Setup", title: "Install Python + ffmpeg", text: "Python from python.org. ffmpeg via winget.", code: "winget install Gyan.FFmpeg", lang: "powershell", type: "code" },
      { title: "Install Whisper", text: "Python package.", code: "pip install faster-whisper", lang: "powershell", type: "code" },
      { chapter: "Use it", title: "Transcribe", text: "Same script as Linux.", code: "whisper audio.mp3 --model base", lang: "powershell", type: "code" }
    ]
  },
  repo: { url: "https://github.com/SYSTRAN/faster-whisper", label: "faster-whisper" }
},

{
  id: "stable-diffusion", title: "Generate Images with Stable Diffusion", category: "AI",
  difficulty: "advanced", time: "30 min",
  summary: "Create AI art on your own machine — no subscription, no limits.",
  intro: "Stable Diffusion generates images from text prompts. Running it locally means unlimited generations, no content filters, and full privacy. Requires a decent GPU for speed.",
  tags: ["ai", "image-generation", "sd"], platforms: ["linux", "windows", "mac"],
  learnList: [
    "Install Automatic1111 or ComfyUI",
    "Generate your first image",
    "Use negative prompts and CFG scale",
    "Find and install models and LoRAs"
  ],
  steps: {
    linux: [
      { chapter: "Requirements", title: "What you need", text: "• **GPU:** NVIDIA 6GB+ VRAM (best), AMD works with extra setup\n• **RAM:** 16GB+\n• **Storage:** 20GB+ for models\n• **No GPU?** It works on CPU but is 20x slower.", type: "read" },
      { title: "NVIDIA driver + CUDA", text: "Verify your GPU is set up.", code: "nvidia-smi", output: "Should show your GPU model and CUDA version.", type: "try" },

      { chapter: "Install Automatic1111 (easiest)", title: "Clone the repo", text: "The most popular SD WebUI.", code: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui\ncd stable-diffusion-webui", type: "code" },
      { title: "Run the installer", text: "Downloads Python, models, and dependencies automatically.", code: "./webui.sh", output: "Running on local URL: http://127.0.0.1:7860", type: "code" },
      { title: "Open the UI", text: "Visit http://127.0.0.1:7860 in your browser. That's your control panel.", type: "try" },

      { chapter: "First generation", title: "Write a prompt", text: "In the **txt2img** tab, paste:\n\n```\na photo of a cyberpunk city at night, neon lights, raining, cinematic\n```\n\nClick **Generate**. Wait 30–60 seconds for your first image.", type: "code" },
      { title: "Save what works", text: "Every image has metadata. Drag any downloaded SD image into the UI and it loads the exact prompt + settings used.", type: "tip" },

      { chapter: "Better prompts", title: "Structure", text: "**Positive prompt:** what you want\n**Negative prompt:** what to avoid\n\nCommon negative prompt:", code: "ugly, blurry, low quality, deformed, extra fingers, watermark", type: "code" },
      { title: "Key settings", text: "• **Steps:** 20–30 (more = slower but slightly better)\n• **CFG Scale:** 7 (higher = sticks to prompt)\n• **Sampler:** DPM++ 2M Karras (good default)\n• **Size:** 512×512 or 512×768", type: "read" },

      { chapter: "Get models", title: "Where to find them", text: "The base model is outdated. Get modern models:\n\n• **civitai.com** — community models, LoRAs, styles\n• **huggingface.co** — official SD models\n\nBest beginner models: **SDXL**, **Juggernaut XL**, **Realistic Vision**", type: "code" },
      { title: "Where to place models", text: "Drop `.safetensors` files into `models/Stable-diffusion/`. Click the refresh icon next to the model dropdown.", type: "read" },

      { chapter: "LoRAs (styles)", title: "Small models that change style", text: "LoRAs are 100MB add-ons that change the style. Place in `models/Lora/`. Reference in prompt like:\n\n```\n<lora:cyberpunk_style:0.8>\n```", type: "code" },

      { chapter: "ComfyUI (advanced)", title: "Node-based alternative", text: "More powerful, steeper learning curve. Node graph interface where you build the generation pipeline visually.", code: "git clone https://github.com/comfyanonymous/ComfyUI\ncd ComfyUI\npython main.py", type: "code" },

      { title: "Done", text: "You now have a personal AI image generator.", type: "read" }
    ],
    windows: [
      { chapter: "Requirements", title: "What you need", text: "• NVIDIA GPU (6GB+ VRAM)\n• 16GB+ RAM\n• 20GB+ free storage", type: "read" },
      { chapter: "Install", title: "Clone Automatic1111", text: "Install Git first, then:", code: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui\ncd stable-diffusion-webui", lang: "powershell", type: "code" },
      { title: "Run installer", text: "Double-click `webui-user.bat` or run:", code: ".\\webui-user.bat", lang: "powershell", type: "code" },
      { title: "Open UI", text: "Visit `http://127.0.0.1:7860` in your browser.", type: "try" },
      { chapter: "Generate", title: "Try it", text: "Type a prompt in txt2img → Generate. Same as Linux.", type: "read" },
      { title: "Better: use Pinokio", text: "GUI installer that handles everything. Search \"Pinokio Stable Diffusion\".", type: "tip" }
    ],
    mac: [
      { chapter: "Reality check", title: "Apple Silicon works but slowly", text: "M-series Macs can run SD via **Draw Things** or **DiffusionBee** — much slower than NVIDIA GPUs but works for casual use.", type: "read" },
      { chapter: "Easiest option", title: "Draw Things", text: "Free Mac app. Runs models locally on Apple Silicon. Zero setup.", code: "https://drawthings.ai", type: "code" },
      { title: "Or DiffusionBee", text: "Alternative if Draw Things doesn't work.", code: "https://diffusionbee.com", type: "code" },
      { chapter: "Advanced", title: "Automatic1111 on Mac", text: "Works but slower.", code: "git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui\ncd stable-diffusion-webui\n./webui.sh", type: "code" }
    ]
  },
  repo: { url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui", label: "Stable Diffusion WebUI" }
},

{
  id: "llm-rag", title: "Chat with Your Own Documents (RAG)", category: "AI",
  difficulty: "advanced", time: "30 min",
  summary: "Feed your PDFs to an AI and ask questions about them.",
  intro: "RAG (Retrieval-Augmented Generation) lets you chat with your documents. Ask questions about a PDF, manual, or codebase — the AI answers using YOUR data, not general knowledge.",
  tags: ["ai", "rag", "llm"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Understand what RAG actually is",
    "Set up a local RAG system",
    "Load PDFs, text files, or codebases",
    "Ask questions and get grounded answers"
  ],
  steps: {
    linux: [
      { chapter: "Concept", title: "What RAG does", text: "Normal AI: answers from training data (can hallucinate).\n**RAG AI:** searches YOUR documents first, then answers using them. Every answer has a source.", type: "read" },

      { chapter: "Install", title: "Easiest tool: AnythingLLM", text: "Desktop app that handles everything — documents, embeddings, chat, memory.", code: "https://anythingllm.com", type: "code" },
      { title: "Alternative: PrivateGPT", text: "Command-line but powerful. Runs fully offline.", code: "git clone https://github.com/zylon-ai/private-gpt\ncd private-gpt\npip install -r requirements.txt", type: "code" },

      { chapter: "Setup with AnythingLLM", title: "Pick a model", text: "AnythingLLM works with:\n• **Ollama** (local models, free)\n• **OpenAI API** (paid, but better quality)\n• **Gemini API** (has free tier)\n\nFor privacy: Ollama. For quality: OpenAI/Gemini.", type: "read" },
      { title: "Choose embeddings", text: "Embeddings convert your docs into vectors. Use the same provider as your chat model for simplicity.", type: "code" },

      { chapter: "Load documents", title: "Drag and drop", text: "Create a workspace → drag PDFs/txt/md files in. AnythingLLM ingests them automatically.", type: "try" },
      { title: "Supported formats", text: "PDF, DOCX, TXT, MD, HTML, code files, EPUB — even webpages.", type: "read" },

      { chapter: "Chat", title: "Ask questions", text: "Try:\n• \"Summarize chapter 3\"\n• \"What does the document say about pricing?\"\n• \"Give me the exact quote about refund policy\"\n\nThe AI cites which document each answer comes from.", type: "try" },

      { chapter: "Advanced: Custom code", title: "For developers", text: "Build your own RAG with Python.", code: "from langchain_community.document_loaders import PyPDFLoader\nfrom langchain.text_splitter import RecursiveCharacterTextSplitter\nfrom langchain_community.vectorstores import Chroma\nfrom langchain_community.embeddings import OllamaEmbeddings\n\nloader = PyPDFLoader(\"document.pdf\")\ndocs = loader.load()\n\ntext_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)\nchunks = text_splitter.split_documents(docs)\n\nembeddings = OllamaEmbeddings(model=\"nomic-embed-text\")\nvectorstore = Chroma.from_documents(chunks, embeddings)\n\nretriever = vectorstore.as_retriever()\nresults = retriever.invoke(\"What does it say about refunds?\")\nfor r in results:\n    print(r.page_content)", lang: "python", type: "code" },

      { chapter: "Use cases", title: "Real applications", text: "• **Personal notes** — search Obsidian vault\n• **Legal docs** — query contracts\n• **Study material** — ask questions about textbooks\n• **Code** — chat with a codebase\n• **Manuals** — find info in tech docs instantly", type: "read" },
      { title: "Done", text: "You now have AI that knows YOUR documents.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "AnythingLLM for Mac", text: "Download the Mac app.", code: "https://anythingllm.com", type: "code" },
      { title: "Use with Ollama", text: "Install Ollama first (see our Ollama tutorial), then point AnythingLLM to it in settings.", type: "read" },
      { chapter: "Use it", title: "Same workflow", text: "Drag documents, ask questions. Native Mac app.", type: "try" }
    ],
    windows: [
      { chapter: "Install", title: "AnythingLLM for Windows", text: "Download and install.", code: "https://anythingllm.com", type: "code" },
      { title: "Pair with Ollama", text: "Set Ollama URL to `http://localhost:11434` in AnythingLLM settings.", type: "code" },
      { chapter: "Use it", title: "Drag and chat", text: "Same workflow as other platforms.", type: "try" }
    ]
  },
  repo: { url: "https://github.com/Mintplex-Labs/anything-llm", label: "AnythingLLM" }
},

{
  id: "comfyui", title: "ComfyUI: Node-Based AI Image Generation", category: "AI",
  difficulty: "advanced", time: "35 min",
  summary: "The power-user's Stable Diffusion tool — visual programming for AI art.",
  intro: "ComfyUI uses a node graph instead of a form. It's more powerful than Automatic1111 — you can build complex workflows, upscale, animate, and reuse node graphs.",
  tags: ["ai", "comfyui", "image-generation"], platforms: ["linux", "windows", "mac"],
  learnList: [
    "Install ComfyUI",
    "Understand the node graph",
    "Run a basic txt2img workflow",
    "Import community workflows"
  ],
  steps: {
    linux: [
      { chapter: "Why ComfyUI", title: "vs Automatic1111", text: "• **More powerful** — build custom pipelines\n• **Faster** — better VRAM usage\n• **Shareable** — workflows as JSON files\n• **Animations** — AnimateDiff, SVD support\n• **Steeper curve** — nodes take learning", type: "read" },
      { title: "Try both", text: "If you're new to SD, start with Automatic1111. ComfyUI is for when you want serious control.", type: "tip" },

      { chapter: "Install", title: "Clone + install", text: "Simple install.", code: "git clone https://github.com/comfyanonymous/ComfyUI\ncd ComfyUI\npip install -r requirements.txt", type: "code" },
      { title: "Download a model", text: "Place a `.safetensors` model in `models/checkpoints/`. Get one from CivitAI.", code: "https://civitai.com", type: "code" },
      { title: "Run it", text: "Starts a local server.", code: "python main.py", output: "To see the GUI go to: http://127.0.0.1:8188", type: "code" },

      { chapter: "The node graph", title: "What you see", text: "The default workflow is loaded. You'll see nodes:\n• **Load Checkpoint** — your model\n• **CLIP Text Encode (Prompt)** ×2 — positive/negative\n• **KSampler** — the generation engine\n• **VAE Decode** — converts to image\n• **Save Image** — outputs the file", type: "read" },
      { title: "How it works", text: "Data flows left-to-right through connected nodes. Output of one node is input to the next. Everything is customizable.", type: "tip" },

      { chapter: "First generation", title: "Edit the prompt", text: "Find the top **CLIP Text Encode** node — type your prompt. Bottom one is negative. Click **Queue Prompt** (or Ctrl+Enter).", code: "A photo of a cat wearing sunglasses, sunny day, high detail", type: "code" },
      { title: "Watch the progress", text: "A progress bar appears at the top. First generation takes longer (model loading).", type: "try" },
      { title: "Save the image", text: "Generated images appear in `output/` folder. The node preview also shows it.", type: "code" },

      { chapter: "Import workflows", title: "Community workflows", text: "The killer feature. Download a workflow JSON from anyone, drag it onto the ComfyUI window, and it loads the entire graph.\n\nWhere to find:\n• **comfyworkflows.com**\n• **CivitAI** — many models include workflows\n• **Reddit r/comfyui**", type: "code" },
      { title: "Drag and drop", text: "Just drop a .json or .png (with workflow embedded) onto the UI. Everything loads.", type: "try" },

      { chapter: "Advanced", title: "Upscaling workflow", text: "Add an **Upscale Image (using Model)** node after VAE Decode. Upscales 2x. Then another Save Image node.", type: "code" },
      { title: "AnimateDiff", text: "Add motion to your images. Complex setup — search \"AnimateDiff ComfyUI tutorial\".", type: "read" },

      { title: "Done", text: "You're now using the most powerful local SD tool.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Portable ComfyUI", text: "Easiest way — download the portable build from GitHub releases.", code: "https://github.com/comfyanonymous/ComfyUI/releases", type: "code" },
      { title: "Extract and run", text: "Extract anywhere → double-click `run_nvidia_gpu.bat`. First launch downloads dependencies.", type: "read" },
      { chapter: "Use it", title: "Open the UI", text: "Browser opens automatically at http://127.0.0.1:8188.", type: "try" },
      { title: "Same workflow", text: "Identical to Linux from here. Edit prompt → Queue Prompt.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "Clone + run", text: "Works on Apple Silicon.", code: "git clone https://github.com/comfyanonymous/ComfyUI\ncd ComfyUI\npip3 install -r requirements.txt\npython3 main.py", type: "code" },
      { title: "Slower than NVIDIA", text: "M-series chips run ComfyUI but noticeably slower than NVIDIA GPUs. Fine for occasional use.", type: "warn" },
      { chapter: "Alternative", title: "Draw Things", text: "Native Mac/iOS app that runs SD and some ComfyUI-like workflows. Easier than full ComfyUI on Mac.", code: "https://drawthings.ai", type: "code" }
    ]
  },
  repo: { url: "https://github.com/comfyanonymous/ComfyUI", label: "ComfyUI" }
       }, 

// ========== PROGRAMMING ==========
{
  id: "python-basics", title: "Python in 30 Minutes", category: "Programming",
  difficulty: "beginner", time: "30 min",
  summary: "Learn Python by running real code — no install needed to start.",
  intro: "Python is the most popular beginner language. It's readable, powerful, and used for AI, web, automation, and data. This tutorial gets you writing real code fast.",
  tags: ["python", "coding", "beginner"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Run Python without installing anything",
    "Variables, strings, numbers",
    "Lists, dictionaries, loops",
    "Functions and conditionals",
    "Write a real program"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Check if Python is installed", text: "Most Linux distros have it preinstalled.", code: "python3 --version", output: "Python 3.12.3", type: "try" },
      { title: "Open the REPL", text: "Type `python3` and press Enter. You'll get a `>>>` prompt. Every line you type runs immediately.", code: "python3", type: "code" },
      { title: "Try your first line", text: "Type this and press Enter:", code: "print(\"Hello, world!\")", output: "Hello, world!", type: "try" },
      { title: "Exit", text: "Type `exit()` or press Ctrl+D.", type: "code" },

      { chapter: "Variables", title: "Store data", text: "Unlike JavaScript, Python doesn't need `let`/`const`.", code: "name = \"Neo\"\nage = 42\nprint(name, age)", output: "Neo 42", type: "try" },
      { title: "Numbers + math", text: "Python handles all the math.", code: "print(5 + 3)\nprint(10 / 3)\nprint(10 // 3)\nprint(2 ** 10)", output: "8\n3.333...\n3\n1024", type: "try" },

      { chapter: "Lists and loops", title: "Lists", text: "Python calls them lists. Similar to JS arrays.", code: "fruits = [\"apple\", \"banana\", \"cherry\"]\nprint(fruits[0])\nprint(len(fruits))", output: "apple\n3", type: "try" },
      { title: "Loops", text: "Very clean syntax.", code: "for f in fruits:\n    print(f)", output: "apple\nbanana\ncherry", type: "try" },

      { chapter: "Conditionals", title: "If / else", text: "Python uses indentation, not `{ }`.", code: "age = 20\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")", output: "Adult", type: "try" },
      { title: "Multiple conditions", text: "elif means else-if.", code: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelse:\n    print(\"C\")", output: "B", type: "try" },

      { chapter: "Functions", title: "Define a function", text: "`def` starts a function definition.", code: "def greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Neo\"))", output: "Hello, Neo!", type: "try" },

      { chapter: "Dictionaries", title: "Key-value pairs", text: "Like JavaScript objects.", code: "user = {\"name\": \"Neo\", \"age\": 42}\nprint(user[\"name\"])\nuser[\"email\"] = \"neo@example.com\"\nprint(user)", output: "Neo\n{'name': 'Neo', 'age': 42, 'email': 'neo@example.com'}", type: "try" },

      { chapter: "Real program", title: "Save to a file", text: "Create `hello.py` with this content:", code: "name = input(\"What's your name? \")\nprint(f\"Hello, {name}!\")\nage = int(input(\"How old are you? \"))\nprint(f\"You'll be {age + 1} next year.\")", lang: "python", type: "code" },
      { title: "Run it", text: "Back in terminal:", code: "python3 hello.py", output: "What's your name? Neo\nHello, Neo!\nHow old are you? 20\nYou'll be 21 next year.", type: "try" },

      { chapter: "Next steps", title: "Where to go", text: "• Read: **Python Crash Course** by Eric Matthes\n• Practice: **exercism.org/tracks/python**\n• Project: build a to-do list CLI\n• Then take our **Python Virtual Environments** tutorial", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Install Python", text: "In Termux:", code: "pkg install python -y", type: "code" },
      { title: "Open the REPL", text: "Type `python` and Enter. `>>>` prompt appears.", code: "python", type: "code" },
      { title: "First line", text: "Try it:", code: "print(\"Hello from Android!\")", output: "Hello from Android!", type: "try" },
      { chapter: "Core concepts", title: "Variables", text: "Simple.", code: "name = \"Neo\"\nage = 20\nprint(name, age)", output: "Neo 20", type: "try" },
      { title: "Lists + loops", text: "Compact syntax.", code: "for i in [1,2,3,4,5]:\n    print(i * 2)", output: "2\n4\n6\n8\n10", type: "try" },
      { chapter: "Real script", title: "Create a file", text: "In Termux:", code: "nano hello.py\n# Paste: print(\"Hello!\")\n# Ctrl+O, Enter, Ctrl+X to save", type: "code" },
      { title: "Run it", text: "Execute the script.", code: "python hello.py", output: "Hello!", type: "try" }
    ],
    mac: [
      { chapter: "Setup", title: "Install Python", text: "Via Homebrew or download from python.org.", code: "brew install python", type: "code" },
      { title: "Test", text: "Verify installation.", code: "python3 --version", output: "Python 3.12.3", type: "try" },
      { chapter: "Core concepts", title: "Same as Linux", text: "Open the REPL and follow the Linux tab steps — identical on macOS.", code: "python3", type: "code" },
      { title: "Save scripts as files", text: "Create `.py` files with VS Code or any editor, run with `python3 file.py`.", type: "tip" }
    ],
    windows: [
      { chapter: "Setup", title: "Install Python", text: "Via winget.", code: "winget install Python.Python.3.12", lang: "powershell", type: "code" },
      { title: "Verify", text: "Open a new PowerShell window (important — must be new).", code: "python --version", lang: "powershell", output: "Python 3.12.3", type: "try" },
      { chapter: "Core concepts", title: "REPL", text: "Open the Python prompt.", code: "python", lang: "powershell", type: "code" },
      { title: "Follow Linux steps", text: "Everything is identical from here.", type: "read" }
    ],
    ios: [
      { chapter: "Setup", title: "Install a-Shell", text: "Free app with Python 3 built in.", code: "https://apps.apple.com/app/a-shell/id1473805438", type: "code" },
      { title: "Open Python", text: "In a-Shell, type:", code: "python3", type: "code" },
      { chapter: "Core concepts", title: "Same syntax", text: "Follow the Linux tab — Python is Python everywhere.", code: "print(\"Hello from iOS!\")", output: "Hello from iOS!", type: "try" },
      { title: "Save scripts", text: "In a-Shell:", code: "nano hello.py\npython3 hello.py", type: "code" }
    ]
  },
  repo: { url: "https://docs.python.org/3/tutorial/", label: "Python Official Tutorial" }
},

{
  id: "cli-basics", title: "Command Line for Absolute Beginners", category: "Programming",
  difficulty: "beginner", time: "20 min",
  summary: "The terminal isn't scary. Learn the 20 commands that cover 95% of daily use.",
  intro: "The command line is faster than clicking for many tasks. This tutorial teaches the 20 commands you'll use every day — no Linux knowledge required.",
  tags: ["cli", "terminal", "shell"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Navigate folders without clicking",
    "Create, move, and delete files",
    "Search inside files",
    "Chain commands with pipes"
  ],
  steps: {
    linux: [
      { chapter: "Orientation", title: "Where am I?", text: "`pwd` = print working directory.", code: "pwd", output: "/home/neo", type: "try" },
      { title: "What's here?", text: "`ls` = list. Options for more detail.", code: "ls\nls -la", output: "Documents  Downloads  Pictures\n\ndrwxr-xr-x 5 neo neo 4096 Oct  7 12:00 Documents", type: "try" },
      { title: "Move around", text: "`cd` = change directory.", code: "cd Documents\ncd ..\ncd ~\ncd -", type: "code" },

      { chapter: "Files", title: "Create", text: "`touch` makes empty files, `mkdir` makes folders.", code: "touch notes.txt\nmkdir myproject\nmkdir -p a/b/c", type: "code" },
      { title: "Copy, move, delete", text: "The three essentials.", code: "cp notes.txt backup.txt\nmv notes.txt renamed.txt\nrm renamed.txt\nrm -r myproject", type: "code" },
      { title: "⚠️ rm is permanent", text: "`rm` doesn't use a trash can. Be careful.", note: { type: "danger", text: "`rm -rf /` will destroy your system. Never run it." }, type: "warn" },

      { chapter: "Reading files", title: "View contents", text: "Three ways, different use cases.", code: "cat file.txt        # whole file\nless file.txt       # scrollable (q to quit)\nhead -20 file.txt   # first 20 lines\ntail -20 file.txt   # last 20 lines", type: "code" },
      { title: "Search inside files", text: "`grep` finds text patterns.", code: "grep \"error\" log.txt\ngrep -r \"TODO\" ~/projects", output: "error on line 42\n...", type: "try" },

      { chapter: "Pipes and redirection", title: "Chain commands", text: "`|` sends output of one command into another.", code: "ls -la | grep \".txt\"\ncat log.txt | grep error | head -5", type: "code" },
      { title: "Save output", text: "`>` writes, `>>` appends.", code: "ls > filelist.txt\necho \"more text\" >> filelist.txt", type: "code" },

      { chapter: "Finding things", title: "Find files by name", text: "`find` searches the filesystem.", code: "find . -name \"*.py\"\nfind ~ -type f -name \"notes*\"", type: "code" },
      { title: "Which command?", text: "Find where a command lives.", code: "which python3\nwhich git", output: "/usr/bin/python3\n/usr/bin/git", type: "try" },

      { chapter: "Shortcuts", title: "Save hours", text: "• **Tab** — autocomplete (use constantly)\n• **↑ / ↓** — command history\n• **Ctrl + C** — kill running command\n• **Ctrl + L** — clear screen\n• **Ctrl + R** — search history\n• **Ctrl + A** — jump to line start\n• **Ctrl + E** — jump to end", type: "read" },

      { chapter: "Putting it together", title: "Real workflow", text: "Find all your Python files, show their size, sort by largest.", code: "find ~ -name \"*.py\" -exec ls -lh {} \\; | sort -k5 -h -r | head -10", type: "code" },

      { title: "You know the CLI", text: "These 20 commands cover 95% of daily use. The rest you'll pick up as needed.", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Install Termux", text: "From F-Droid — not Play Store.", type: "read" },
      { title: "Same commands", text: "Termux uses the same commands as Linux. Follow the Linux tab.", type: "read" },
      { title: "First commands", text: "Try these:", code: "pwd\nls\ncd ~", type: "try" },
      { chapter: "Phone-specific", title: "Access storage", text: "After `termux-setup-storage`, your phone files are accessible.", code: "ls ~/storage\ncd ~/storage/downloads", type: "code" },
      { title: "Rest is identical", text: "Everything from the Linux tab works exactly the same in Termux.", type: "tip" }
    ],
    mac: [
      { chapter: "Setup", title: "Open Terminal", text: "⌘ + Space → type 'Terminal' → Enter.", type: "read" },
      { title: "Same commands", text: "macOS is Unix-based, so all Linux commands work — with two differences noted below.", type: "read" },
      { chapter: "macOS quirks", title: "`ls` colors", text: "macOS `ls` doesn't colorize by default. Add this to `~/.zshrc`:", code: "echo 'export CLICOLOR=1' >> ~/.zshrc\necho 'alias ls=\"ls -G\"' >> ~/.zshrc", type: "code" },
      { title: "Homebrew for missing tools", text: "macOS doesn't include `tree`, `wget`, etc. Install via Homebrew.", code: "brew install tree wget coreutils", type: "code" },
      { title: "Follow Linux steps", text: "The rest is the same.", type: "read" }
    ],
    windows: [
      { chapter: "Setup", title: "Option 1: WSL (recommended)", text: "Install WSL2 first (see our WSL2 tutorial). Then everything from the Linux tab works inside Ubuntu.", type: "read" },
      { title: "Option 2: PowerShell", text: "PowerShell works but commands differ. Common equivalents:\n\n• `ls` — same\n• `cd` — same\n• `cat` → `cat` (works in PS 7+)\n• `rm` → `Remove-Item`\n• `cp` → `Copy-Item`\n• `mv` → `Move-Item`", type: "code" },
      { title: "Best experience", text: "Install WSL2 → use Ubuntu terminal → everything from Linux tab works.", type: "tip" }
    ]
  },
  repo: { url: "https://missing.csail.mit.edu/", label: "MIT Missing Semester" }
},

{
  id: "regex", title: "Regex in 20 Minutes", category: "Programming",
  difficulty: "intermediate", time: "20 min",
  summary: "Regular expressions look scary. They're not. Here's the whole thing.",
  intro: "Regex matches text patterns. It's used everywhere — search, validation, find/replace, scraping. You don't need to memorize it — just understand the building blocks.",
  tags: ["regex", "programming", "text"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Match single characters and patterns",
    "Use quantifiers and anchors",
    "Capture groups",
    "Test regex online"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Test online", text: "Fastest way to learn: regexr.com or regex101.com. Paste text on top, type regex below — matches highlight live.", code: "https://regex101.com", type: "code" },

      { chapter: "Basics", title: "Literal match", text: "Simplest regex is just text.", code: "cat", output: "Matches: \"cat\", \"catch\", \"wildcat\"", type: "try" },
      { title: "Special characters", text: "• `.` — any single character\n• `\\d` — any digit (0-9)\n• `\\w` — any word character (a-z, A-Z, 0-9, _)\n• `\\s` — any whitespace (space, tab, newline)", code: "\\d\\d\\d", output: "Matches: \"123\", \"456\", \"999\"", type: "code" },

      { chapter: "Character classes", title: "Set of characters", text: "Square brackets = one of these.", code: "[aeiou]         # any vowel\n[a-z]           # any lowercase letter\n[a-zA-Z0-9]     # any letter or digit\n[^abc]          # any character EXCEPT a, b, c", type: "code" },

      { chapter: "Quantifiers", title: "How many times?", text: "• `+` — one or more\n• `*` — zero or more\n• `?` — optional (zero or one)\n• `{3}` — exactly 3\n• `{3,5}` — 3 to 5\n• `{3,}` — 3 or more", code: "\\d{3}-\\d{4}    # matches: 555-1234\n[a-z]+          # matches: hello, world, cat", type: "code" },

      { chapter: "Anchors", title: "Start and end", text: "• `^` — start of string\n• `$` — end of string\n• `\\b` — word boundary", code: "^Hello          # string starts with Hello\nworld$          # string ends with world\n\\bcat\\b        # the whole word 'cat', not 'catch'", type: "code" },

      { chapter: "Groups and alternation", title: "Capture groups", text: "Parentheses capture matched parts.", code: "(\\d{4})-(\\d{2})-(\\d{2})", output: "For '2026-10-07':\nGroup 1: 2026\nGroup 2: 10\nGroup 3: 07", type: "try" },
      { title: "Alternation (OR)", text: "Pipe = OR.", code: "cat|dog|bird", output: "Matches any of: cat, dog, bird", type: "code" },

      { chapter: "Real patterns", title: "Email", text: "Common validation regex.", code: "^[\\w.-]+@[\\w.-]+\\.\\w+$", output: "Matches: user@example.com\nRejects: not-an-email", type: "code" },
      { title: "Phone (Nigerian)", text: "Nigerian mobile numbers.", code: "^(\\+234|0)[789]\\d{9}$", output: "Matches: +2348012345678, 08012345678", type: "code" },
      { title: "URL", text: "Basic URL validation.", code: "https?://[\\w.-]+(?:\\.[\\w]+)+[\\w.,@?^=%&:/~+#-]*", type: "code" },

      { chapter: "Practical usage", title: "In the shell", text: "Find all .txt files containing an email.", code: "grep -E \"[\\w.-]+@[\\w.-]+\" *.txt", type: "code" },
      { title: "In JavaScript", text: "Test a pattern.", code: "const pattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;\nconsole.log(pattern.test(\"user@example.com\"));  // true", lang: "javascript", type: "code" },
      { title: "In Python", text: "Same pattern, Python syntax.", code: "import re\npattern = r\"^[\\w.-]+@[\\w.-]+\\.\\w+$\"\nprint(re.match(pattern, \"user@example.com\"))", lang: "python", type: "code" },

      { title: "Done", text: "You now understand regex. Practice with regex101.com daily — you'll be fluent in a week.", type: "read" }
    ],
    android: [
      { chapter: "Test online", title: "Use regex101", text: "Open in Kiwi Browser.", code: "https://regex101.com", type: "code" },
      { chapter: "Same syntax", title: "Learn the concepts", text: "Everything from the Linux tab applies. Follow it, testing in the browser.", type: "read" },
      { chapter: "Use in Termux", title: "grep with regex", text: "Search files with patterns.", code: "pkg install grep -y\ngrep -E \"\\d{3}-\\d{4}\" file.txt", type: "code" },
      { title: "Use in Python", text: "Termux has Python.", code: "pkg install python -y\npython3\n>>> import re\n>>> re.findall(r\"\\d+\", \"Order 42 has 7 items\")\n['42', '7']", type: "code" }
    ],
    mac: [
      { chapter: "Learn", title: "regex101.com", text: "Same as everywhere.", code: "https://regex101.com", type: "code" },
      { title: "macOS grep quirk", text: "macOS `grep` needs `-E` for extended regex, or use `egrep`.", code: "grep -E \"pattern\" file.txt", type: "code" },
      { title: "Follow Linux", text: "Rest is identical.", type: "read" }
    ],
    windows: [
      { chapter: "Learn", title: "regex101.com in browser", text: "Same site.", code: "https://regex101.com", type: "code" },
      { title: "PowerShell regex", text: "PowerShell has native regex support.", code: "\"user@example.com\" -match \"^[\\w.-]+@[\\w.-]+\\.\\w+$\"", lang: "powershell", type: "code" },
      { title: "Install ripgrep", text: "Better than grep on Windows.", code: "winget install BurntSushi.ripgrep.MSVC", lang: "powershell", type: "code" }
    ]
  },
  repo: { url: "https://regex101.com", label: "regex101 (practice tool)" }
},

{
  id: "css-layout", title: "CSS Flexbox & Grid in 25 Minutes", category: "Programming",
  difficulty: "beginner", time: "25 min",
  summary: "The two layout systems that replaced all the hacks.",
  intro: "Flexbox handles one-direction layouts (rows OR columns). Grid handles two-direction layouts. Together they solve 99% of layout problems — no more floats or tables.",
  tags: ["css", "web", "layout"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Center anything with Flexbox",
    "Build rows and columns",
    "Create 2D layouts with Grid",
    "Combine both for real pages"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Create an HTML file", text: "We'll test everything in the browser. Create index.html:", code: "<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* we add CSS here */\n</style>\n</head>\n<body>\n  <div class=\"container\">\n    <div>1</div>\n    <div>2</div>\n    <div>3</div>\n  </div>\n</body>\n</html>", lang: "html", type: "code" },

      { chapter: "Flexbox basics", title: "Turn flex on", text: "Add this inside the style tag. Container becomes a flex row.", code: ".container {\n  display: flex;\n  gap: 10px;\n}\n.container > div {\n  background: #333;\n  color: white;\n  padding: 20px;\n  font-family: sans-serif;\n}", lang: "css", type: "code" },
      { title: "Center everything", text: "The most-used flex pattern: perfect centering.", code: "body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  margin: 0;\n}", lang: "css", type: "code" },

      { chapter: "Flex direction", title: "Rows vs columns", text: "`flex-direction` decides the main axis.", code: "flex-direction: row;      /* default: horizontal */\nflex-direction: column;   /* vertical */\nflex-direction: row-reverse;\nflex-direction: column-reverse;", type: "code" },

      { chapter: "Justify and align", title: "Along the main axis", text: "`justify-content` distributes along main axis. `align-items` along the cross axis.", code: "justify-content: flex-start;    /* default */\njustify-content: center;\njustify-content: space-between;  /* gap in middle */\njustify-content: space-around;\njustify-content: space-evenly;\n\nalign-items: stretch;    /* default */\nalign-items: center;\nalign-items: flex-start;\nalign-items: flex-end;", type: "code" },

      { chapter: "Flex sizing", title: "Make items grow/shrink", text: "Control how items fill space.", code: ".container > div {\n  flex: 1;     /* all share space equally */\n}\n\n/* Or specific: */\n.item-1 { flex: 1; }    /* 1 part */\n.item-2 { flex: 2; }    /* 2 parts — twice as wide */", lang: "css", type: "code" },

      { chapter: "Grid basics", title: "Turn grid on", text: "CSS Grid is 2D — rows AND columns.", code: ".container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n/* 3 equal columns */", lang: "css", type: "code" },
      { title: "Custom column sizes", text: "Mix units as needed.", code: "grid-template-columns: 200px 1fr 1fr;\n/* sidebar 200px, two equal columns */\n\ngrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n/* Responsive: fits as many 200px+ columns as possible */", lang: "css", type: "code" },

      { chapter: "Grid rows", title: "Explicit rows", text: "Control rows too.", code: "grid-template-rows: 100px 1fr 50px;\n/* header 100px, content fills, footer 50px */", lang: "css", type: "code" },
      { title: "Span cells", text: "Make an item span multiple columns/rows.", code: ".hero {\n  grid-column: span 2;   /* spans 2 columns */\n  grid-row: span 2;      /* spans 2 rows */\n}", lang: "css", type: "code" },

      { chapter: "Real layout", title: "Combined example", text: "Header + sidebar + main + footer, all responsive.", code: "body {\n  display: grid;\n  grid-template-rows: 60px 1fr 40px;\n  grid-template-columns: 200px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  height: 100vh;\n  margin: 0;\n}\n\nheader { grid-area: header; background: #222; color: white; }\naside  { grid-area: sidebar; background: #333; }\nmain   { grid-area: main; padding: 20px; }\nfooter { grid-area: footer; background: #222; color: white; }", lang: "css", type: "code" },

      { chapter: "Which to use?", title: "Rule of thumb", text: "• **Flexbox** — one axis. Navigation bars, buttons in a row, centered content.\n• **Grid** — two axes. Page layouts, image galleries, card grids.\n• **Both** — often together: Grid for page structure, Flexbox inside components.", type: "read" },

      { title: "Learn more", text: "Visual guides:\n• **flexboxfroggy.com** — game\n• **cssgridgarden.com** — game\n• **flexbox.malven.co** — cheatsheet", type: "tip" }
    ],
    android: [
      { chapter: "Setup", title: "Use Acode", text: "Create index.html in Acode. Or use Kiwi Browser → DevTools → Elements to experiment live on any website.", type: "read" },
      { chapter: "Learn interactively", title: "Flexbox Froggy", text: "A game that teaches flexbox. Open in Chrome.", code: "https://flexboxfroggy.com", type: "code" },
      { title: "Grid Garden", text: "Same for CSS Grid.", code: "https://cssgridgarden.com", type: "code" },
      { chapter: "Playground", title: "Try it live", text: "In Kiwi Browser → any site → DevTools → Elements → click an element → edit its style live. Watch flexbox/grid react instantly.", type: "tip" }
    ],
    mac: [
      { chapter: "Setup", title: "VS Code + Live Server", text: "Install the Live Server extension. Right-click index.html → Open with Live Server. Auto-reloads on save.", type: "read" },
      { chapter: "Learn", title: "Follow Linux tab", text: "Everything applies. Use VS Code's built-in CSS IntelliSense for autocomplete.", type: "read" },
      { title: "Bonus: DevTools Grid inspector", text: "Firefox has the best Grid inspector. Chrome has 'Layout' tab in DevTools showing all grids.", type: "tip" }
    ],
    windows: [
      { chapter: "Setup", title: "VS Code + Live Server", text: "Same as Mac. Live Server extension + open with Live Server.", type: "read" },
      { chapter: "Learn", title: "Follow Linux tab", text: "Identical.", type: "read" },
      { title: "Chrome Grid Inspector", text: "DevTools → Elements → Layout tab. Shows every grid visually.", type: "tip" }
    ]
  },
  repo: { url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/", label: "CSS-Tricks Flexbox Guide" }
},

{
  id: "node-express", title: "Build a REST API with Node.js + Express", category: "Programming",
  difficulty: "intermediate", time: "30 min",
  summary: "Your first backend — a real API that returns JSON.",
  intro: "Express is the standard Node.js web framework. This tutorial builds a working REST API that stores notes in memory. It's the foundation for real backends.",
  tags: ["node", "express", "backend", "api"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Install Node.js",
    "Create your first Express server",
    "Handle GET, POST, PUT, DELETE",
    "Test with curl"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Install Node.js", text: "Via NodeSource for latest version.", code: "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt install nodejs -y", type: "code" },
      { title: "Verify", text: "Check version.", code: "node --version\nnpm --version", output: "v20.11.0\n10.2.4", type: "try" },

      { chapter: "Create project", title: "Init project", text: "New folder with package.json.", code: "mkdir my-api\ncd my-api\nnpm init -y", type: "code" },
      { title: "Install Express", text: "Add the framework.", code: "npm install express", type: "code" },

      { chapter: "First server", title: "Create server.js", text: "The entire app is 8 lines.", code: "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello, world!' });\n});\n\napp.listen(3000, () => console.log('http://localhost:3000'));", lang: "javascript", type: "code" },
      { title: "Run it", text: "In the terminal:", code: "node server.js", output: "http://localhost:3000", type: "try" },
      { title: "Test with curl", text: "In another terminal:", code: "curl http://localhost:3000", output: "{\"message\":\"Hello, world!\"}", type: "try" },

      { chapter: "Real API — CRUD", title: "Add in-memory data", text: "Replace server.js with this:", code: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet notes = [\n  { id: 1, title: 'First note' },\n  { id: 2, title: 'Second note' }\n];\n\n// Get all notes\napp.get('/notes', (req, res) => res.json(notes));\n\n// Get one note\napp.get('/notes/:id', (req, res) => {\n  const note = notes.find(n => n.id === parseInt(req.params.id));\n  if (!note) return res.status(404).json({ error: 'Not found' });\n  res.json(note);\n});\n\n// Create\napp.post('/notes', (req, res) => {\n  const note = { id: notes.length + 1, title: req.body.title };\n  notes.push(note);\n  res.status(201).json(note);\n});\n\n// Update\napp.put('/notes/:id', (req, res) => {\n  const note = notes.find(n => n.id === parseInt(req.params.id));\n  if (!note) return res.status(404).json({ error: 'Not found' });\n  note.title = req.body.title;\n  res.json(note);\n});\n\n// Delete\napp.delete('/notes/:id', (req, res) => {\n  notes = notes.filter(n => n.id !== parseInt(req.params.id));\n  res.status(204).send();\n});\n\napp.listen(3000, () => console.log('http://localhost:3000'));", lang: "javascript", type: "code" },

      { chapter: "Test the API", title: "GET all", text: "List everything.", code: "curl http://localhost:3000/notes", output: "[{\"id\":1,\"title\":\"First note\"},{\"id\":2,\"title\":\"Second note\"}]", type: "try" },
      { title: "POST a new note", text: "Create.", code: "curl -X POST http://localhost:3000/notes \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"title\":\"New note\"}'", output: "{\"id\":3,\"title\":\"New note\"}", type: "try" },
      { title: "PUT update", text: "Modify.", code: "curl -X PUT http://localhost:3000/notes/1 \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"title\":\"Updated\"}'", type: "try" },
      { title: "DELETE", text: "Remove.", code: "curl -X DELETE http://localhost:3000/notes/1", type: "try" },

      { chapter: "Auto-reload", title: "nodemon", text: "Restart on every file save.", code: "npm install --save-dev nodemon\nnpx nodemon server.js", type: "code" },
      { title: "Update package.json", text: "Add a start script:", code: "\"scripts\": {\n  \"start\": \"node server.js\",\n  \"dev\": \"nodemon server.js\"\n}", lang: "json", type: "code" },

      { chapter: "Next steps", title: "Real projects", text: "• Add a **database** — SQLite, MongoDB\n• Add **auth** — JWT tokens\n• Add **validation** — zod, joi\n• **Deploy** — Render, Railway, Fly.io", type: "read" },
      { title: "Done", text: "You just built a backend. This is how every API starts.", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Install Node.js in Termux", text: "Works perfectly.", code: "pkg install nodejs -y\nnode --version", output: "v20.11.0", type: "try" },
      { chapter: "Create project", title: "Setup", text: "New folder.", code: "mkdir my-api\ncd my-api\nnpm init -y\nnpm install express", type: "code" },
      { chapter: "Write server", title: "Create server.js", text: "Use nano.", code: "nano server.js\n# paste code from Linux tab\n# Ctrl+O, Enter, Ctrl+X to save", type: "code" },
      { title: "Run it", text: "Start the server.", code: "node server.js", output: "http://localhost:3000", type: "try" },
      { title: "Test from the same phone", text: "Open another Termux session (swipe from left edge → NEW SESSION). Then:", code: "curl http://localhost:3000", output: "{\"message\":\"Hello, world!\"}", type: "try" },
      { title: "Test from another device", text: "Find your phone's IP and access from a computer on same WiFi.", code: "ifconfig | grep inet\n# Then from PC: curl http://192.168.1.42:3000", type: "code" }
    ],
    mac: [
      { chapter: "Setup", title: "Install Node.js", text: "Via Homebrew.", code: "brew install node", type: "code" },
      { title: "Verify", text: "Check version.", code: "node --version", output: "v20.11.0", type: "try" },
      { chapter: "Follow Linux", title: "Rest is identical", text: "Same commands from here.", type: "read" }
    ],
    windows: [
      { chapter: "Setup", title: "Install Node.js", text: "Via winget.", code: "winget install OpenJS.NodeJS", lang: "powershell", type: "code" },
      { title: "Verify", text: "Open a NEW PowerShell window (important).", code: "node --version", lang: "powershell", output: "v20.11.0", type: "try" },
      { chapter: "Follow Linux", title: "Rest is identical", text: "Same commands.", type: "read" }
    ]
  },
  repo: { url: "https://expressjs.com/", label: "Express Docs" }
},

{
  id: "markdown", title: "Markdown in 10 Minutes", category: "Programming",
  difficulty: "beginner", time: "10 min",
  summary: "The plain-text formatting language used everywhere.",
  intro: "Markdown formats text with plain characters. It's how GitHub READMEs, Reddit, Discord, Notion, and every docs site works. Learn it once, use it everywhere.",
  tags: ["markdown", "writing", "docs"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Headings, bold, italic",
    "Lists, links, images",
    "Code blocks and quotes",
    "Tables and checkboxes"
  ],
  steps: {
    linux: [
      { chapter: "Basics", title: "Headings", text: "`#` symbols create headings. More `#` = smaller.", code: "# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4", type: "code" },
      { title: "Emphasis", text: "Bold and italic.", code: "**bold text**\n*italic text*\n~~strikethrough~~\n***bold italic***", type: "code" },
      { title: "Lists", text: "Ordered and unordered.", code: "- Item one\n- Item two\n  - Nested item\n\n1. First\n2. Second\n3. Third", type: "code" },

      { chapter: "Links and images", title: "Links", text: "Square brackets for text, parens for URL.", code: "[Click here](https://example.com)\n\n[NeoLearn](https://neolearn-a09.pages.dev)", type: "code" },
      { title: "Images", text: "Add `!` before a link.", code: "![Alt text](image.png)\n![Logo](https://neolearn-a09.pages.dev/og-image.png)", type: "code" },

      { chapter: "Code", title: "Inline code", text: "Backticks around words.", code: "Use `console.log()` to debug.", output: "Use console.log() to debug.", type: "code" },
      { title: "Code blocks", text: "Triple backticks, optionally with language.", code: "```javascript\nconst x = 5;\nconsole.log(x);\n```", type: "code" },

      { chapter: "Advanced", title: "Blockquotes", text: "Prefix with `>`.", code: "> This is a quote.\n> It can span multiple lines.\n> > Nested quotes work too.", type: "code" },
      { title: "Horizontal rule", text: "Three or more dashes.", code: "---", type: "code" },
      { title: "Tables", text: "Pipe characters create tables.", code: "| Name | Age |\n|------|-----|\n| Neo  | 42  |\n| Alice| 30  |", type: "code" },
      { title: "Task lists", text: "Checkboxes.", code: "- [x] Completed task\n- [ ] Pending task\n- [ ] Another task", type: "code" },

      { chapter: "Where it's used", title: "Everywhere", text: "• **GitHub** READMEs and issues\n• **Reddit** comments and posts\n• **Discord** messages (partially)\n• **Notion** — type markdown, it converts\n• **Obsidian** — notes are plain markdown\n• **Static site generators** — Jekyll, Hugo, Astro", type: "read" },

      { chapter: "Practice", title: "Try it live", text: "Use **dillinger.io** to write markdown and see the HTML render live.", code: "https://dillinger.io", type: "code" },
      { title: "Reference", text: "Bookmark the official guide:", code: "https://www.markdownguide.org", type: "code" },
      { title: "Done", text: "You now speak Markdown.", type: "read" }
    ],
    android: [
      { chapter: "Practice", title: "Use dillinger.io", text: "Works in any browser.", code: "https://dillinger.io", type: "code" },
      { chapter: "Learn", title: "Follow Linux tab", text: "All the syntax is identical.", type: "read" },
      { chapter: "Real usage", title: "Reddit comments", text: "Reddit uses Markdown. Type `**bold**` in a comment and it renders bold.", type: "try" },
      { title: "Discord", text: "Discord supports Markdown too.", code: "**bold**\n*italic*\n__underline__\n~~strike~~\n`code`\n```code block```", type: "code" }
    ],
    mac: [
      { chapter: "Best editor", title: "VS Code", text: "Built-in markdown preview. ⌘+K then V to preview side-by-side.", type: "read" },
      { title: "Or Obsidian", text: "Free Mac app for note-taking. Everything is markdown.", code: "https://obsidian.md", type: "code" },
      { chapter: "Learn", title: "Follow Linux tab", text: "Same syntax everywhere.", type: "read" }
    ],
    windows: [
      { chapter: "Best editor", title: "VS Code", text: "Ctrl+K then V for preview.", type: "read" },
      { title: "Obsidian", text: "Free.", code: "https://obsidian.md", type: "code" },
      { chapter: "Learn", title: "Follow Linux", text: "Same everywhere.", type: "read" }
    ],
    ios: [
      { chapter: "Best app", title: "Obsidian", text: "Free from App Store.", type: "read" },
      { title: "Or iA Writer", text: "Polished markdown editor for iOS.", code: "https://ia.net/writer", type: "code" },
      { chapter: "Learn", title: "Follow Linux tab", text: "Same syntax.", type: "read" }
    ]
  },
  repo: { url: "https://www.markdownguide.org", label: "Markdown Guide" }
},

// ========== LINUX ==========
{
  id: "ubuntu-install", title: "Install Ubuntu (Beginner-Friendly Linux)", category: "Linux",
  difficulty: "beginner", time: "30 min",
  summary: "Replace Windows with Ubuntu, or dual boot alongside it.",
  intro: "Ubuntu is the easiest Linux for beginners. Modern, polished, and enormous community support. This tutorial covers both a full install and a safe dual-boot with Windows.",
  tags: ["ubuntu", "linux", "install"], platforms: ["linux"],
  learnList: [
    "Download and write Ubuntu to a USB",
    "Choose between full install and dual boot",
    "Complete the install wizard",
    "Set up essential apps"
  ],
  steps: {
    linux: [
      { chapter: "Before you start", title: "⚠️ Back up everything", text: "Any installation can erase your data. Back up important files to an external drive or cloud first.", note: { type: "danger", text: "You can lose everything. Back up first." }, type: "warn" },
      { title: "Get a USB drive", text: "8GB or larger. **Everything on it will be erased.**", type: "read" },
      { title: "Download Ubuntu ISO", text: "Get the latest LTS version.", code: "https://ubuntu.com/download/desktop", type: "code" },

      { chapter: "Write to USB", title: "Use Rufus (Windows) or dd (Linux/Mac)", text: "Rufus is the easiest on Windows. On Linux:", code: "sudo dd if=ubuntu-24.04.iso of=/dev/sdX bs=4M status=progress\nsync", type: "code" },
      { title: "Alternative: balenaEtcher", text: "Graphical tool for all platforms.", code: "https://etcher.balena.io", type: "code" },

      { chapter: "Boot from USB", title: "Enter BIOS/boot menu", text: "Restart → press F2, F12, Del, or Esc (varies by manufacturer). Select your USB drive.", type: "read" },
      { title: "Choose Try vs Install", text: "You'll see \"Try Ubuntu\" or \"Install Ubuntu\". Choose **Try** first to test compatibility without installing.", type: "tip" },

      { chapter: "Install", title: "Run the installer", text: "If it works fine in Try mode, click **Install Ubuntu** on the desktop.", type: "read" },
      { title: "Installation type", text: "You'll be asked:\n• **Erase disk and install Ubuntu** — wipes Windows, full Ubuntu\n• **Install alongside** — dual boot, keeps Windows (recommended if unsure)", type: "code" },
      { title: "Set up user", text: "Name, username, password, timezone. Same as any OS.", type: "read" },

      { chapter: "Post-install", title: "Update everything", text: "First thing.", code: "sudo apt update && sudo apt upgrade -y", type: "code" },
      { title: "Enable firewall", text: "Simple and effective.", code: "sudo ufw enable", type: "code" },
      { title: "Install essential apps", text: "Common software.", code: "sudo apt install git curl wget vlc gimp -y", type: "code" },
      { title: "Flatpak (for modern apps)", text: "Access to thousands of apps.", code: "sudo apt install flatpak -y\nflatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo", type: "code" },

      { chapter: "Get oriented", title: "Important places", text: "• **Settings** — all system config\n• **Software Center** — GUI app store\n• **Files** — file manager\n• **Ubuntu Software** — install more apps", type: "read" },
      { title: "Terminal basics", text: "Open with **Ctrl + Alt + T**. See our **Command Line for Beginners** tutorial.", type: "tip" },

      { title: "Done", text: "You now run Ubuntu. Welcome to Linux.", type: "read" }
    ]
  },
  repo: { url: "https://ubuntu.com/tutorials/install-ubuntu-desktop", label: "Ubuntu Install Guide" }
},

{
  id: "linux-permissions", title: "Linux File Permissions Explained", category: "Linux",
  difficulty: "intermediate", time: "15 min",
  summary: "rwxr-xr-x — what it means and how to control it.",
  intro: "Every file on Linux has an owner, a group, and permission bits. Understanding them unlocks why some things fail with 'Permission denied' and how to fix it correctly.",
  tags: ["linux", "permissions", "chmod"], platforms: ["linux", "android", "mac"],
  learnList: [
    "Read permission strings like rwxr-xr-x",
    "Use chmod and chown",
    "Understand umask and default permissions",
    "Fix common permission problems"
  ],
  steps: {
    linux: [
      { chapter: "Reading permissions", title: "See them in ls -l", text: "The first 10 characters tell you everything.", code: "ls -l myfile.txt", output: "-rwxr-xr-- 1 neo users 1234 Oct 7 12:00 myfile.txt", type: "try" },
      { title: "Breakdown", text: "• `-` — file type (- file, d directory, l symlink)\n• `rwx` — owner permissions (read, write, execute)\n• `r-x` — group permissions\n• `r--` — everyone else\n• `neo` — owner\n• `users` — group", type: "read" },

      { chapter: "Symbolic chmod", title: "Add/remove permissions", text: "Use `+` to add, `-` to remove, `=` to set exactly. Users: `u` (owner), `g` (group), `o` (others), `a` (all).", code: "chmod +x script.sh        # make executable\nchmod u+x script.sh        # same, only owner\nchmod go-rw secret.txt     # remove read/write for group+others\nchmod a+r file.txt         # add read for everyone", type: "code" },

      { chapter: "Numeric chmod", title: "Numbers are faster", text: "Each permission = a number: r=4, w=2, x=1. Add them per user.", code: "chmod 755 script.sh    # rwxr-xr-x (common for scripts)\nchmod 644 file.txt     # rw-r--r-- (common for files)\nchmod 600 id_rsa       # rw------- (SSH keys)\nchmod 700 .ssh         # rwx------ (only you)\nchmod 777 public       # everyone full access (avoid!)", type: "code" },
      { title: "Memory trick", text: "755 = 7(rwx) 5(r-x) 5(r-x). 644 = 6(rw-) 4(r--) 4(r--).", type: "tip" },

      { chapter: "Ownership", title: "chown — change owner", text: "Usually needs sudo.", code: "sudo chown neo file.txt             # change owner\nsudo chown neo:users file.txt         # owner and group\nsudo chown -R neo:users directory/    # recursive", type: "code" },

      { chapter: "Common scenarios", title: "Script won't run", text: "Make it executable.", code: "chmod +x myscript.sh\n./myscript.sh", type: "code" },
      { title: "SSH key too open", text: "This error: 'Permissions 0644 for id_rsa are too open'.", code: "chmod 600 ~/.ssh/id_rsa", type: "code" },
      { title: "Web server can't read", text: "Files need to be readable by www-data.", code: "sudo chown -R www-data:www-data /var/www/html\nsudo chmod -R 755 /var/www/html", type: "code" },

      { chapter: "Special permissions", title: "suid, sgid, sticky bit", text: "Advanced — usually avoid unless you know why.\n\n• **suid (4xxx)** — run as owner instead of user (e.g. `passwd`)\n• **sgid (2xxx)** — run as group\n• **sticky (1xxx)** — only owner can delete (e.g. /tmp)", type: "warn" },

      { title: "Done", text: "Permissions stop being mysterious now.", type: "read" }
    ],
    android: [
      { chapter: "Same as Linux", title: "Termux uses standard permissions", text: "All commands work in Termux.", code: "ls -l\nchmod +x script.sh\nchmod 600 file.txt", type: "code" },
      { title: "Android quirk", text: "Files in `/storage/` are on a non-Linux filesystem — chmod doesn't work there. It only works in `~/` (Termux home).", type: "warn" }
    ],
    mac: [
      { chapter: "Same as Linux", title: "Identical commands", text: "macOS is Unix.", code: "ls -l\nchmod 755 script.sh", type: "code" },
      { title: "macOS quirk", text: "macOS has some extra ACLs. Use `ls -le` to see them.", type: "tip" }
    ]
  },
  repo: { url: "https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html", label: "GNU Coreutils" }
},

{
  id: "systemd-services", title: "Create Linux Services with systemd", category: "Linux",
  difficulty: "intermediate", time: "20 min",
  summary: "Make anything run on boot, restart on crash, log output.",
  intro: "systemd is Linux's init system. It manages background services (daemons). You can make your own script run as a service — start on boot, auto-restart on failure, proper logging.",
  tags: ["linux", "systemd", "server"], platforms: ["linux"],
  learnList: [
    "Understand what a service is",
    "Create your own systemd service",
    "Enable, start, stop, check status",
    "Read logs with journalctl"
  ],
  steps: {
    linux: [
      { chapter: "Basics", title: "What is a service?", text: "Any program that runs in the background: web servers, databases, your scripts. systemd starts them on boot, restarts them if they crash, and captures their logs.", type: "read" },
      { title: "See running services", text: "Long list. Filter as needed.", code: "systemctl list-units --type=service\nsystemctl list-units --type=service --state=running", type: "code" },

      { chapter: "Create a service", title: "Write a simple script", text: "First, make a script that does something.", code: "mkdir -p ~/scripts\nnano ~/scripts/hello-service.sh", type: "code" },
      { title: "Script content", text: "Prints a timestamp every 10 seconds.", code: "#!/bin/bash\nwhile true; do\n  echo \"Service ran at $(date)\"\n  sleep 10\ndone", lang: "bash", type: "code" },
      { title: "Make executable", text: "chmod +x.", code: "chmod +x ~/scripts/hello-service.sh", type: "code" },

      { chapter: "Service file", title: "Create unit file", text: "Lives in `/etc/systemd/system/`.", code: "sudo nano /etc/systemd/system/hello.service", type: "code" },
      { title: "Unit file content", text: "Three sections: Unit, Service, Install.", code: "[Unit]\nDescription=Hello Service\nAfter=network.target\n\n[Service]\nType=simple\nUser=neo\nExecStart=/home/neo/scripts/hello-service.sh\nRestart=always\nRestartSec=5\n\n[Install]\nWantedBy=multi-user.target", lang: "ini", type: "code" },
      { title: "Reload systemd", text: "systemd needs to know about the new file.", code: "sudo systemctl daemon-reload", type: "code" },

      { chapter: "Manage it", title: "Start the service", text: "Run it now.", code: "sudo systemctl start hello.service", type: "code" },
      { title: "Check status", text: "See if it's running.", code: "sudo systemctl status hello.service", output: "● hello.service - Hello Service\n     Loaded: loaded\n     Active: active (running)", type: "try" },
      { title: "Enable on boot", text: "Auto-start.", code: "sudo systemctl enable hello.service", type: "code" },
      { title: "Stop it", text: "Manual stop.", code: "sudo systemctl stop hello.service", type: "code" },
      { title: "Disable", text: "Remove from boot.", code: "sudo systemctl disable hello.service", type: "code" },

      { chapter: "Logs", title: "View with journalctl", text: "All service output goes to journald.", code: "journalctl -u hello.service\njournalctl -u hello.service -f        # follow live\njournalctl -u hello.service --since \"1 hour ago\"\njournalctl -u hello.service -n 50     # last 50 lines", type: "code" },

      { chapter: "Real use cases", title: "Common services to run", text: "• **Your Python script** as a background worker\n• **Node API** as a persistent server\n• **Syncthing** for file sync\n• **Nextcloud** for personal cloud\n• **Custom backup** running every hour", type: "read" },

      { title: "Done", text: "You can now make anything run as a proper Linux service.", type: "read" }
    ]
  },
  repo: { url: "https://www.freedesktop.org/software/systemd/man/systemd.service.html", label: "systemd docs" }
},

{
  id: "linux-recovery", title: "Linux Rescue: Fix a Broken System", category: "Linux",
  difficulty: "advanced", time: "25 min",
  summary: "Boot fails? Password lost? Here's how to recover.",
  intro: "Sooner or later your Linux won't boot, or you'll forget the password, or break sudo. All of these are recoverable. Here are the standard rescue workflows.",
  tags: ["linux", "recovery", "rescue"], platforms: ["linux"],
  learnList: [
    "Boot into recovery mode",
    "Reset a forgotten password",
    "Fix GRUB if it stops loading",
    "Repair filesystem corruption"
  ],
  steps: {
    linux: [
      { chapter: "Recovery mode", title: "Access GRUB menu", text: "Reboot → hold **Shift** (BIOS) or **Esc** (UEFI) during boot to see the GRUB menu.", type: "read" },
      { title: "Advanced options", text: "Select **Advanced options for Ubuntu** (or your distro) → **Recovery mode**.", type: "code" },
      { title: "Recovery menu", text: "Options:\n• **Resume** — continue normal boot\n• **Clean** — free disk space\n• **dpkg** — fix broken packages\n• **fsck** — check filesystem\n• **grub** — update GRUB\n• **root** — drop to root shell", type: "read" },

      { chapter: "Forgot password", title: "Boot recovery → root shell", text: "Select **root — Drop to root shell prompt**.", type: "code" },
      { title: "Remount as read-write", text: "The filesystem is read-only in recovery.", code: "mount -o remount,rw /", type: "code" },
      { title: "Change password", text: "Replace `yourusername`.", code: "passwd yourusername\n# Enter new password twice\nexit\n# Reboot", type: "code" },

      { chapter: "Fix GRUB", title: "GRUB not showing / gone", text: "Common after Windows updates. Boot from a Linux live USB.", code: "# Boot live USB → Try Ubuntu → open terminal\nsudo apt install grub-efi-amd64 -y\nsudo fdisk -l                    # find your Linux partition (e.g. /dev/sda2)\nsudo mount /dev/sda2 /mnt\nsudo mount --bind /dev /mnt/dev\nsudo mount --bind /proc /mnt/proc\nsudo mount --bind /sys /mnt/sys\nsudo chroot /mnt\ngrub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg\nexit\nsudo reboot", type: "code" },

      { chapter: "Filesystem repair", title: "Filesystem corruption", text: "System won't boot, mentions 'fsck'. Boot from live USB.", code: "sudo fsck -f /dev/sda2\ny # to fix any issues", type: "code" },
      { title: "⚠️ Never fsck a mounted partition", text: "It can permanently damage data. Always run fsck on an unmounted partition (from live USB).", type: "danger" },

      { chapter: "Broken sudo", title: "Not in sudoers file", text: "Need to be root first. Boot recovery → root shell.", code: "mount -o remount,rw /\nusermod -aG sudo yourusername\n# Or edit /etc/sudoers with visudo\nvisudo\n# Add: yourusername ALL=(ALL:ALL) ALL", type: "code" },

      { chapter: "Broken packages", title: "dpkg is stuck", text: "Error about dpkg lock or broken packages.", code: "sudo dpkg --configure -a\nsudo apt --fix-broken install\nsudo apt clean && sudo apt autoremove", type: "code" },

      { chapter: "Full disk", title: "Disk full, can't boot", text: "Boot recovery → **clean** — removes old packages. Then:", code: "sudo journalctl --vacuum-size=100M\nsudo apt autoremove\nsudo apt clean\nsudo rm -rf /var/tmp/* /tmp/*", type: "code" },

      { title: "Prevention", text: "• Set up automatic backups (Timeshift)\n• Keep a live USB ready\n• Note your disk layout when the system works\n• Don't run random commands from the internet", type: "tip" }
    ]
  },
  repo: { url: "https://wiki.archlinux.org/title/General_troubleshooting", label: "Arch Wiki Troubleshooting" }
},

{
  id: "bash-aliases", title: "Bash Aliases and Shortcuts That Save Hours", category: "Linux",
  difficulty: "beginner", time: "12 min",
  summary: "Turn 5-second commands into 1-second shortcuts.",
  intro: "You type the same commands every day. Aliases and shell config turn them into instant shortcuts. Small effort, huge daily payoff.",
  tags: ["bash", "zsh", "productivity"], platforms: ["linux", "android", "mac"],
  learnList: [
    "Create your first alias",
    "Save aliases permanently",
    "Add functions and shortcuts",
    "Customize your prompt"
  ],
  steps: {
    linux: [
      { chapter: "Quick aliases", title: "Test in the shell", text: "The `alias` command creates them temporarily.", code: "alias ll='ls -lah'\nll", output: "total 24K\ndrwxr-xr-x 5 neo neo 4.0K Oct 7 12:00 .\n...", type: "try" },
      { title: "More useful ones", text: "Try these for a session.", code: "alias gs='git status'\nalias ga='git add .'\nalias gc='git commit -m'\nalias gp='git push'\nalias update='sudo apt update && sudo apt upgrade -y'\nalias ports='ss -tulpn'", type: "code" },

      { chapter: "Permanent aliases", title: "Add to bashrc", text: "These are lost when you close the terminal. To save, edit your shell's config file.", code: "nano ~/.bashrc", type: "code" },
      { title: "Append your aliases", text: "Add at the bottom:", code: "# My aliases\nalias ll='ls -lah'\nalias la='ls -A'\nalias ..='cd ..'\nalias ...='cd ../..'\nalias gs='git status'\nalias gd='git diff'\nalias gc='git commit -m'\nalias gp='git push'\nalias update='sudo apt update && sudo apt upgrade -y'\nalias myip='curl ifconfig.me'\nalias ports='ss -tulpn'\nalias weather='curl wttr.in'", type: "code" },
      { title: "Reload", text: "Apply changes.", code: "source ~/.bashrc", type: "try" },
      { title: "Zsh (macOS default)", text: "Same but use `~/.zshrc` instead.", code: "nano ~/.zshrc\nsource ~/.zshrc", type: "code" },

      { chapter: "Shell functions", title: "Multi-line shortcuts", text: "Aliases can't take arguments, but functions can.", code: "mkcd() {\n  mkdir -p \"$1\"\n  cd \"$1\"\n}\n\n# Usage:\n# mkcd my-new-project", type: "code" },
      { title: "Another useful function", text: "Create a backup of any file with one command.", code: "bak() {\n  cp \"$1\" \"$1.backup-$(date +%Y%m%d)\"\n}\n\n# Usage: bak important.txt", type: "code" },

      { chapter: "Prompt customization", title: "Show git branch in prompt", text: "Add to `.bashrc`. Big time saver.", code: "parse_git_branch() {\n  git branch 2>/dev/null | sed -n 's/^* //p'\n}\nexport PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[33m\\]$(parse_git_branch)\\[\\033[00m\\] \\$ '", type: "code" },

      { chapter: "Bookmark directories", title: "Jump to common folders", text: "Save paths as variables.", code: "# In .bashrc:\nexport PROJ=~/projects\nexport DOWN=~/Downloads\n\n# Then:\ncd $PROJ", type: "code" },

      { title: "Try oh-my-zsh", text: "If you want a full prompt system: **ohmyzsh.com**. Hundreds of themes and plugins.", type: "tip" },
      { title: "Done", text: "You just saved yourself hours per week.", type: "read" }
    ],
    android: [
      { chapter: "Same as Linux", title: "Termux uses bash", text: "All aliases work in Termux.", code: "nano ~/.bashrc\n# Add your aliases\nsource ~/.bashrc", type: "code" },
      { title: "Phone-specific aliases", text: "Useful ones for Termux.", code: "alias dl='cd ~/storage/downloads'\nalias dcim='cd ~/storage/dcim'\nalias share='cd ~/storage/shared'\nalias wk='cd ~/storage/shared/WhatsApp'", type: "code" }
    ],
    mac: [
      { chapter: "Zsh, not bash", title: "macOS default is zsh", text: "Config lives in `~/.zshrc`.", code: "nano ~/.zshrc\n# Add your aliases\nsource ~/.zshrc", type: "code" },
      { chapter: "macOS-flavored aliases", title: "Common ones", text: "Use macOS-specific tools.", code: "alias ll='ls -lahG'\nalias brewup='brew update && brew upgrade'\nalias cleanup='brew cleanup'\nalias showfiles='defaults write com.apple.finder AppleShowAllFiles true && killall Finder'\nalias hidefiles='defaults write com.apple.finder AppleShowAllFiles false && killall Finder'", type: "code" }
    ]
  },
  repo: { url: "https://www.gnu.org/software/bash/manual/html_node/Aliases.html", label: "Bash Manual" }
},

// ========== ANDROID ==========
{
  id: "termux-x11", title: "Run GUI Linux Apps on Android (X11)", category: "Android",
  difficulty: "advanced", time: "25 min",
  summary: "Real GUI Linux programs on your phone — GIMP, Firefox, Thunar, more.",
  intro: "Termux can run GUI Linux apps using X11. You get a real Linux desktop environment inside a window on your phone. Slow but works — great for occasional use.",
  tags: ["termux", "x11", "gui"], platforms: ["android"],
  learnList: [
    "Install Termux:X11 app",
    "Set up a full XFCE desktop",
    "Run GUI apps like GIMP",
    "Access phone files inside the GUI"
  ],
  steps: {
    android: [
      { chapter: "What you're building", title: "A real Linux desktop on your phone", text: "Termux:X11 runs an X server inside Termux. Combined with a desktop environment (XFCE, LXQt), you get a full Linux UI — windows, taskbar, mouse cursor.", type: "read" },

      { chapter: "Install", title: "Termux:X11 app", text: "Download from GitHub releases — not Play Store.", code: "https://github.com/termux/termux-x11/releases", type: "code" },
      { title: "Termux", text: "If you don't have it: F-Droid.", code: "https://f-droid.org/packages/com.termux/", type: "code" },
      { title: "Update Termux", text: "Standard first step.", code: "pkg update && pkg upgrade -y", type: "code" },
      { title: "Install X11 packages", text: "Termux:X11 + a desktop.", code: "pkg install x11-repo -y\npkg install termux-x11-nightly -y", type: "code" },

      { chapter: "Install a desktop", title: "XFCE (light and full-featured)", text: "Installs a lot — takes 5–10 minutes.", code: "pkg install xfce4 xfce4-terminal thunar -y", type: "code" },
      { title: "Alternative: LXQt", text: "Lighter than XFCE.", code: "pkg install lxqt -y", type: "code" },

      { chapter: "Start the desktop", title: "Terminal 1 — start X server", text: "Leave running.", code: "termux-x11 :0 &\nexport DISPLAY=:0", type: "code" },
      { title: "Terminal 2 — start XFCE", text: "New Termux session (swipe left edge → NEW SESSION).", code: "export DISPLAY=:0\nstartxfce4 &", type: "code" },
      { title: "Open Termux:X11 app", text: "Switch to the Termux:X11 app. You should see the XFCE desktop.", type: "try" },

      { chapter: "Run GUI apps", title: "Try a few", text: "From XFCE terminal, install and run:", code: "pkg install gimp -y\ngimp", type: "code" },
      { title: "Or file manager", text: "Browse your phone files.", code: "pkg install pcmanfm -y\npcmanfm", type: "code" },
      { title: "Firefox", text: "Yes, real Firefox.", code: "pkg install firefox -y\nfirefox", type: "code" },

      { chapter: "Access phone storage", title: "Link storage", text: "From Termux:", code: "termux-setup-storage\nln -s ~/storage/shared ~/Desktop/phone", type: "code" },
      { title: "Browse it", text: "Open Thunar file manager → Desktop → phone. All your photos, videos, downloads.", type: "try" },

      { chapter: "Optional: VNC instead", title: "Remote desktop from another device", text: "Run the desktop and access it from a PC browser.", code: "pkg install tigervnc -y\nvncserver -localhost no\n# Then connect from PC to phone-ip:5901", type: "code" },

      { chapter: "Reality check", title: "Performance", text: "• Runs fine on modern phones (Snapdragon 7xx+)\n• Slow on older devices\n• Great for occasional Linux tasks\n• Not a replacement for a real PC", type: "warn" },

      { title: "Done", text: "You have a real Linux desktop on your phone.", type: "read" }
    ]
  },
  repo: { url: "https://github.com/termux/termux-x11", label: "Termux:X11" }
},

{
  id: "magisk-modules", title: "Must-Have Magisk Modules", category: "Android",
  difficulty: "intermediate", time: "15 min",
  summary: "The best Magisk modules for a rooted phone.",
  intro: "Magisk modules extend what root can do. Some fix problems, some add features, some unlock hidden Android potential. Here are the essential ones.",
  tags: ["magisk", "root", "android"], platforms: ["android"],
  learnList: [
    "Install modules safely",
    "Enable Zygisk for hiding root",
    "Install the top 6 modules",
    "Recover if a module breaks things"
  ],
  steps: {
    android: [
      { chapter: "Prerequisites", title: "Rooted with Magisk", text: "See our **Magisk** tutorial if not rooted yet.", type: "read" },
      { title: "Repositories", text: "Modules come from:\n• **Magisk app** — built-in repo\n• **github.com/Magisk-Modules-Repo** — official\n• **GitHub releases** — mods publish directly", type: "read" },

      { chapter: "Enable Zygisk", title: "Required for hiding root", text: "Magisk → Settings → **Enable Zygisk** → reboot.", type: "code" },
      { title: "Why it matters", text: "Zygisk hides root from banking apps, Google Pay, games with anti-cheat.", type: "tip" },

      { chapter: "Top modules", title: "1. Play Integrity Fix", text: "Makes Play Store and banking apps pass Google's integrity checks. Essential.", code: "Search: Play Integrity Fix (chiteroman)", type: "code" },
      { title: "2. Shamiko", text: "Hide root from detection apps. Works with Zygisk DenyList.", code: "Search: Shamiko", type: "code" },
      { title: "3. Universal SafetyNet Fix", text: "Alternative for older devices.", type: "code" },
      { title: "4. LSPosed", text: "Run Xposed modules on modern Android. Huge ecosystem of tweaks.", code: "https://github.com/LSPosed/LSPosed", type: "code" },
      { title: "5. AdGuard Home (local)", text: "Run ad-blocking DNS on your phone (not the app). Advanced.", type: "code" },
      { title: "6. Systemless Hosts", text: "System-wide ad-blocking via hosts file. Pairs with AdAway.", code: "Search: Systemless Hosts", type: "code" },
      { title: "Bonus: Viper4Android", text: "Massively improve audio quality. Install Viper4Android FX.", type: "tip" },

      { chapter: "Install a module", title: "From Magisk app", text: "Magisk → Modules → Install from storage → pick the .zip → reboot.", type: "code" },
      { title: "From GitHub", text: "Download the latest .zip from the module's releases → same install.", type: "read" },

      { chapter: "Deny list", title: "Hide root from specific apps", text: "Magisk → Settings → Configure DenyList → check the apps you want to hide root from (banking, Google Pay).", type: "code" },

      { chapter: "Troubleshooting", title: "Bootloop after module", text: "Boot into recovery → Magisk → Modules → toggle off the broken one. Or use **Magisk Safe Mode**: hold volume down during boot.", type: "warn" },
      { title: "Uninstall everything", text: "Recovery → Magisk → Uninstall. Removes root cleanly.", type: "code" },

      { title: "Done", text: "Your rooted phone now has superpowers.", type: "read" }
    ]
  },
  repo: { url: "https://github.com/Magisk-Modules-Repo", label: "Magisk Modules Repo" }
},

{
  id: "android-launcher", title: "Customize Android with Third-Party Launchers", category: "Android",
  difficulty: "beginner", time: "15 min",
  summary: "Make your phone feel new — different home screen, icons, widgets.",
  intro: "The launcher is your home screen. Swapping it is the single biggest visual change you can make to Android. Free, no root, reversible in seconds.",
  tags: ["android", "launcher", "customization"], platforms: ["android"],
  learnList: [
    "Install a custom launcher",
    "Set it as default safely",
    "Change icon packs",
    "Add useful widgets"
  ],
  steps: {
    android: [
      { chapter: "Pick a launcher", title: "Best options", text: "• **Nova Launcher** — most popular, tons of options\n• **Niagara** — minimalist, vertical list\n• **Lawnchair** — Pixel-style but customizable\n• **Kvaesitso** — modern, search-focused\n• **Smart Launcher** — auto-organizes apps\n\n**Nova** or **Lawnchair** for beginners.", type: "read" },
      { title: "Install from Play Store", text: "Or F-Droid for open-source launchers. Search the app name.", type: "code" },

      { chapter: "Set as default", title: "After installing", text: "Press Home button → Android asks which launcher to use → pick the new one → tap **Always**.", type: "try" },
      { title: "To revert", text: "Settings → Apps → Default apps → Home app → pick original launcher.", type: "read" },

      { chapter: "Customize", title: "Change grid size", text: "Launcher Settings → Home Screen → Grid. 5×6 or 6×6 for denser.", type: "code" },
      { title: "Icons", text: "Nova Settings → Look & Feel → Icon Style → Icon Pack. Download icon packs from Play Store.", type: "code" },
      { title: "Best icon packs", text: "• **Whicons** — minimal white\n• **Delta** — flat\n• **Vera** — clean\n• **Lines** — outlined", type: "read" },
      { title: "Gestures", text: "Nova supports swipe up/down on home screen, double-tap, two-finger swipe. Bind them to actions (open camera, search, app drawer).", type: "tip" },

      { chapter: "Widgets", title: "Best widget apps", text: "• **KWGT** — design your own widgets\n• **KWGT Presets** — thousands of pre-made\n• **Chronus** — clock + weather\n• **Today Weather** — beautiful forecasts", type: "code" },
      { title: "Install KWGT", text: "Then download preset packs like **Pixxy**, **Huk**, **Vera** — free.", type: "tip" },

      { chapter: "Themes", title: "Match everything", text: "Use same color palette across wallpaper, icons, and widgets. Search r/androidthemes for inspiration.", type: "read" },
      { title: "Wallpaper apps", text: "**Walli**, **Walli 4K**, **Unsplash**, or search r/wallpapers.", type: "code" },

      { title: "Result", text: "Your phone now looks like a designer made it.", type: "read" }
    ]
  },
  repo: { url: "https://nova.launcher.com/", label: "Nova Launcher" }
},

{
  id: "aegis-2fa", title: "Set Up Aegis Authenticator (2FA)", category: "Android",
  difficulty: "beginner", time: "12 min",
  summary: "Secure, offline 2FA — better than Google Authenticator.",
  intro: "Two-factor authentication protects accounts even if your password leaks. Aegis is an open-source 2FA app with encrypted backups, unlike Google Authenticator.",
  tags: ["android", "2fa", "security"], platforms: ["android"],
  learnList: [
    "Install Aegis from F-Droid",
    "Add your first 2FA account",
    "Create encrypted backups",
    "Restore on a new device"
  ],
  steps: {
    android: [
      { chapter: "Why Aegis", title: "Better than Google Authenticator", text: "• **Open source** — code is audited\n• **Encrypted backups** — you control them\n• **No cloud** — your codes never leave your phone\n• **Export/import** — move between phones easily", type: "read" },

      { chapter: "Install", title: "Get it from F-Droid", text: "Search F-Droid for Aegis. Or:", code: "https://f-droid.org/packages/com.beemdevelopment.aegis/", type: "code" },
      { title: "Or Play Store", text: "Same app, latest version.", type: "read" },

      { chapter: "Add your first 2FA", title: "Open your account's security settings", text: "Example: GitHub → Settings → Password and authentication → Two-factor auth → Set up authenticator app.", type: "read" },
      { title: "Scan the QR code", text: "The site shows a QR code. In Aegis: tap **+** → **Scan QR code** → point at the screen.", type: "try" },
      { title: "Save recovery codes", text: "The site gives you recovery codes. **Save these** — screenshot or write them down. If you lose your phone, they're the only way back in.", type: "warn" },
      { title: "Verify", text: "Enter the 6-digit code from Aegis to confirm setup. Done.", type: "try" },

      { chapter: "Backups", title: "Create encrypted backup", text: "Aegis → Settings → Backup → Export. Save the file somewhere safe (Proton Drive, external drive, printed).", code: "Aegis → ⋮ → Settings → Backup → Export", type: "code" },
      { title: "Set a strong password", text: "The backup file is encrypted with a password you choose. **Write it down** — losing it means losing access to all your 2FA.", type: "danger" },
      { title: "Enable auto-backup", text: "Aegis → Settings → Auto-backup → ON. Saves encrypted backup to a folder weekly.", type: "tip" },

      { chapter: "Restore on new phone", title: "Move accounts", text: "New phone → install Aegis → import the backup file → enter password → done.", type: "code" },

      { chapter: "Best practices", title: "Rules", text: "• **Never** screenshot 2FA codes (or store unencrypted)\n• Keep the backup off your phone\n• Save recovery codes in a password manager\n• Use 2FA on: email, banking, GitHub, crypto, anything important", type: "read" },

      { title: "Result", text: "Your accounts are now 10x more secure.", type: "read" }
    ]
  },
  repo: { url: "https://getaegis.app", label: "Aegis Authenticator" }
},

// ========== CYBERSECURITY ==========
{
  id: "gpg-encryption", title: "Encrypt Anything with GPG", category: "Hacking",
  difficulty: "intermediate", time: "20 min",
  summary: "Real end-to-end encryption for files and messages.",
  intro: "GPG (GNU Privacy Guard) is the standard for email encryption, file encryption, and code signing. This tutorial teaches the practical commands — no crypto theory.",
  tags: ["gpg", "encryption", "security"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Generate your GPG key pair",
    "Encrypt and decrypt files",
    "Sign messages to prove they're from you",
    "Exchange encrypted messages with others"
  ],
  steps: {
    linux: [
      { chapter: "Install", title: "Check if installed", text: "Most distros have it.", code: "gpg --version", output: "gpg (GnuPG) 2.4.0", type: "try" },
      { title: "Install if needed", text: "Debian/Ubuntu.", code: "sudo apt install gnupg -y", type: "code" },

      { chapter: "Generate keys", title: "Create your keypair", text: "Interactive prompt — asks for name, email, and a passphrase.", code: "gpg --full-generate-key", type: "code" },
      { title: "Recommended choices", text: "• Key type: **RSA and RSA** (default)\n• Size: **4096** bits\n• Expiry: **2 years** (or 0 for never)\n• Name: your real name or handle\n• Email: the one you want associated\n• Passphrase: **strong, memorable**", type: "code" },
      { title: "List your keys", text: "Verify it was created.", code: "gpg --list-keys", output: "/home/neo/.gnupg/pubring.kbx\n--------------------------\npub   rsa4096 2026-10-07 [SC]\n      ABC123DEF456...\nuid   [ultimate] Neo <neo@example.com>", type: "try" },

      { chapter: "Encrypt files", title: "Encrypt for yourself", text: "Creates `file.txt.gpg`.", code: "gpg -c file.txt", output: "Enter passphrase:\nRepeat passphrase:\nFile 'file.txt.gpg' created.", type: "code" },
      { title: "Or use public key", text: "No passphrase prompt — uses your keypair.", code: "gpg -e -r neo@example.com file.txt", type: "code" },
      { title: "Decrypt", text: "Either way.", code: "gpg -d file.txt.gpg > file.txt", type: "code" },

      { chapter: "Sign messages", title: "Prove authorship", text: "Sign a file — anyone can verify it came from you.", code: "gpg --detach-sign file.txt\n# Creates file.txt.sig", type: "code" },
      { title: "Verify signature", text: "Someone with your public key can verify.", code: "gpg --verify file.txt.sig file.txt", output: "gpg: Good signature from \"Neo <neo@example.com>\"", type: "try" },

      { chapter: "Share your public key", title: "Export it", text: "Text or file.", code: "gpg --armor --export neo@example.com > mypubkey.asc\ncat mypubkey.asc", type: "code" },
      { title: "Send to someone", text: "Email, chat, or upload to a keyserver.", code: "gpg --keyserver keys.openpgp.org --send-keys ABC123DEF456", type: "code" },

      { chapter: "Receive encrypted", title: "Import their key", text: "They send you their `.asc` file.", code: "gpg --import theirkey.asc", type: "code" },
      { title: "Encrypt for them", text: "Only they can decrypt.", code: "gpg -e -r their@email.com secret.txt", type: "code" },

      { chapter: "Email encryption", title: "Thunderbird + Enigmail", text: "For real email GPG, use Thunderbird with the built-in OpenPGP support. Setup wizard walks through importing your key.", type: "read" },

      { chapter: "Backup your keys", title: "⚠️ Important", text: "If you lose your private key, you lose access forever. Back it up.", code: "gpg --export-secret-keys --armor > privkey.asc\n# Store offline — USB, printed, encrypted backup", type: "code" },
      { title: "Restore later", text: "Import the backup.", code: "gpg --import privkey.asc", type: "code" },

      { title: "Done", text: "You can now encrypt anything with the same protocol governments use.", type: "read" }
    ],
    android: [
      { chapter: "Install", title: "In Termux", text: "One command.", code: "pkg install gnupg -y", type: "code" },
      { chapter: "Same commands", title: "Everything works", text: "Follow the Linux tab. All commands are identical.", code: "gpg --full-generate-key\ngpg -c file.txt\ngpg -d file.txt.gpg", type: "code" },
      { title: "Mobile tip", text: "Use `gpg --armor` (ASCII output) for anything you'll share via chat or email.", type: "tip" }
    ],
    mac: [
      { chapter: "Install", title: "Via Homebrew", text: "Or use GPG Suite GUI.", code: "brew install gnupg", type: "code" },
      { title: "GUI option", text: "GPG Suite gives you a Mac app — easier for beginners.", code: "https://gpgtools.org", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Terminal workflow is identical.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Gpg4win", text: "Official Windows GPG package with GUI.", code: "https://gpg4win.org", type: "code" },
      { title: "Or winget", text: "Command-line only.", code: "winget install GnuPG.GnuPG", lang: "powershell", type: "code" },
      { chapter: "Same commands", title: "Follow Linux tab", text: "Once installed, commands are identical.", type: "read" }
    ]
  },
  repo: { url: "https://gnupg.org/", label: "GnuPG" }
},

{
  id: "password-manager", title: "Set Up a Password Manager (Bitwarden)", category: "Hacking",
  difficulty: "beginner", time: "15 min",
  summary: "Never reuse a password again. One master password, unique everything.",
  intro: "Password managers generate and store strong unique passwords for every account. You remember one master password. This is the single biggest security upgrade you can make.",
  tags: ["passwords", "security", "bitwarden"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Install Bitwarden everywhere",
    "Generate strong passwords",
    "Migrate from browser password managers",
    "Set up 2FA on Bitwarden itself"
  ],
  steps: {
    linux: [
      { chapter: "Why Bitwarden", title: "Best free option", text: "• **Free tier is generous** — unlimited passwords, all devices\n• **Open source** — audited code\n• **Cross-platform** — every OS has an app\n• **Self-hostable** — if you want full control\n\nAlternative: **KeePassXC** (fully offline, no cloud).", type: "read" },

      { chapter: "Create account", title: "Sign up", text: "at bitwarden.com. Use a **strong master password** — this is the ONE password you must remember.", code: "https://bitwarden.com", type: "code" },
      { title: "⚠️ Master password rules", text: "• At least 5 random words (passphrase)\n• Or 16+ characters of randomness\n• **Never reuse it anywhere else**\n• Write it down and store offline if you might forget", type: "warn" },

      { chapter: "Install on every device", title: "Apps for all platforms", text: "• **Browser extension** — Chrome, Firefox, Safari\n• **Desktop app** — Linux, macOS, Windows\n• **Mobile app** — Android, iOS\n• **CLI** — for terminal lovers", code: "https://bitwarden.com/download/", type: "code" },
      { title: "Log in on each", text: "Same account, same master password. Passwords sync automatically.", type: "read" },

      { chapter: "First use", title: "Import existing passwords", text: "If Chrome/Firefox has your passwords saved: Bitwarden → Tools → Import data. Choose the source and upload the CSV.", type: "code" },
      { title: "Then delete from browser", text: "Once imported, clear saved passwords from your browser. Bitwarden handles it from now on.", type: "tip" },

      { chapter: "Generate passwords", title: "When creating new accounts", text: "In Bitwarden extension: **+** → Password → adjust length → **Regenerate** until you like it → **Save**.", type: "code" },
      { title: "Or use the built-in generator", text: "Auto-fill popups let you generate a strong password with one tap on any signup form.", type: "try" },

      { chapter: "Enable 2FA on Bitwarden", title: "Protect your vault", text: "Bitwarden → Settings → Two-step login → Authenticator app. Scan with Aegis or Google Authenticator.", type: "code" },
      { title: "⚠️ Save recovery code", text: "Bitwarden gives you a recovery code. Store it offline (paper, different device). Losing both = losing everything.", type: "danger" },

      { chapter: "Emergency access", title: "Optional but wise", text: "Bitwarden lets you designate a trusted contact who can access your vault if you're incapacitated. Settings → Emergency access.", type: "tip" },

      { chapter: "KeePassXC alternative", title: "Fully offline option", text: "If you don't want any cloud: **KeePassXC** stores an encrypted file on your device. Sync it via Nextcloud or Syncthing.", code: "https://keepassxc.org", type: "code" },

      { title: "Done", text: "You just fixed the #1 way accounts get hacked — password reuse.", type: "read" }
    ],
    android: [
      { chapter: "Install", title: "From Play Store or F-Droid", text: "Both have the official app.", type: "code" },
      { chapter: "Setup", title: "Log in", text: "Same account you created on desktop. Enable **Autofill Service** when prompted.", type: "code" },
      { title: "Enable autofill", text: "Settings → System → Languages & input → Autofill service → Bitwarden.", type: "code" },
      { chapter: "Use it", title: "Auto-fill anywhere", text: "Tap any login field in any app → Bitwarden popup appears → select account → autofilled.", type: "try" },
      { title: "Best tip", text: "Long-press a password field in Chrome → Autofill with Bitwarden.", type: "tip" }
    ],
    mac: [
      { chapter: "Install", title: "Desktop app + Safari extension", text: "Download from bitwarden.com. Then install the Safari extension from the Mac App Store.", type: "code" },
      { title: "Biometric unlock", text: "Enable Touch ID in Bitwarden → Settings → Unlock with Touch ID. Unlock with fingerprint instead of master password.", type: "tip" }
    ],
    windows: [
      { chapter: "Install", title: "Desktop + browser extension", text: "From bitwarden.com. Browser extension from Chrome/Edge/Firefox store.", type: "code" },
      { title: "Windows Hello unlock", text: "Enable biometric unlock in Bitwarden settings.", type: "tip" }
    ],
    ios: [
      { chapter: "Install", title: "From App Store", text: "Official Bitwarden app.", type: "code" },
      { chapter: "Setup", title: "Enable autofill", text: "Settings → Passwords → Password Options → Bitwarden ON.", type: "code" },
      { title: "Face ID unlock", text: "Bitwarden → Settings → Unlock with Face ID.", type: "tip" }
    ]
  },
  repo: { url: "https://bitwarden.com", label: "Bitwarden" }
},

{
  id: "johntheripper-defense", title: "Password Strength: What John the Ripper Teaches", category: "Hacking",
  difficulty: "intermediate", time: "18 min",
  summary: "See how fast your password would be cracked — ethically.",
  intro: "John the Ripper is a password-cracking tool used by security pros to test password strength. We use it here on YOUR OWN password hashes to demonstrate why weak passwords fail.",
  tags: ["john", "passwords", "defense"], platforms: ["linux", "mac", "android"],
  learnList: [
    "Install John the Ripper",
    "Hash your own password",
    "Crack it to see how fast it fails",
    "Learn what makes a password strong"
  ],
  steps: {
    linux: [
      { chapter: "⚠️ Legal warning", title: "Only your own passwords", text: "Cracking anyone else's password hashes is a crime in most countries. This tutorial uses your own password to demonstrate principles.", note: { type: "danger", text: "YOUR OWN hashes only." }, type: "warn" },

      { chapter: "Setup", title: "Install John", text: "Debian/Ubuntu.", code: "sudo apt install john -y", type: "code" },

      { chapter: "Create a test hash", title: "Hash a password", text: "We'll make a hash from a password you choose.", code: "echo -n 'password123' | md5sum", output: "482c811da5d5b4bc6d497ffa98491e38  -", type: "code" },
      { title: "Save it to a file", text: "John needs a file with hashes.", code: "echo 'user1:482c811da5d5b4bc6a7ef9db22d0e6c':$(echo -n 'password123' | md5sum | cut -d' ' -f1) > hashes.txt\ncat hashes.txt", type: "code" },

      { chapter: "Crack it", title: "Run John", text: "Watch how fast a weak password falls.", code: "john --format=raw-md5 hashes.txt", output: "Loaded 1 password hash (Raw-MD5)\nPress 'q' or Ctrl-C to abort\npassword123      (user1)\n1g 0:00:00:00 DONE", type: "try" },
      { title: "Show cracked", text: "See the results.", code: "john --show --format=raw-md5 hashes.txt", output: "user1:password123", type: "try" },

      { chapter: "The lesson", title: "Speed tells the story", text: "John cracked `password123` in **milliseconds** because it's in every wordlist. With a GPU, an attacker tries **billions per second**.", type: "read" },
      { title: "What survives", text: "Passwords that survive a GPU attack:\n• **Long passphrases** — 4+ random words\n• **Random 16+ chars** — spaces, symbols, no patterns\n• **Anything a password manager generates**", type: "tip" },

      { chapter: "Better hash algorithms", title: "MD5 is dead", text: "Modern systems use:\n• **bcrypt** — slow by design\n• **scrypt** — memory-hard\n• **argon2** — current best practice\n\nFast hashes (MD5, SHA1, SHA256) are terrible for passwords — cracking them is easy.", type: "read" },
      { title: "See the difference", text: "Generate a bcrypt hash and try to crack it.", code: "sudo apt install python3-bcrypt -y\npython3 -c \"import bcrypt; print(bcrypt.hashpw(b'password123', bcrypt.gensalt()).decode())\"\n# Copy the output, save as hash.txt\n# Then: john --format=bcrypt hash.txt\n# Watch it struggle.", type: "code" },

      { chapter: "Real test", title: "How long would yours take?", text: "Use **howsecureismypassword.net** or **bitwarden.com/password-strength**. Enter a password you think is strong — check the crack time.", code: "https://bitwarden.com/password-strength/", type: "code" },

      { chapter: "Defense", title: "What to do", text: "• Use a **password manager**\n• **16+ characters** minimum for important accounts\n• **Never reuse** passwords\n• Enable **2FA** where available\n• Passphrases beat complex gibberish (longer = harder)", type: "read" },

      { title: "Done", text: "You now understand why weak passwords fail — from experience, not theory.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "Homebrew", text: "Or use hashcat as alternative.", code: "brew install john-jumbo", type: "code" },
      { title: "Follow Linux", text: "Same commands once installed.", type: "read" }
    ],
    android: [
      { chapter: "Install", title: "In Termux", text: "One command.", code: "pkg install john -y", type: "code" },
      { title: "Follow Linux", text: "Same workflow. Slower on phones but works for demos.", type: "read" }
    ]
  },
  repo: { url: "https://www.openwall.com/john/", label: "John the Ripper" }
}, 

// ========== NETWORKING DEEP ==========
{
  id: "tailscale", title: "Tailscale: Instant Private Network", category: "Networking",
  difficulty: "beginner", time: "15 min",
  summary: "Connect all your devices privately — no port forwarding, no config.",
  intro: "Tailscale creates a private mesh VPN between your devices. Unlike traditional VPNs, no port forwarding or server setup — just install and log in. Your phone, laptop, and home server become one private network.",
  tags: ["tailscale", "vpn", "mesh"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Install Tailscale on every device",
    "Get a private IP for each device",
    "Access your home server from anywhere",
    "Share a device with a friend"
  ],
  steps: {
    linux: [
      { chapter: "Why Tailscale", title: "Different from WireGuard", text: "Traditional VPN: you run a server, forward ports, configure IPs.\n**Tailscale:** install app → log in → all your devices appear on one private network. Automatic NAT traversal. Free for personal use (up to 100 devices).", type: "read" },

      { chapter: "Install", title: "One-line install", text: "Debian/Ubuntu.", code: "curl -fsSL https://tailscale.com/install.sh | sh", type: "code" },
      { title: "Log in", text: "Authenticates via browser.", code: "sudo tailscale up", output: "To authenticate, visit: https://login.tailscale.com/a/abc123", type: "code" },
      { title: "Check status", text: "See your Tailscale IP.", code: "tailscale status\ntailscale ip", output: "100.101.102.103", type: "try" },

      { chapter: "Add devices", title: "Install on phone", text: "Download Tailscale from Play Store / App Store → log in with same account.", type: "read" },
      { title: "Install on laptop", text: "Same process on Mac/Windows.", type: "read" },
      { title: "See them all", text: "Every device appears on your private network.", code: "tailscale status", output: "100.101.102.103  my-desktop    neo@  linux  -\n100.101.102.104  my-phone      neo@  android -\n100.101.102.105  my-macbook    neo@  macOS  -", type: "try" },

      { chapter: "Use it", title: "SSH into your home PC from anywhere", text: "From your phone or another device:", code: "ssh neo@100.101.102.103", type: "code" },
      { title: "Access home services", text: "Run a Nextcloud on your home PC? Access it remotely:", code: "https://100.101.102.103:8080", type: "try" },

      { chapter: "Magic DNS", title: "Use names instead of IPs", text: "Enable MagicDNS in the admin panel. Then use device names:", code: "ssh neo@my-desktop", type: "code" },

      { chapter: "Share a device", title: "Give a friend access", text: "Admin panel → Machines → select device → Share → enter their email. They can access only what you share.", type: "code" },

      { chapter: "Exit node (route all traffic)", title: "Use home internet from anywhere", text: "Set up a device as exit node and route all your traffic through it.", code: "sudo tailscale up --advertise-exit-node", type: "code" },
      { title: "Then on other devices", text: "Select the exit node in the app — all your traffic now exits from home IP.", type: "tip" },

      { chapter: "Free tier", title: "What you get", text: "• Up to **100 devices**\n• **3 users**\n• Unlimited bandwidth\n• MagicDNS, ACLs, exit nodes\n• **Zero config**", type: "read" },

      { title: "Done", text: "You now have a private network spanning all your devices.", type: "read" }
    ],
    android: [
      { chapter: "Install", title: "From Play Store", text: "Search Tailscale. Install. Log in with same account.", code: "https://play.google.com/store/apps/details?id=com.tailscale.ipn", type: "code" },
      { title: "Enable VPN", text: "Tap Connect. Android asks for VPN permission — allow. Small key icon appears in status bar.", type: "try" },
      { chapter: "Use it", title: "Access home devices", text: "From any other Tailscale device, SSH or browse to your phone.", code: "ssh -p 8022 u0_a123@100.101.102.104", type: "code" },
      { title: "Share your phone's files", text: "Run an HTTP server in Termux → access it from any Tailscale device.", code: "pkg install python -y\ncd ~/storage/shared\npython -m http.server 8080", type: "code" }
    ],
    mac: [
      { chapter: "Install", title: "Mac App Store or Homebrew", text: "Download from tailscale.com or use the Store.", code: "brew install --cask tailscale", type: "code" },
      { title: "Log in", text: "Click the menu bar icon → Log in. Same account as other devices.", type: "try" },
      { title: "Menu bar features", text: "See all devices, connect, use exit nodes.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Download and install", text: "From tailscale.com.", code: "winget install tailscale.tailscale", lang: "powershell", type: "code" },
      { title: "Log in", text: "Tray icon → Log in. Same account.", type: "try" }
    ],
    ios: [
      { chapter: "Install", title: "From App Store", text: "Search Tailscale.", type: "code" },
      { title: "Log in and connect", text: "Enable VPN permission when prompted.", type: "try" }
    ]
  },
  repo: { url: "https://tailscale.com/", label: "Tailscale" }
},

{
  id: "pihole", title: "Pi-hole: Network-Wide Ad Blocking", category: "Networking",
  difficulty: "intermediate", time: "30 min",
  summary: "Block ads on every device at home — including TVs and consoles.",
  intro: "Pi-hole runs on a Raspberry Pi (or any Linux box). Set it as your home DNS server and every device on your WiFi gets ad-blocking — phones, TVs, consoles, everything.",
  tags: ["pihole", "dns", "ads", "self-hosted"], platforms: ["linux"],
  learnList: [
    "Understand how Pi-hole fits in your network",
    "Install Pi-hole in one command",
    "Point your router to use it",
    "Monitor blocked queries"
  ],
  steps: {
    linux: [
      { chapter: "Hardware", title: "What runs Pi-hole?", text: "• **Raspberry Pi** — best option, ~$35, uses 3W\n• **Any spare PC** — works but power-hungry\n• **Old laptop** — perfect (built-in UPS = battery)\n• **VPS** — only blocks when on that network (less useful)", type: "read" },
      { title: "Network position", text: "Pi-hole sits between your devices and your router. It answers DNS queries and blocks ads by returning nothing for ad domains.", type: "read" },

      { chapter: "Install", title: "One-command install", text: "On Debian/Ubuntu/Raspberry Pi OS.", code: "curl -sSL https://install.pi-hole.net | bash", type: "code" },
      { title: "Follow the wizard", text: "• Upstream DNS: choose Cloudflare (1.1.1.1)\n• Blocklists: keep default\n• Enable web admin: yes\n• Web password: choose one", type: "read" },
      { title: "Note your Pi's IP", text: "You'll see it at the end of install — something like 192.168.1.50. **Write it down.**", type: "warn" },

      { chapter: "Test it locally", title: "Open the admin panel", text: "In a browser on the Pi or another device:", code: "http://192.168.1.50/admin", type: "code" },
      { title: "Log in", text: "Use the password from setup.", type: "read" },

      { chapter: "Point devices to Pi-hole", title: "Option 1: Router-level (best)", text: "Log into your router → find DNS settings → set primary DNS to **192.168.1.50**. Every device now uses Pi-hole automatically.", type: "code" },
      { title: "Option 2: Per-device", text: "If you can't change the router, set DNS on each device manually. Android: Private DNS → off, then WiFi → static IP → DNS = Pi's IP.", type: "read" },

      { chapter: "Verify it works", title: "Check dashboard", text: "Back in Pi-hole admin → Dashboard. You should see:\n• **Total queries** climbing\n• **Queries blocked** (10–30% is normal)\n• **Top blocked domains**", type: "try" },
      { title: "Test on a device", text: "Open a news site on your phone. Should feel cleaner and faster. Then check the dashboard — new queries appeared.", type: "try" },

      { chapter: "Customize", title: "Add blocklists", text: "Admin → Group Management → Adlists. Add more (they grow over time):", code: "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts", type: "code" },
      { title: "Whitelist a site", text: "If Pi-hole blocks something you need — Admin → Whitelist → add the domain.", type: "code" },

      { chapter: "Maintenance", title: "Keep it updated", text: "Pi-hole updates occasionally.", code: "pihole -up", type: "code" },
      { title: "Backup config", text: "Admin → Settings → Teleporter → Backup. Save the zip somewhere safe.", type: "tip" },

      { title: "Done", text: "Every device in your home is now ad-free. Including your smart TV.", type: "read" }
    ]
  },
  repo: { url: "https://pi-hole.net", label: "Pi-hole" }
},

{
  id: "caddy-proxy", title: "Reverse Proxy with Caddy (Auto HTTPS)", category: "Networking",
  difficulty: "intermediate", time: "20 min",
  summary: "Run multiple self-hosted services on one server with free HTTPS.",
  intro: "Caddy is a reverse proxy that gives you automatic HTTPS with Let's Encrypt. Point multiple subdomains at services running on different ports — all with valid certificates, zero config.",
  tags: ["caddy", "proxy", "https", "self-hosted"], platforms: ["linux"],
  learnList: [
    "Understand what a reverse proxy does",
    "Install Caddy",
    "Serve multiple services under one domain",
    "Get automatic HTTPS for free"
  ],
  steps: {
    linux: [
      { chapter: "Why Caddy", title: "vs Nginx / Apache", text: "• **Automatic HTTPS** — no manual certbot\n• **Simpler config** — 3 lines vs 30\n• **HTTP/3 + HTTP/2 by default**\n• **Just works**", type: "read" },
      { title: "What a reverse proxy does", text: "One server, many services. Caddy listens on port 80/443 and routes `app1.example.com` → port 3000, `app2.example.com` → port 8080. Handles HTTPS for all of them.", type: "read" },

      { chapter: "Prerequisites", title: "You need a domain", text: "Buy one (~$10/year from Namecheap, Porkbun, or Cloudflare). Point an A record at your server's IP.", type: "read" },
      { title: "And a server", text: "VPS or home server with public IP. Ports 80 and 443 open. See our WireGuard tutorial for server setup basics.", type: "read" },

      { chapter: "Install", title: "Debian/Ubuntu", text: "Official repo.", code: "sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg\ncurl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list\nsudo apt update\nsudo apt install caddy -y", type: "code" },
      { title: "Verify", text: "Check version.", code: "caddy version", output: "v2.7.6", type: "try" },

      { chapter: "Simple config", title: "Edit Caddyfile", text: "The config file lives at `/etc/caddy/Caddyfile`.", code: "sudo nano /etc/caddy/Caddyfile", type: "code" },
      { title: "Minimal reverse proxy", text: "Point a domain at a local service. Caddy auto-fetches HTTPS.", code: "app.example.com {\n  reverse_proxy localhost:3000\n}", lang: "text", type: "code" },
      { title: "Reload", text: "Apply changes.", code: "sudo systemctl reload caddy", type: "code" },
      { title: "Visit it", text: "Open https://app.example.com — should work with valid HTTPS cert. Zero further steps.", type: "try" },

      { chapter: "Multiple services", title: "Route many subdomains", text: "Each block routes to a different backend.", code: "nextcloud.example.com {\n  reverse_proxy localhost:8080\n}\n\njellyfin.example.com {\n  reverse_proxy localhost:8096\n}\n\ngrafana.example.com {\n  reverse_proxy localhost:3001\n}\n\nblog.example.com {\n  root * /var/www/blog\n  file_server\n}", type: "code" },

      { chapter: "Advanced", title: "Load balance + health checks", text: "Multiple backends for high availability.", code: "app.example.com {\n  reverse_proxy localhost:3000 localhost:3001 {\n    lb_policy round_robin\n    health_uri /health\n    health_interval 30s\n  }\n}", type: "code" },
      { title: "Basic auth", text: "Password-protect a site.", code: "admin.example.com {\n  basicauth {\n    neo $2a$14$hash_of_password\n  }\n  reverse_proxy localhost:9090\n}", type: "code" },
      { title: "Generate password hash", text: "Use Caddy's built-in tool.", code: "caddy hash-password --plaintext 'yourpassword'", type: "code" },

      { chapter: "Zero-config HTTPS", title: "How it works", text: "Caddy:\n1. Sees a new domain in the config\n2. Requests cert from Let's Encrypt\n3. Verifies via HTTP-01 challenge\n4. Installs cert automatically\n5. **Renews 30 days before expiry, forever**\n\nYou never touch certificates again.", type: "read" },

      { title: "Done", text: "You now have a proper self-hosting setup.", type: "read" }
    ]
  },
  repo: { url: "https://caddyserver.com/", label: "Caddy" }
},

{
  id: "torrenting", title: "Torrenting Safely and Legally", category: "Networking",
  difficulty: "beginner", time: "20 min",
  summary: "Understand BitTorrent, do it safely, and use it for legal content.",
  intro: "BitTorrent is a legitimate technology used by Linux distros, Internet Archive, and legal content creators. This tutorial teaches you how it works and how to use it safely and legally.",
  tags: ["torrent", "bittorrent", "p2p"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Understand how BitTorrent actually works",
    "Legal uses of torrenting",
    "Install a good client",
    "Stay safe on public trackers"
  ],
  steps: {
    linux: [
      { chapter: "How it works", title: "Peers, seeds, swarms", text: "• **Peer** — someone downloading/uploading a file\n• **Seed** — someone with the complete file\n• **Leecher** — someone still downloading\n• **Swarm** — all peers on one torrent\n• **Tracker** — server that coordinates the swarm\n\nYou download pieces from many peers simultaneously — faster than one server.", type: "read" },

      { chapter: "Legal uses", title: "Legitimate torrents", text: "• **Linux distros** — Ubuntu, Debian, Arch (official torrents)\n• **Internet Archive** — public domain films, books, music\n• **Blender Open Movies** — free films\n• **Creative Commons music** — many artists distribute this way\n• **Free games** — 0 A.D., SuperTuxKart\n• **Wikipedia dumps** — full offline copy", type: "read" },

      { chapter: "Legal warning", title: "What NOT to torrent", text: "Copyrighted films, TV, music, games, software you don't own — illegal in most countries. Fines exist. ISP warnings exist. Don't risk it.", note: { type: "danger", text: "Know your local laws." }, type: "warn" },

      { chapter: "Install a client", title: "Best options", text: "• **qBittorrent** — free, no ads, open source, best UI\n• **Transmission** — minimal, great for servers\n• **Deluge** — plugin-based\n\n**Avoid:** uTorrent (ads, shady history), BitTorrent (same company)", type: "read" },
      { title: "Install qBittorrent", text: "Debian/Ubuntu.", code: "sudo apt install qbittorrent -y", type: "code" },
      { title: "Or via Flatpak", text: "Latest version.", code: "flatpak install flathub org.qbittorrent.qBittorrent", type: "code" },

      { chapter: "Use it", title: "Download a legal torrent", text: "Grab Ubuntu's torrent:", code: "https://ubuntu.com/download/alternative-downloads", type: "code" },
      { title: "Open in qBittorrent", text: "File → Add torrent → paste URL or open .torrent file → choose save location → Start.", type: "try" },
      { title: "Watch it work", text: "Peers appear, download progresses. Speed depends on seeders.", type: "read" },

      { chapter: "Safe practices", title: "Avoid sketchy torrents", text: "• **Read comments** on torrent sites — malware gets flagged fast\n• **Check file types** — .exe files in \"movie\" torrents are viruses\n• **Use a VPN** for any P2P if your ISP throttles\n• **Use legal sources** whenever possible", type: "warn" },

      { chapter: "VPN for torrenting", title: "Which VPNs work", text: "• **Mullvad** — €5/mo, anonymous payment\n• **ProtonVPN** — free tier works, paid has P2P\n• **IVPN** — privacy-focused\n\n**Do NOT use:** free VPNs (they sell your data).", type: "code" },
      { title: "Or self-host", text: "Use your own WireGuard server (see WireGuard tutorial). Route qBittorrent traffic through it via qBittorrent's network binding.", type: "tip" },

      { chapter: "Ratio and seeding", title: "Be a good citizen", text: "After download, keep seeding (uploading) at least to ratio 1.0. This keeps torrents alive. In qBittorrent, set a ratio limit to auto-stop.", code: "Tools → Options → BitTorrent → Seeding limits → ratio 1.0", type: "code" },

      { title: "Done", text: "You understand torrenting — used it safely, legally.", type: "read" }
    ],
    android: [
      { chapter: "Apps", title: "Best Android clients", text: "• **libretorrent** — open source, on F-Droid\n• **FrostWire** — has built-in search (avoid)\n• **Flud** — polished but ad-supported\n\n**libretorrent** is best — no ads, open source.", code: "https://f-droid.org/packages/org.proninyaroslav.libretorrent/", type: "code" },
      { chapter: "Use it", title: "Same principles", text: "Add torrent URL or file → pick folder → start.", type: "read" },
      { title: "VPN on Android", text: "If using public trackers, always run a VPN. Mullvad app is easy.", type: "tip" }
    ],
    mac: [
      { chapter: "Install", title: "Transmission (best on Mac)", text: "Or qBittorrent.", code: "brew install --cask transmission", type: "code" },
      { title: "Same usage", text: "Add torrent, choose folder, start.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "qBittorrent", text: "Skip uTorrent (has ads).", code: "winget install qBittorrent.qBittorrent", lang: "powershell", type: "code" },
      { title: "Same usage", text: "Add torrent → choose folder → start.", type: "read" }
    ]
  },
  repo: { url: "https://www.qbittorrent.org/", label: "qBittorrent" }
},

// ========== STREAMING DEEP ==========
{
  id: "jellyfin", title: "Jellyfin: Your Own Netflix", category: "Streaming",
  difficulty: "intermediate", time: "30 min",
  summary: "Stream your own media library to any device — phone, TV, laptop.",
  intro: "Jellyfin is a free, open-source media server. Point it at your movies, TV shows, and music — watch them on any device, anywhere. No subscription, no ads, no tracking.",
  tags: ["jellyfin", "media", "self-hosted"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Install Jellyfin on your server or PC",
    "Organize your media library",
    "Install client apps on every device",
    "Access it remotely and securely"
  ],
  steps: {
    linux: [
      { chapter: "Overview", title: "What Jellyfin does", text: "You point Jellyfin at your media folders. It scans them, fetches cover art, subtitles, and metadata, then serves them over HTTP. Any device with a browser or app can stream.", type: "read" },
      { title: "Hardware", text: "• **Old PC** — best, fast, upgradeable\n• **Raspberry Pi 4** — works for 1-2 streams\n• **Home server** — ideal\n• **Any Linux box** — even a VM", type: "read" },

      { chapter: "Install", title: "Debian/Ubuntu", text: "Official install script.", code: "curl https://repo.jellyfin.org/install-debuntu.sh | sudo bash", type: "code" },
      { title: "Or Docker (recommended)", text: "Isolated, easy to update.", code: "docker run -d \\\n  --name jellyfin \\\n  -p 8096:8096 \\\n  -v /path/to/config:/config \\\n  -v /path/to/media:/media \\\n  --restart unless-stopped \\\n  jellyfin/jellyfin", type: "code" },
      { title: "Or via Homebrew (Mac)", text: "Not as polished but works.", code: "brew install --cask jellyfin", type: "code" },

      { chapter: "First run", title: "Open the setup wizard", text: "In a browser on the same machine:", code: "http://localhost:8096", type: "code" },
      { title: "Follow the wizard", text: "• Choose language\n• Create admin account\n• Add media libraries (see next step)\n• Configure remote access", type: "read" },

      { chapter: "Organize media", title: "Naming conventions", text: "Jellyfin matches files against online databases (TMDB, TVDB). Correct naming = perfect metadata.\n\n**Movies:**\n```\nMovies/Inception (2010)/Inception (2010).mkv\n```\n\n**TV:**\n```\nTV/Breaking Bad/Season 01/Breaking Bad S01E01.mkv\n```", type: "code" },
      { title: "Add libraries", text: "Dashboard → Libraries → Add Media Library → pick type (Movies/TV/Music) → point to your folder.", type: "try" },
      { title: "Wait for scan", text: "Jellyfin scans and fetches metadata. For large libraries this takes a while.", type: "read" },

      { chapter: "Client apps", title: "Watch on anything", text: "• **Android** — Jellyfin app (F-Droid or Play)\n• **iOS** — Swiftfin or Jellyfin Mobile\n• **Smart TV** — Samsung, LG, Android TV\n• **Fire TV** — Fire Stick app\n• **Roku** — official app\n• **Kodi** — via Jellyfin addon\n• **Web browser** — anywhere", type: "code" },

      { chapter: "Remote access", title: "Option 1: Tailscale (easiest, safest)", text: "Install Tailscale on server + clients. No port forwarding. Access via the Tailscale IP.", code: "https://100.101.102.103:8096", type: "code" },
      { title: "Option 2: Reverse proxy + domain", text: "Expose via Caddy with HTTPS on a subdomain.", code: "jellyfin.example.com {\n  reverse_proxy localhost:8096\n}", type: "code" },

      { chapter: "Hardware transcoding", title: "GPU acceleration (optional)", text: "If your server has a GPU, enable hardware transcoding so playback works on weak clients.\n\nDashboard → Playback → Transcoding → pick your GPU.", type: "tip" },
      { title: "Without GPU", text: "Software transcoding works but CPU-heavy. Direct play (no transcoding) is best — use compatible formats.", type: "read" },

      { title: "Done", text: "You now have your own streaming service.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "Homebrew", text: "One command.", code: "brew install --cask jellyfin", type: "code" },
      { title: "Open it", text: "Launch Jellyfin.app → access at http://localhost:8096.", type: "try" },
      { chapter: "Same workflow", text: "Follow the Linux tab from 'First run' onwards.", type: "read" },
      { title: "Better on Mac", text: "If you have a Mac Mini or Mac Studio, it's an excellent Jellyfin server — especially with the M-series chips.", type: "tip" }
    ],
    windows: [
      { chapter: "Install", title: "Download installer", text: "From jellyfin.org. Auto-installs and runs as a service.", code: "https://jellyfin.org/downloads/", type: "code" },
      { title: "Or winget", text: "Silent install.", code: "winget install Jellyfin.Server", lang: "powershell", type: "code" },
      { chapter: "Same workflow", text: "Follow Linux tab from 'First run'.", type: "read" }
    ]
  },
  repo: { url: "https://jellyfin.org", label: "Jellyfin" }
},

{
  id: "spotify-alternatives", title: "Free Music Streaming Alternatives", category: "Streaming",
  difficulty: "beginner", time: "15 min",
  summary: "Legal free music — no ads, no premium, no compromise.",
  intro: "You don't need Spotify Premium. There are legal, free alternatives with huge libraries. Here's what actually works in 2026.",
  tags: ["music", "streaming", "free"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "The best legal free music apps",
    "Self-hosted music streaming",
    "Offline playback options",
    "Ad-free listening that isn't piracy"
  ],
  steps: {
    linux: [
      { chapter: "Free legal options", title: "YouTube Music (free tier)", text: "Free with ads. Install as PWA for app-like experience.", code: "https://music.youtube.com", type: "code" },
      { title: "Spotify free tier", text: "Free with ads, shuffle-only on mobile. Works.", code: "https://open.spotify.com", type: "code" },
      { title: "SoundCloud", text: "Tons of free music from indie artists. No account needed.", code: "https://soundcloud.com", type: "code" },

      { chapter: "Self-hosted", title: "Navidrome (best self-hosted)", text: "If you have MP3s, Navidrome streams them like Spotify.", code: "docker run -d \\\n  --name navidrome \\\n  -p 4533:4533 \\\n  -v /path/to/music:/music \\\n  -v /path/to/data:/data \\\n  deluan/navidrome", type: "code" },
      { title: "Client apps", text: "• **Sonixd** — desktop client\n• **substreamer** — mobile\n• **Symfonium** — Android, polished\n• **play:Sub** — iOS", type: "read" },
      { title: "Jellyfin also does music", text: "If you already run Jellyfin, it serves music too. Add a music library.", type: "tip" },

      { chapter: "Free music sources", title: "Legal downloads", text: "• **Free Music Archive** — curated, Creative Commons\n• **Bandcamp** — many artists offer free/pay-what-you-want\n• **Jamendo** — 600k+ CC tracks\n• **ccMixter** — remixes under CC\n• **Internet Archive** — public domain + CC", code: "https://freemusicarchive.org", type: "code" },

      { chapter: "YouTube Music PWA", title: "Install as app", text: "Chrome → Menu → Install app. Works offline-ish, no separate app.", type: "try" },
      { title: "uBlock Origin", text: "With uBlock Origin, YouTube Music free = ad-free experience in the browser.", type: "tip" },

      { chapter: "Radio", title: "Free radio apps", text: "• **Radio Garden** — explore world radio (fun)\n• **TuneIn** — every major station\n• **SomaFM** — commercial-free, curated stations", type: "code" },

      { chapter: "Podcasts", title: "Instead of music", text: "• **AntennaPod** — Android, open source\n• **Pocket Casts** — cross-platform\n• **Overcast** — iOS, free\n• **Spotify Podcasts** — free tier works", type: "read" },

      { title: "Done", text: "You have multiple legal, free options for music.", type: "read" }
    ],
    android: [
      { chapter: "Apps", title: "Best free apps", text: "• **YouTube Music** — Vanced alternative: YT Music ReVanced\n• **Spotify** — free with ads\n• **SoundCloud** — free\n• **Navidrome + substreamer** — if you self-host\n• **AntennaPod** — podcasts", type: "read" },
      { title: "ReVanced for YouTube Music", text: "See our ReVanced tutorial — you can patch YouTube Music too, removing ads and enabling background play.", type: "tip" },
      { chapter: "Offline", title: "Free offline options", text: "• Download Creative Commons music from Bandcamp/FMA\n• Store on phone via files\n• Play with **VLC** or **Musicolet**", code: "https://f-droid.org/packages/com.kabouzeid.gramophone/", type: "code" }
    ],
    mac: [
      { chapter: "Apps", title: "Same as Linux", text: "Browser-based options work identically. Navidrome via Sonixd (Homebrew).", code: "brew install --cask sonixd", type: "code" },
      { title: "Music.app + local library", text: "Import your own MP3s into Apple Music.app. Free.", type: "tip" }
    ],
    windows: [
      { chapter: "Apps", title: "Browser + desktop", text: "Same web options. Or Foobar2000 for local music.", code: "winget install PeterPawlowski.foobar2000", lang: "powershell", type: "code" },
      { title: "Navidrome client", text: "Sonixd or Feishin for desktop.", code: "https://github.com/jeffvli/feishin", type: "code" }
    ],
    ios: [
      { chapter: "Apps", title: "Best on iOS", text: "• **YouTube Music** — free with ads\n• **Spotify** — free with ads\n• **SoundCloud** — free\n• **AntennaPod** not on iOS — use Overcast for podcasts", type: "read" },
      { title: "Navidrome client", text: "**play:Sub** or **substreamer** — one-time purchase, worth it.", type: "tip" }
    ]
  },
  repo: { url: "https://www.navidrome.org/", label: "Navidrome" }
},

{
  id: "streaming-setup", title: "IPTV and Live TV Streaming Setup", category: "Streaming",
  difficulty: "intermediate", time: "20 min",
  summary: "Watch live TV channels legally — free and paid options.",
  intro: "Live TV without cable. Free legal IPTV options, paid legitimate services, and how to play them on any device. Skip the piracy; there are better options.",
  tags: ["iptv", "live-tv", "streaming"], platforms: ["linux", "android", "mac", "windows", "ios"],
  learnList: [
    "Legal free IPTV sources",
    "Paid alternatives to cable",
    "Best players for IPTV",
    "Set up and stream legally"
  ],
  steps: {
    linux: [
      { chapter: "Legal reality", title: "Free IPTV is mostly piracy", text: "Most \"free IPTV\" lists are pirated streams. They break, get shut down, and often carry malware. **Legitimate options exist** and are better.", type: "warn" },

      { chapter: "Legal free IPTV", title: "Public broadcasters", text: "Many broadcasters stream free worldwide:\n• **BBC iPlayer** (UK, VPN needed)\n• **ABC iview** (Australia)\n• **CBC Gem** (Canada)\n• **PBS** (US)\n• **Deutsche Welle** (Germany, no geo-lock)\n• **France 24** (French + English)", type: "read" },
      { title: "Free live news", text: "• Al Jazeera English\n• Sky News (YouTube)\n• Bloomberg TV\n• Euronews\n• CNA (Singapore)", type: "code" },

      { chapter: "Paid legit IPTV", title: "Better than cable", text: "• **Sling TV** — $40/mo, US\n• **YouTube TV** — $73/mo, US\n• **Philo** — $25/mo, US\n• **FuboTV** — sports, ~$75/mo\n• **DAZN** — sports, various regions\n\n**Nigeria-specific:** see DStv Now, Showmax, or iROKOtv.", type: "read" },

      { chapter: "Best player", title: "VLC (any playlist)", text: "VLC plays M3U playlists natively. Install.", code: "sudo apt install vlc -y", type: "code" },
      { title: "Open M3U in VLC", text: "Media → Open Network Stream → paste M3U URL.", type: "try" },
      { title: "Or Kodi with IPTV Simple Client", text: "More powerful for channel lists with EPG.", code: "sudo apt install kodi -y", type: "code" },

      { chapter: "Free legally-available channels", title: "Public domain / CC streams", text: "Search for these legit sources:\n• **Pluto TV** — free, ad-supported, US/UK\n• **Tubi** — free, ad-supported\n• **Plex Live TV** — free with Plex account\n• **Samsung TV Plus** — free with Samsung device or web\n• **Stirr** — free", type: "code" },
      { title: "For Nigerian content", text: "• **iROKOtv** — Nollywood, cheap\n• **Showmax** — African content\n• **DStv Now** — for DStv subscribers\n• **Channels TV** — free on YouTube Live", type: "read" },

      { chapter: "Public M3U lists", title: "Free legal streams", text: "Some public lists aggregate free legal streams. Search:\n\n**iptv-org** — thousands of public channels with proper licensing.", code: "https://github.com/iptv-org/iptv", type: "code" },
      { title: "Add to VLC", text: "Download the playlist, open in VLC. Hundreds of legit free channels.", type: "try" },

      { chapter: "Setup on TV", title: "Android TV / Fire Stick", text: "Install **TiviMate** (best IPTV app) → add M3U URL → enjoy EPG.", code: "https://tivimate.com", type: "code" },

      { title: "Done", text: "You have live TV without piracy.", type: "read" }
    ],
    android: [
      { chapter: "Players", title: "Best Android IPTV apps", text: "• **TiviMate** — best UI, EPG\n• **IPTV Smarters Pro** — free\n• **VLC** — plays M3U\n• **Kodi** — powerful", type: "code" },
      { chapter: "Free legal sources", title: "Pluto TV", text: "Free, legal, has Nigerian content. Install from Play Store.", type: "read" },
      { title: "Public broadcaster apps", text: "Search Play Store for:\n• Al Jazeera\n• DW\n• France 24\n• Sky News\n• CNA", type: "tip" }
    ],
    mac: [
      { chapter: "Player", title: "VLC or IINA", text: "IINA is a modern Mac VLC alternative.", code: "brew install --cask iina", type: "code" },
      { chapter: "Same legal sources", title: "Follow Linux tab", text: "Same stream URLs work.", type: "read" }
    ],
    windows: [
      { chapter: "Player", title: "VLC or Kodi", text: "Both work great on Windows.", code: "winget install VideoLAN.VLC", lang: "powershell", type: "code" },
      { chapter: "Same sources", title: "Follow Linux tab", text: "Same legal streams.", type: "read" }
    ],
    ios: [
      { chapter: "Player", title: "VLC for iOS", text: "Free, plays M3U.", type: "code" },
      { chapter: "Legal apps", title: "Pluto, Tubi, Plex", text: "All on App Store. Free with ads.", type: "read" },
      { title: "Best iOS IPTV app", text: "**IPTVX** — paid but polished. Or **Smarters Player Lite** — free.", type: "tip" }
    ]
  },
  repo: { url: "https://github.com/iptv-org/iptv", label: "iptv-org" }
},

// ========== AI DEEP ==========
{
  id: "langchain-basics", title: "Build AI Apps with LangChain", category: "AI",
  difficulty: "advanced", time: "30 min",
  summary: "The Python framework for building LLM-powered apps.",
  intro: "LangChain is the standard framework for building AI applications. Chains, agents, tools, memory — this tutorial gets you from zero to a working AI app that can search the web and remember conversations.",
  tags: ["ai", "langchain", "python"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Understand chains, agents, tools, memory",
    "Build your first LLM chain",
    "Give it internet access via tools",
    "Add conversation memory"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Install Python + pip", text: "Prerequisites.", code: "sudo apt install python3 python3-pip -y", type: "code" },
      { title: "Create a project", text: "Virtual environment.", code: "mkdir my-langchain-app\ncd my-langchain-app\npython3 -m venv .venv\nsource .venv/bin/activate", type: "code" },
      { title: "Install LangChain", text: "Core + OpenAI (or use Ollama).", code: "pip install langchain langchain-community langchain-openai python-dotenv", type: "code" },
      { title: "For local models (free)", text: "Skip OpenAI, use Ollama instead.", code: "pip install langchain-ollama", type: "code" },

      { chapter: "Your first chain", title: "Basic LLM call", text: "Simple prompt → response.", code: "from langchain_ollama import ChatOllama\n\nllm = ChatOllama(model=\"llama3.2\")\n\nresponse = llm.invoke(\"Explain quantum computing in one sentence\")\nprint(response.content)", lang: "python", type: "code" },
      { title: "Run it", text: "Save as `basic.py` and run.", code: "python basic.py", output: "Quantum computing uses quantum bits that can be in multiple states at once, enabling certain calculations exponentially faster than classical computers.", type: "try" },

      { chapter: "Prompt templates", title: "Reusable prompts", text: "Format prompts with variables.", code: "from langchain_core.prompts import ChatPromptTemplate\nfrom langchain_ollama import ChatOllama\n\nprompt = ChatPromptTemplate.from_messages([\n    (\"system\", \"You are a helpful {role}.\"),\n    (\"user\", \"{question}\")\n])\n\nllm = ChatOllama(model=\"llama3.2\")\nchain = prompt | llm\n\nresult = chain.invoke({\n    \"role\": \"Python tutor\",\n    \"question\": \"What is a list comprehension?\"\n})\nprint(result.content)", lang: "python", type: "code" },
      { title: "The pipe operator", text: "`prompt | llm` is LangChain's chain syntax. Output of prompt feeds into llm.", type: "tip" },

      { chapter: "Tools and agents", title: "Give the AI superpowers", text: "Agents decide which tools to use.", code: "from langchain_community.tools import DuckDuckGoSearchRun\nfrom langchain_ollama import ChatOllama\nfrom langchain.agents import AgentExecutor, create_react_agent\nfrom langchain_core.prompts import PromptTemplate\n\nsearch = DuckDuckGoSearchRun()\ntools = [search]\n\nllm = ChatOllama(model=\"llama3.2\")\n\nprompt = PromptTemplate.from_template(\"\"\"\nAnswer the question. You have access to: {tools}\n\nUse this format:\nQuestion: the input\nThought: what to do\nAction: tool name\nAction Input: input to tool\nObservation: result\n... (repeat as needed)\nThought: I know the answer\nFinal Answer: the answer\n\nQuestion: {input}\n{agent_scratchpad}\n\"\"\")\n\nagent = create_react_agent(llm, tools, prompt)\nexecutor = AgentExecutor(agent=agent, tools=tools, verbose=True)\n\nresult = executor.invoke({\"input\": \"What's the current time in Lagos?\"})\nprint(result[\"output\"])", lang: "python", type: "code" },
      { title: "Watch it think", text: "verbose=True shows the AI's reasoning steps. It decides when to search, reads results, then answers.", type: "read" },

      { chapter: "Conversation memory", title: "Remember the chat", text: "Add memory so the AI remembers context.", code: "from langchain_ollama import ChatOllama\nfrom langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder\nfrom langchain_core.messages import HumanMessage, AIMessage\n\nllm = ChatOllama(model=\"llama3.2\")\nprompt = ChatPromptTemplate.from_messages([\n    (\"system\", \"You are a helpful assistant.\"),\n    MessagesPlaceholder(variable_name=\"history\"),\n    (\"user\", \"{input}\")\n])\n\nchain = prompt | llm\nhistory = []\n\ndef chat(user_input):\n    response = chain.invoke({\"history\": history, \"input\": user_input})\n    history.append(HumanMessage(content=user_input))\n    history.append(AIMessage(content=response.content))\n    return response.content\n\nprint(chat(\"My name is Neo\"))\nprint(chat(\"What's my name?\"))", lang: "python", type: "code" },
      { title: "It remembers", text: "Second call knows you're Neo because history is passed each time.", type: "try" },

      { chapter: "Real app", title: "Combine everything", text: "Tools + memory + custom logic = a real AI assistant. This is how you build:\n• AI chatbots for websites\n• Document Q&A\n• Email assistants\n• Code reviewers", type: "read" },

      { title: "Next steps", text: "• **LangGraph** — for complex multi-agent systems\n• **LangSmith** — debugging and monitoring\n• **Streamlit** — web UI for LangChain apps", type: "tip" },

      { title: "Done", text: "You can build real AI apps now.", type: "read" }
    ],
    mac: [
      { chapter: "Setup", title: "Homebrew Python", text: "Prereq.", code: "brew install python", type: "code" },
      { title: "Follow Linux tab", text: "Same workflow with python3.", type: "read" }
    ],
    windows: [
      { chapter: "Setup", title: "Install Python", text: "Via winget.", code: "winget install Python.Python.3.12", lang: "powershell", type: "code" },
      { title: "Follow Linux tab", text: "Same commands (use python instead of python3 on Windows).", type: "read" }
    ]
  },
  repo: { url: "https://python.langchain.com/", label: "LangChain Docs" }
},

{
  id: "open-webui", title: "Open WebUI: ChatGPT Interface for Ollama", category: "AI",
  difficulty: "beginner", time: "15 min",
  summary: "The best UI for local LLMs — chat, documents, images, all in one.",
  intro: "Open WebUI is a self-hosted ChatGPT alternative. Runs against Ollama or any API. Beautiful interface, supports RAG, image generation, multi-user, and works on phone too.",
  tags: ["ai", "ollama", "openwebui"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Install Open WebUI via Docker",
    "Connect it to Ollama",
    "Use RAG with your documents",
    "Access from phone with HTTPS"
  ],
  steps: {
    linux: [
      { chapter: "Prerequisites", title: "Install Docker", text: "And Ollama.", code: "curl -fsSL https://get.docker.com | sh\ncurl -fsSL https://ollama.com/install.sh | sh", type: "code" },
      { title: "Pull at least one model", text: "Open WebUI needs something to talk to.", code: "ollama pull llama3.2", type: "code" },

      { chapter: "Install Open WebUI", title: "Run via Docker", text: "One command starts everything.", code: "docker run -d \\\n  -p 3000:8080 \\\n  --add-host=host.docker.internal:host-gateway \\\n  -v open-webui:/app/backend/data \\\n  --name open-webui \\\n  --restart always \\\n  ghcr.io/open-webui/open-webui:main", type: "code" },
      { title: "Open it", text: "In a browser:", code: "http://localhost:3000", type: "code" },
      { title: "First user = admin", text: "The first account you create is the admin. Others can be invited.", type: "warn" },

      { chapter: "Connect to Ollama", title: "Automatic if Docker", text: "If Ollama is on the same machine, it connects automatically. If not, set OLLAMA_BASE_URL in Docker env.", code: "-e OLLAMA_BASE_URL=http://host.docker.internal:11434", type: "code" },
      { title: "Select a model", text: "Top-left dropdown → pick your model (e.g. llama3.2). Start chatting.", type: "try" },

      { chapter: "Features", title: "RAG with documents", text: "Drag a PDF into the chat → ask questions about it. Works locally with Ollama embeddings.", type: "code" },
      { title: "Image generation", text: "Connect to Stable Diffusion (Automatic1111 or ComfyUI) in Settings → Images. Generate images from chat.", type: "tip" },
      { title: "Web search", text: "Enable in Settings → Web Search. Choose a backend (SearXNG, DuckDuckGo).", type: "code" },
      { title: "Voice input/output", text: "Built-in speech-to-text and text-to-speech. Works on mobile too.", type: "tip" },
      { title: "Multi-user", text: "Invite others with email addresses. Each gets their own chat history.", type: "read" },

      { chapter: "Access from phone", title: "Local network", text: "Find your server IP:", code: "ip a | grep inet", type: "code" },
      { title: "Then on phone", text: "Visit http://your-server-ip:3000 on your phone's browser. Works like an app.", type: "try" },
      { title: "HTTPS (optional)", text: "Use Caddy to add HTTPS if exposing to internet. See our Caddy tutorial.", type: "tip" },

      { chapter: "Updates", title: "Keep it current", text: "New versions have new features.", code: "docker pull ghcr.io/open-webui/open-webui:main\ndocker restart open-webui", type: "code" },

      { chapter: "Backups", title: "Save your chats", text: "Data lives in the `open-webui` Docker volume. Back it up.", code: "docker run --rm -v open-webui:/data -v $(pwd):/backup alpine tar czf /backup/openwebui-$(date +%F).tar.gz -C /data .", type: "code" },

      { title: "Done", text: "You now have your own ChatGPT — private, free, unlimited.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "Docker Desktop", text: "Install, then same Docker command as Linux.", code: "https://www.docker.com/products/docker-desktop/", type: "code" },
      { title: "Ollama on Mac", text: "Homebrew install.", code: "brew install ollama", type: "code" },
      { chapter: "Same workflow", text: "Follow Linux tab from 'Run via Docker'.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Docker Desktop (WSL2)", text: "Requires WSL2.", code: "https://www.docker.com/products/docker-desktop/", type: "code" },
      { title: "Ollama", text: "Windows installer.", code: "https://ollama.com/download", type: "code" },
      { chapter: "Same workflow", text: "Follow Linux tab.", type: "read" }
    ]
  },
  repo: { url: "https://github.com/open-webui/open-webui", label: "Open WebUI" }
},

// ========== PROGRAMMING DEEP ==========
{
  id: "sql-basics", title: "SQL in 25 Minutes", category: "Programming",
  difficulty: "beginner", time: "25 min",
  summary: "Query databases — the language behind every app.",
  intro: "SQL is how you talk to databases. Every app with data uses it — social media, banking, e-commerce, everything. Learn the 8 commands that cover 90% of real work.",
  tags: ["sql", "database", "programming"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Create tables and insert data",
    "SELECT with WHERE conditions",
    "Sort and limit results",
    "Join tables together"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Install SQLite", text: "Simplest way to practice — no server needed.", code: "sudo apt install sqlite3 -y", type: "code" },
      { title: "Open the shell", text: "Create a test database.", code: "sqlite3 test.db", output: "SQLite version 3.45.0\nEnter \".help\" for usage hints.\nsqlite>", type: "code" },

      { chapter: "Create tables", title: "First table", text: "Users table with id, name, and email.", code: "CREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE,\n  age INTEGER\n);", type: "code" },
      { title: "Second table", text: "Posts table with a foreign key to users.", code: "CREATE TABLE posts (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER,\n  title TEXT,\n  body TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id)\n);", type: "code" },

      { chapter: "Insert data", title: "Add users", text: "Note: strings use single quotes.", code: "INSERT INTO users (name, email, age) VALUES\n  ('Neo', 'neo@example.com', 25),\n  ('Alice', 'alice@example.com', 30),\n  ('Bob', 'bob@example.com', 22);", type: "code" },
      { title: "Add posts", text: "More rows.", code: "INSERT INTO posts (user_id, title, body) VALUES\n  (1, 'First post', 'Hello world!'),\n  (1, 'Second post', 'Learning SQL'),\n  (2, 'Alice writes', 'Hi everyone');", type: "code" },

      { chapter: "SELECT basics", title: "Get everything", text: "The most-used command.", code: "SELECT * FROM users;", output: "1|Neo|neo@example.com|25\n2|Alice|alice@example.com|30\n3|Bob|bob@example.com|22", type: "try" },
      { title: "Specific columns", text: "Only what you need.", code: "SELECT name, email FROM users;", output: "Neo|neo@example.com\nAlice|alice@example.com\nBob|bob@example.com", type: "try" },

      { chapter: "WHERE — filter", title: "Conditional", text: "Filter rows.", code: "SELECT * FROM users WHERE age > 23;", output: "1|Neo|neo@example.com|25\n2|Alice|alice@example.com|30", type: "try" },
      { title: "Multiple conditions", text: "AND / OR.", code: "SELECT * FROM users WHERE age >= 25 AND name != 'Alice';", output: "1|Neo|neo@example.com|25", type: "try" },
      { title: "Pattern matching", text: "LIKE for text.", code: "SELECT * FROM users WHERE email LIKE '%example%';", type: "try" },

      { chapter: "Sorting and limits", title: "ORDER BY", text: "Sort results.", code: "SELECT * FROM users ORDER BY age DESC;", output: "2|Alice|alice@example.com|30\n1|Neo|neo@example.com|25\n3|Bob|bob@example.com|22", type: "try" },
      { title: "LIMIT", text: "Only N rows.", code: "SELECT * FROM users ORDER BY age DESC LIMIT 2;", type: "try" },

      { chapter: "UPDATE and DELETE", title: "Change data", text: "Update a row.", code: "UPDATE users SET age = 26 WHERE name = 'Neo';", type: "code" },
      { title: "Remove a row", text: "Delete carefully — no undo.", code: "DELETE FROM users WHERE name = 'Bob';", type: "code" },
      { title: "⚠️ No WHERE = everything", text: "`DELETE FROM users;` deletes ALL rows. `UPDATE users SET age = 0;` updates all rows. Always use WHERE.", note: { type: "danger", text: "No WHERE clause = all rows affected." }, type: "warn" },

      { chapter: "Joins", title: "Combine tables", text: "Get posts with their author's name.", code: "SELECT users.name, posts.title\nFROM posts\nJOIN users ON posts.user_id = users.id;", output: "Neo|First post\nNeo|Second post\nAlice|Alice writes", type: "try" },
      { title: "Left join", text: "Includes users with no posts.", code: "SELECT users.name, posts.title\nFROM users\nLEFT JOIN posts ON posts.user_id = users.id;", output: "Neo|First post\nNeo|Second post\nAlice|Alice writes", type: "try" },

      { chapter: "Aggregation", title: "COUNT, SUM, AVG", text: "Summarize data.", code: "SELECT COUNT(*) FROM users;\nSELECT AVG(age) FROM users;\nSELECT COUNT(*), user_id FROM posts GROUP BY user_id;", output: "2\n28.0\n2|1\n1|2", type: "try" },

      { chapter: "Practice", title: "More databases", text: "Try these free interactive SQL lessons:\n• **sqlbolt.com** — interactive\n• **sqlzoo.net** — exercises\n• **pgexercises.com** — PostgreSQL", type: "tip" },

      { title: "Done", text: "You know SQL. That's a real job skill.", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Install SQLite in Termux", text: "Works perfectly.", code: "pkg install sqlite -y\nsqlite3 test.db", type: "code" },
      { chapter: "Same commands", title: "Everything works", text: "Follow the Linux tab — identical syntax.", type: "read" },
      { title: "Mobile tip", text: "Use a Bluetooth keyboard for comfortable typing. Or practice on **sqlbolt.com** in your browser.", type: "tip" }
    ],
    mac: [
      { chapter: "Setup", title: "SQLite is pre-installed", text: "No install needed on macOS.", code: "sqlite3 test.db", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ],
    windows: [
      { chapter: "Setup", title: "Install SQLite", text: "Via winget or download.", code: "winget install SQLite.SQLite", lang: "powershell", type: "code" },
      { title: "Or use DB Browser", text: "GUI tool, easier for beginners.", code: "https://sqlitebrowser.org", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ]
  },
  repo: { url: "https://sqlbolt.com", label: "SQLBolt (interactive)" }
},

{
  id: "docker-compose", title: "Docker Compose: Multi-Container Apps", category: "Programming",
  difficulty: "intermediate", time: "25 min",
  summary: "Run full stacks with one command — databases, APIs, reverse proxies.",
  intro: "Real apps need multiple containers: database, backend, frontend, cache. Docker Compose defines them all in one YAML file — `docker compose up` starts everything.",
  tags: ["docker", "compose", "containers", "devops"], platforms: ["linux", "mac", "windows"],
  learnList: [
    "Write a docker-compose.yml",
    "Run a multi-container stack",
    "Manage volumes and networks",
    "Deploy real apps (Nextcloud, WordPress)"
  ],
  steps: {
    linux: [
      { chapter: "Install", title: "Docker + Compose", text: "Compose is now built into Docker.", code: "curl -fsSL https://get.docker.com | sh\ndocker compose version", output: "Docker Compose version v2.24.0", type: "try" },

      { chapter: "Basic compose", title: "Create a project", text: "New folder with compose file.", code: "mkdir my-stack\ncd my-stack\nnano docker-compose.yml", type: "code" },
      { title: "Simplest compose", text: "One service.", code: "services:\n  web:\n    image: nginx:latest\n    ports:\n      - \"8080:80\"", lang: "yaml", type: "code" },
      { title: "Run it", text: "Detached mode.", code: "docker compose up -d", output: "[+] Running 2/2\n ✔ Network my-stack_default  Created\n ✔ Container my-stack-web-1  Started", type: "try" },
      { title: "Visit it", text: "Open http://localhost:8080 — Nginx welcome page.", type: "try" },
      { title: "Stop it", text: "Clean stop.", code: "docker compose down", type: "code" },

      { chapter: "Multi-container", title: "Web + database", text: "Two services that talk to each other.", code: "services:\n  web:\n    image: nginx:latest\n    ports:\n      - \"8080:80\"\n    depends_on:\n      - db\n\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: myapp\n    volumes:\n      - db-data:/var/lib/postgresql/data\n\nvolumes:\n  db-data:", lang: "yaml", type: "code" },
      { title: "Networking is automatic", text: "Each container can reach others by service name. From `web`, `db` resolves to the database container.", type: "tip" },
      { title: "Persistent volumes", text: "`db-data` volume survives container restarts — your database data stays even if you `docker compose down`.", type: "read" },

      { chapter: "Real app: Nextcloud", title: "Complete Nextcloud stack", text: "What our Nextcloud tutorial should have used.", code: "services:\n  db:\n    image: mariadb:11\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: rootpass\n      MYSQL_DATABASE: nextcloud\n      MYSQL_USER: nextcloud\n      MYSQL_PASSWORD: strongpass\n    volumes:\n      - db:/var/lib/mysql\n\n  redis:\n    image: redis:alpine\n    restart: always\n\n  app:\n    image: nextcloud:latest\n    restart: always\n    ports:\n      - \"8080:80\"\n    depends_on:\n      - db\n      - redis\n    environment:\n      MYSQL_HOST: db\n      MYSQL_DATABASE: nextcloud\n      MYSQL_USER: nextcloud\n      MYSQL_PASSWORD: strongpass\n      REDIS_HOST: redis\n    volumes:\n      - nextcloud:/var/www/html\n\nvolumes:\n  db:\n  nextcloud:", lang: "yaml", type: "code" },
      { title: "Run it", text: "This is a full Nextcloud.", code: "docker compose up -d\ndocker compose logs -f app", type: "try" },

      { chapter: "Common commands", title: "Daily workflow", text: "Essential Compose commands.", code: "docker compose up -d           # start everything\ndocker compose down            # stop\nocker compose restart          # restart\ndocker compose logs -f         # follow logs\ndocker compose ps              # list services\ndocker compose pull            # get new images\ndocker compose exec web bash   # shell into service", type: "code" },

      { chapter: "Environment files", title: "Secrets in .env", text: "Don't hardcode passwords. Use `.env`: ", code: "# .env\nDB_PASSWORD=supersecret\nWEB_PORT=8080\n\n# docker-compose.yml uses them:\nservices:\n  db:\n    environment:\n      POSTGRES_PASSWORD: ${DB_PASSWORD}\n  web:\n    ports:\n      - \"${WEB_PORT}:80\"", lang: "yaml", type: "code" },
      { title: "Add .env to gitignore", text: "Never commit `.env` files.", type: "warn" },

      { chapter: "Reverse proxy", title: "Caddy + services", text: "Add HTTPS front-end with one more service.", code: "services:\n  caddy:\n    image: caddy:latest\n    ports:\n      - \"80:80\"\n      - \"443:443\"\n    volumes:\n      - ./Caddyfile:/etc/caddy/Caddyfile\n      - caddy-data:/data\n    restart: always\n\nvolumes:\n  caddy-data:", lang: "yaml", type: "code" },

      { title: "Done", text: "You can now run production stacks with one command.", type: "read" }
    ],
    mac: [
      { chapter: "Install", title: "Docker Desktop", text: "Includes Compose.", code: "brew install --cask docker", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical workflow.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Docker Desktop (WSL2)", text: "Includes Compose.", code: "winget install Docker.DockerDesktop", lang: "powershell", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ]
  },
  repo: { url: "https://docs.docker.com/compose/", label: "Docker Compose" }
},

{
  id: "typescript-basics", title: "TypeScript in 20 Minutes", category: "Programming",
  difficulty: "intermediate", time: "20 min",
  summary: "JavaScript with types — catch bugs before they happen.",
  intro: "TypeScript is JavaScript with type safety. It catches errors at write-time instead of runtime. Every major codebase uses it now — this is the fastest way to learn it.",
  tags: ["typescript", "javascript", "programming"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "Install and run TypeScript",
    "Add types to variables and functions",
    "Use interfaces and generics",
    "Understand how it compiles to JavaScript"
  ],
  steps: {
    linux: [
      { chapter: "Setup", title: "Install Node.js", text: "Prereq.", code: "curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt install nodejs -y", type: "code" },
      { title: "Install TypeScript", text: "Global command.", code: "sudo npm install -g typescript\ntsc --version", output: "Version 5.4.2", type: "try" },

      { chapter: "First file", title: "Create hello.ts", text: "TypeScript files use `.ts`.", code: "function greet(name: string): string {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet(\"Neo\"));\nconsole.log(greet(42));  // ← this will error", lang: "typescript", type: "code" },
      { title: "Compile it", text: "Compiles to plain JavaScript.", code: "tsc hello.ts\ncat hello.js", output: "function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet(\"Neo\"));", type: "try" },
      { title: "The error", text: "Before compiling, TypeScript catches `greet(42)` — argument type mismatch. **This is why it exists.**", type: "read" },

      { chapter: "Basic types", title: "String, number, boolean", text: "Explicit types.", code: "let name: string = \"Neo\";\nlet age: number = 42;\nlet active: boolean = true;\nlet nothing: null = null;\nlet undef: undefined = undefined;", lang: "typescript", type: "code" },
      { title: "Arrays and tuples", text: "Typed arrays.", code: "let names: string[] = [\"a\", \"b\"];\nlet coords: [number, number] = [10, 20];\nlet ids: Array<number> = [1, 2, 3];", lang: "typescript", type: "code" },

      { chapter: "Functions", title: "Parameter types", text: "Every parameter and return value.", code: "function add(a: number, b: number): number {\n  return a + b;\n}\n\nconst multiply = (a: number, b: number): number => a * b;", lang: "typescript", type: "code" },
      { title: "Optional params", text: "`?` makes optional.", code: "function greet(name: string, title?: string): string {\n  return title ? `${title} ${name}` : name;\n}", lang: "typescript", type: "code" },

      { chapter: "Interfaces", title: "Shape of objects", text: "Define what an object should look like.", code: "interface User {\n  id: number;\n  name: string;\n  email: string;\n  age?: number;\n}\n\nconst neo: User = {\n  id: 1,\n  name: \"Neo\",\n  email: \"neo@example.com\"\n};", lang: "typescript", type: "code" },
      { title: "Why it matters", text: "In VS Code, typing `neo.` shows autocomplete for id, name, email. Typos caught instantly.", type: "tip" },

      { chapter: "Type aliases and unions", title: "Custom types", text: "Union types allow multiple options.", code: "type ID = string | number;\n\ntype Status = \"pending\" | \"active\" | \"done\";\n\nfunction processOrder(id: ID, status: Status) {\n  // id can be string or number\n  // status must be one of the three strings\n}", lang: "typescript", type: "code" },

      { chapter: "Generics", title: "Reusable with types", text: "Generic functions work on any type.", code: "function first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\n\nconst n = first([1, 2, 3]);      // n: number\nconst s = first([\"a\", \"b\"]);    // s: string", lang: "typescript", type: "code" },

      { chapter: "tsconfig.json", title: "Project config", text: "Generate a config file for real projects.", code: "tsc --init", type: "code" },
      { title: "Key settings", text: "```json\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"ESNext\",\n    \"strict\": true,\n    \"outDir\": \"./dist\"\n  }\n}\n```\n\n`strict: true` enables all safety checks. Always use it for new projects.", type: "code" },

      { chapter: "Running TypeScript", title: "Without compiling", text: "Use `tsx` or `ts-node` for direct execution.", code: "npm install -g tsx\ntsx hello.ts", type: "code" },

      { title: "Done", text: "You know TypeScript. Now every JS tutorial you read, you can make safer.", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Termux", text: "Node + TypeScript.", code: "pkg install nodejs -y\nnpm install -g typescript\ntsc --version", type: "code" },
      { chapter: "Follow Linux", title: "Same workflow", text: "Identical commands.", type: "read" }
    ],
    mac: [
      { chapter: "Setup", title: "Homebrew Node", text: "Prereq.", code: "brew install node", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ],
    windows: [
      { chapter: "Setup", title: "Node via winget", text: "Prereq.", code: "winget install OpenJS.NodeJS", lang: "powershell", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical (npm commands may need `npm.cmd` on some setups).", type: "read" }
    ]
  },
  repo: { url: "https://www.typescriptlang.org/docs/handbook/intro.html", label: "TypeScript Handbook" }
},

{
  id: "vim-basics", title: "Vim in 15 Minutes", category: "Programming",
  difficulty: "beginner", time: "15 min",
  summary: "The editor you can't exit — until now.",
  intro: "Vim is on every Linux server. Learning the basics means you can edit files on any machine over SSH. This tutorial covers the 30% that gives you 90% of the power.",
  tags: ["vim", "editor", "cli"], platforms: ["linux", "android", "mac", "windows"],
  learnList: [
    "The 3 modes of Vim",
    "Navigate and edit without a mouse",
    "Save, exit, quit-without-saving",
    "Search and replace"
  ],
  steps: {
    linux: [
      { chapter: "Modes", title: "The core concept", text: "Vim has three modes:\n• **Normal mode** — navigation and commands (default)\n• **Insert mode** — typing text\n• **Visual mode** — selecting text\n\nYou'll switch constantly. This is what makes Vim fast.", type: "read" },
      { title: "Open Vim", text: "Any file — or new file.", code: "vim hello.txt", type: "code" },

      { chapter: "The essentials", title: "Enter insert mode", text: "Press `i`. You'll see `-- INSERT --` at the bottom. Now type normally.", code: "Hello, this is my first Vim edit!", type: "try" },
      { title: "Exit insert mode", text: "Press `Esc`. You're back in normal mode.", type: "read" },
      { title: "Save and quit", text: "In normal mode, type `:wq` and Enter.", code: ":wq", output: "File saved. Back in terminal.", type: "try" },
      { title: "Quit without saving", text: "Add `!` to force.", code: ":q!        # quit, discard changes\n:q          # quit if no changes\n:w          # save without quitting\n:wq         # save and quit", type: "code" },

      { chapter: "Movement", title: "Don't use arrow keys", text: "Use `h j k l`:\n\n```\n  k  (up)\nh   l  (left, right)\n  j  (down)\n```", type: "code" },
      { title: "Word movement", text: "Faster than character-by-character.", code: "w       # next word\nb       # previous word\ne       # end of word\n0       # start of line\n$       # end of line\ngg      # top of file\nG       # bottom of file", type: "code" },

      { chapter: "Editing", title: "Common actions", text: "Delete, change, copy, paste.", code: "x       # delete character under cursor\ndd      # delete whole line\nyy      # copy (yank) line\np       # paste below\nyy then p    # duplicate line\ncc      # change whole line\nu       # undo\nCtrl+r  # redo", type: "code" },

      { chapter: "Insert variations", title: "Beyond `i`", text: "Different ways to enter insert mode.", code: "i       # insert before cursor\na       # insert after cursor\nI       # insert at start of line\nA       # insert at end of line\no       # new line below\nu       # undo\nO       # new line above", type: "code" },

      { chapter: "Search", title: "Find in file", text: "Search forward and backward.", code: "/hello         # search for 'hello'\nn              # next match\nN              # previous match", type: "code" },
      { title: "Search and replace", text: "Across the file.", code: ":%s/old/new/g      # replace all in file\n:s/old/new/g       # replace in line", type: "code" },

      { chapter: "Practical", title: "Real workflow", text: "Editing a config file over SSH:\n1. `vim /etc/config.conf`\n2. `/setting` to find the line\n3. `i` to insert, edit\n4. `Esc`, `:wq` to save", type: "code" },

      { chapter: "Escaping Vim", title: "Forgot to sudo?", text: "Classic mistake. Save with sudo anyway:", code: ":w !sudo tee %\n# Then :q!", type: "code" },

      { chapter: "Where to go next", title: "Games and practice", text: "• **vim-adventures.com** — game\n• **openvim.com** — interactive\n• **`:Tutor`** in Vim — built-in tutorial\n• Try **Neovim** when ready — modern fork", type: "tip" },

      { title: "Done", text: "You can now survive on any Linux server. That's the point.", type: "read" }
    ],
    android: [
      { chapter: "Setup", title: "Install in Termux", text: "One command.", code: "pkg install vim -y", type: "code" },
      { chapter: "Same as Linux", title: "Same commands", text: "All the same keys work.", type: "read" },
      { title: "Mobile tip", text: "Install **Hacker's Keyboard** (F-Droid) for proper Esc, Ctrl, and Tab keys.", type: "tip" }
    ],
    mac: [
      { chapter: "Install", title: "Pre-installed", text: "macOS has vim. Or upgrade to newer version.", code: "brew install vim", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ],
    windows: [
      { chapter: "Install", title: "Download or winget", text: "From vim.org.", code: "winget install vim.vim", lang: "powershell", type: "code" },
      { chapter: "Follow Linux", title: "Same commands", text: "Identical.", type: "read" }
    ]
  },
  repo: { url: "https://www.openvim.com/", label: "OpenVim (interactive)" }
}, 

];
