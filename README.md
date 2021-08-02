# Beispiel für Microfrontend Architektur

Dieses Repository enthält eine App mit einer beispielhaften Microfrontend-Architektur zur Begleitung unseres Webinars.

Bei der App handelt es sich um *articler*, eine Website zum publizieren von Artikeln jeglicher Art.

## Aufbau der App

Die App besteht aus einer zentralen `container-app`, die zwei Microfrontends `article-overview` (Artikelübersichtsseite) und `article-page` (die eigentliche Artikelseite) integriert.

Die **container-app** kümmert sich um die so genannten **Cross-Cutting-Concerns** wie Navigation, Header, Footer und natürlich die Integration der Microfrontends.

Die Integration der beiden Microfrontends ist auf zwei Arten implementiert, um die jeweiligen Unterschiede darzustellen. Diese sind:

1. **IFrame-Integration**: Wie der Name sagt werden die Microfrontends als eigenständige Apps gestartet und dann in der **container-app** als **IFrame** eingebunden.
2. **Script-Integration**: Hier exportieren die Microfrontends lediglich eine JavaScript Datei mit einer render-Funktion, welche die id eines Ziel-Containers im DOM empfängt. Die **container-app** lädt die Skript-Datei entsprechend führt dann die render-Funktion aus und übergibt eben das Ziel im DOM, um das Microfrontend an der richtigen Stelle darzustellen.

## Start

### Vorraussetzungen

Auf dem System werden folgende Installationen benötigt:

- Node.js (> Version 12)
- npm (> Version 6)

### Installation der Abhängigkeiten

Vor dem ersten Start müssen alle Abhängigkeiten in allen Microfrontends einmalig installiert werden. Das geht ganz einfach mit einem Terminal, in welchem per `cd` in das Projekt-Verzeichnis navigiert und dann folgendes ausgeführt wird:

```shell
$ npm install
```

*Hinweis: Die Abhängigkeiten in allen Subordnern werden automatisch mitinstalliert, da in der `package.json` auf root Ebene ein `postinstall`-Schritt hinterlegt ist.*

### Starten der App(s)

Je nach gewünschter Integrationsart kann die App dann (ebenfalls im Terminal) wie folgt gestarted werden.

- Starten der App mit **IFrame-Integration**:

```shell
$ npm run start:iframe
```

- Start der App mit **Script-Integration**:

```shell
$ npm run start:script
```

### Funktionsweise

Die Start-Commands starten die folgenden Services die dann unter den Adressen verfügbar sind:

- Container-App: <http://localhost:8080>
- Article-Overview: <http://localhost:8081>
- Article-Page: <http://localhost:8082>
- Mock-JSON-Backend: <http://localhost:7999>

Zum Öffnen der App genügt der Aufruf der Container-App, also <localhost:8080> (dies sollte nach dem Start aber auch automatisch passiern).

Zum Beenden der App einfach \<STRG + C\> drücken.
