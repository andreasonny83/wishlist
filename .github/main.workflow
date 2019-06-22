workflow "IDENTIFIER" {
  on = "EVENT"
  resolves = "ACTION2"
}

action "ACTION1" {
  uses = "docker://image2"
}

action "ACTION2" {
  needs = "ACTION1"
  uses = "docker://image2"
}
