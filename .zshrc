
export PATH="/usr/local/bin:$PATH"    # arm64e homebrew path (m1   )
export PATH="/opt/homebrew/bin:$PATH" # x86_64 homebrew path (intel)

alias mbrew="arch -arm64e /opt/homebrew/bin/brew" # arm64e homebrew path (m1   )
alias ibrew="arch -x86_64 /usr/local/bin/brew"    # x86_64 homebrew path (intel)

export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="agnoster"

"~/.zshrc" 138L, 5211B

plugins=(git)

source $ZSH/oh-my-zsh.sh

export NVM_DIR=~/.nvm

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

export LDFLAGS="-L/usr/local/opt/zlib/lib"
export CPPFLAGS="-I/usr/local/opt/zlib/include"

export LDFLAGS="-L/usr/local/opt/sqlite/lib"
export CPPFLAGS="-I/usr/local/opt/sqlite/include"

export LDFLAGS="-L/usr/local/opt/readline/lib"
export CPPFLAGS="-I/usr/local/opt/readline/include"
:
export PKG_CONFIG_PATH="/usr/local/opt/zlib/lib/pkgconfig"
export PKG_CONFIG_PATH="/usr/local/opt/sqlite/lib/pkgconfig"
export PKG_CONFIG_PATH="/usr/local/opt/zlib/lib/pkgconfig"

export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"
export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"

export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@1.1/lib/pkgconfig"

export CXX=g++