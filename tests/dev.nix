nix
{ pkgs ? import <nixpkgs> {} }:

let
  devConfig = import ../.idx/dev.nix { inherit pkgs; };
in
pkgs.runCommand "dev-nix-tests"
  {
    buildInputs = [ pkgs.bash pkgs.coreutils ];
  }
  ''
    set -eu
    
    # Check the channel
    if [[ "${devConfig.channel}" != "stable-24.05" ]]; then
      echo "ERROR: Channel is not stable-24.05"
      exit 1
    fi

    # Check packages
    if ! grep -q "pkgs.nodejs_20" <<< "${devConfig.packages}"; then
      echo "ERROR: packages does not contain pkgs.nodejs_20"
      exit 1
    fi

    # Check extensions
    if ! grep -q "svelte.svelte-vscode" <<< "${devConfig.idx.extensions}"; then
      echo "ERROR: extensions does not contain svelte.svelte-vscode"
      exit 1
    fi
    if ! grep -q "vue.volar" <<< "${devConfig.idx.extensions}"; then
      echo "ERROR: extensions does not contain vue.volar"
      exit 1
    fi

    # Check previews
    if [[ -z "${devConfig.idx.previews.previews.web}" ]]; then
      echo "ERROR: web preview does not exist"
      exit 1
    fi

    # Check web preview command
    expected_command='["npm" "run" "dev" "--" "--port" "$PORT" "--host" "0.0.0.0"]'
    actual_command=$(echo "${devConfig.idx.previews.previews.web.command}" | jq -c .)
    if [[ "$actual_command" != "$expected_command" ]]; then
        echo "ERROR: web preview command does not match"
        echo "Expected: $expected_command"
        echo "Actual: $actual_command"
        exit 1
    fi

    #check web preview manager
    if [[ "${devConfig.idx.previews.previews.web.manager}" != "web" ]]; then
        echo "ERROR: web preview manager is not web"
        exit 1
    fi

    touch $out
  ''