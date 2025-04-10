## Architecture

The following sequence diagrams represent the ui interactions

<div hidden>

```
@startuml diagram

ClientPC -> Server: website request 
Server -> BunFrontend: Cookies/SessionToken
BunFrontend -> RustBackend: req session data
Server <- BunFrontend: load base UI
ClientPC <- Server: base UI 
BunFrontend <- RustBackend: res session data
Server <- BunFrontend: load session UI
ClientPC <- Server: session UI 



@enduml
```

</div>

![](diagram.svg)

The following sequence diagram represents backend database flow for the UP api integration


<div hidden>

```
@startuml backend

database    Database as db
participant RustBackend as rb
collections  UpAPIs as up

rb -> db: querySession
db -> rb: auth=true, refreshtime
rb -> rb: time >= refreshtime
rb -> up: req refresh: accounts, transactions
rb <- up: res accounts, transactions
rb -> db: store accounts, transactions




@enduml
```

</div>

![](backend.svg)