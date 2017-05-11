# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

# Load RVM into a shell session *as a function*
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

# put this one in your profile file. It makes sure GNU binaries are used as replacements for macOS'
# default BSD binaries (/usr/bin/xargs → /usr/local/opt/findutils/libexec/gnubin/xargs)
export PATH="/usr/local/opt/findutils/libexec/gnubin:$PATH"

# NVM default
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

# Alias
alias ll='ls -l'
alias gst='git status'
alias poop='git stash pop'
alias gs='git stash save'
alias gcm='git commit -m'
alias gp='git push'
alias gl='git pull'
alias gco='git checkout'
alias ga='git add'

alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'


# ESPI runserver
alias run='foreman start -f Procfile.dev'

# rb-occasions
# starts everything at once
alias mywings='foreman start -f Procfile.dev'

# start each of the services step-by-step
alias sidekiq='bundle exec sidekiq'
alias redis='redis-server'
alias web='rails s -b 0.0.0.0'
alias web2='rails s -p 3001 -P tmp/pids/server2.pid -b 0.0.0.0'
alias web3='node dev-assets-server.js'
