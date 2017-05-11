# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
export PATH="$PATH:$HOME/.rvm/bin"

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# get current branch in git repo
# function parse_git_branch() {
# 	BRANCH=`git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'`
# 	if [ ! "${BRANCH}" == "" ]
# 	then
# 		STAT=`parse_git_dirty`
# 		echo "[${BRANCH}${STAT}]"
# 	else
# 		echo ""
# 	fi
# }
#
# # get current status of git repo
# parse_git_branch() {
#      git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
# }
#
# export PS1="\n$(tput bold)\$(parse_git_branch) \e[m \n\[\e[31m\]>\[\e[34m\]>\[\e[35m\]> \[\e[31m\]\w\[\e[34m\] $\[\033[0m\] "

# function _update_ps1() {
#     PS1="$(/Users/dsteinel/Documents/projects/powerline-shell/powerline-shell.py $? 2> /dev/null)"
# }
#
# if [ "$TERM" != "linux" ]; then
#     PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"
# fi


function _update_ps1() {
  PS1="$(/Users/dsteinel/Documents/projects/powerline-shell/powerline-shell.py $? 2> /dev/null)\n \[${yellow}\]→ "
}

if [ "$TERM" != "linux" ]; then
  PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"
fi

PS2="\[${yellow}\]→ \[${reset}\]";
export PS2
