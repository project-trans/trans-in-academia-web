{ pkgs ? <nixpkgs> { } }:
pkgs.mkShell {
  buildInputs = with pkgs;[
    nodejs
    corepack
  ];
  shellHook = ''
  '';
}
