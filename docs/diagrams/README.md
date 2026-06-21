# Diagrams

Editable **draw.io** sources for the backend onboarding docs. Open any `.drawio` file at [app.diagrams.net](https://app.diagrams.net) (File → Open) or with the **Draw.io Integration** VS Code extension. To embed in the markdown, export as SVG/PNG (File → Export As) into this folder and reference the export.

| File | Used by | Shows |
|---|---|---|
| [`01-runtime-hosting-map.drawio`](01-runtime-hosting-map.drawio) | [Ch.1](../01-architecture-overview.md), [Ch.5](../05-scaling-clustering.md) | The full runtime/hosting/scaling map: Cloudflare → DO K8s (SFO3) → 3 tiers → Postgres/Redis → backups → CI/deploy → v2 Pages. |
| [`02-request-routing.drawio`](02-request-routing.drawio) | [Ch.1](../01-architecture-overview.md) | How one browser tab's **four** transports (HTML, GraphQL HTTP, GraphQL WS subs, socket.io) are routed — and why realtime bypasses the web pod. |
| [`03-socket-match-pinning.drawio`](03-socket-match-pinning.drawio) | [Ch.4](../04-boardgameio-sockets.md) | bgio clustering: `matchID` socket.io rooms + match→pod pinning + cookie affinity + the boardgame.io redis-pubsub relay (explicitly **not** a socket.io adapter). |
| [`04-deployment-topology.drawio`](04-deployment-topology.drawio) | [Ch.5](../05-scaling-clustering.md), [Ch.6](../06-devops-deployment.md) | Detailed Kubernetes object topology: Ingress → Services → Deployments (ports, probes, env wiring) → Postgres/Redis → backuper CronJob → GCS. |

Minor diagrams (sequences, ER, isolation graphs) are inline **Mermaid** in the chapters and render directly on GitHub.

> Note: the pre-existing `misc/freeboardgames-architecture.drawio` (the original hand-drawn map) is the seed for `01-runtime-hosting-map.drawio`, updated here with the corrected pub/sub and match-pinning labels.
