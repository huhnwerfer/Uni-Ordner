# How to: Python

Hier erhalten Sie unterstützende Ressourcen und Anweisungen zur Installation und Verwendung von Python, VSCode und des virtual environment manager venv. Es steht Ihnen frei, andere Tools zu nutzen.

- [How to: Python](#how-to-python)
  - [Python installieren](#python-installieren)
    - [Windows](#windows)
    - [Mac](#mac)
    - [Linux](#linux)
    - [Überprüfung](#überprüfung)
  - [Visual Studio Code installieren](#visual-studio-code-installieren)
  - [Virtual Environments](#virtual-environments)
  - [Beispiel: Installation von Packages](#beispiel-installation-von-packages)

## Python installieren

Ausführliche Anweisungen zur Installation von Python finden Sie in den jeweiligen offiziellen Ressourcen, welche hier gesammelt sind. Alternativ bereitet dieser Blogpost eine Sammlung von Anleitungen zur Python Installation je nach System auf: [realpython.com](https://realpython.com/installing-python/#linux-how-to-build-python-from-source-code)  
Wir haben nicht alle dieser Befehle kontrolliert!

**Wichtig:** Damit Sie Python frei nutzen können, muss es im PATH vermerkt werden. Die Installer bieten diese Option an.

### Windows

Wir empfehlen zur Installation von Python auf Windows die Verwendung des **Windows Installers** von der Python Webseite: [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)  
Alternativ über den **Windows Store**: [Microsoft Anleitung](https://learn.microsoft.com/de-de/windows/python/beginners#install-python)

### Mac

Nutzen Sie den Package Manager **brew**:  
`brew install python`  
Oder den offiziellen **Mac Installer**: [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)

### Linux

Die Installation hängt vom verwendeten Package Manager ab. Anleitungen: [https://docs.python.org/3/using/unix.html](https://docs.python.org/3/using/unix.html)  
Eine manuelle Installation ist ebenfalls möglich.

### Überprüfung

Über die Konsole prüfen mit:  
`python3 --version` oder `python --version`  
Falls keine Ausgabe erscheint, liegt es oft an der fehlenden **PATH Variable**. Starten Sie den Rechner neu oder setzen Sie die Variable manuell.

## Visual Studio Code installieren

Visual Studio Code kann über Package Manager oder den Installer heruntergeladen werden: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)  
Quickstart: [VSCode Quickstart](https://code.visualstudio.com/docs/getstarted/getting-started)  
Python-Extensions: [VSCode Python Start](https://code.visualstudio.com/docs/python/python-quick-start)

## Virtual Environments

Installieren Sie keine Python-Packages global. Nutzen Sie stattdessen `venv` oder `virtualenv`.

Wenn `venv` installiert ist, gibt `python3 -m venv` oder `python -m venv` aus, dass ein Environment-Verzeichnis benötigt wird. 

Installationsanleitung: [Virtualenv](https://virtualenv.pypa.io/en/latest/installation.html)  

Nutzung von venv und Pip: [Python Packaging Guide](https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/#create-and-use-virtual-environments)

## Beispiel: Installation von Packages

Aktivieren Sie Ihr virtuelles Environment:

**Unix/MacOS**  
`source {path/to/env}/bin/activate`

**Windows**  
`{path\to\env}\Scripts\activate`

Installieren Sie Numpy, Pandas und Jupyter:

**Unix/MacOS**  
`python3 -m pip install numpy`\*  
`python3 -m pip install pandas`\*  
`python3 -m pip install jupyter`\*

**Windows**  
`py -m pip install numpy`\*  
`py -m pip install pandas`\*  
`py -m pip install jupyter`\*

_\* Je nach Installation kann `python`, `py` oder `python3` erforderlich sein._