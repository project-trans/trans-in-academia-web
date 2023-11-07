{ pkgs ? <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs;[
    nodejs
    nodePackages.vue-cli
  ];
  shellHook = ''
    mkdir -p $TMPDIR/bin
    corepack enable --install-directory=$TMPDIR/bin
    export PATH=$TMPDIR/bin:$PATH
  '';
}
