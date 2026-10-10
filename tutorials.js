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
       }
];
