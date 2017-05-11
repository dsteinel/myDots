// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"Roboto Mono for Powerline", "Meslo LG S for Powerline", serif',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',
    cursorBlink: true, // set to true for blinking cursor
    foregroundColor: '#fff', // color of the text
    backgroundColor: '#000', // terminal background color
    borderColor: '#fff', // border color (window, tabs
    css: `
      .term_fit:not(.term_term) { opacity: .6; }
      .term_fit.term_active {
        opacity: 1;
        transition: opacity 0.12s ease-in-out;
        will-change: opacity;
      }
    `,

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: 'rgba(46, 46, 46, 1)',
      red: 'rgba(236, 35, 66, 1)',
      green: 'rgba(130, 188, 51, 1)',
      yellow: 'rgba(255, 195, 45, 1)',
      blue: 'rgba(52, 100, 163, 1)',
      magenta: 'rgba(229, 23, 113, 1)',
      cyan: 'rgba(25, 163, 162, 1)',
      white: 'rgba(248, 249, 254, 1)',
      lightBlack: 'rgba(87, 75, 79, 1)',
      lightRed: 'rgba(210, 55, 75, 1)',
      lightGreen: 'rgba(138, 215, 177, 1)',
      lightYellow: 'rgba(254, 217, 105, 1)',
      lightBlue: 'rgba(29, 174, 237, 1)',
      lightMagenta: 'rgba(254, 188, 208, 1)',
      lightCyan: 'rgba(128, 235, 252, 1)',
      lightWhite: 'rgba(243, 243, 243, 1)'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: true

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },
  plugins: [
    'hyperlinks',
    'hypercwd',
    "hyper-statusline",
    "hyperlayout",
    "hyperterm-alternatescroll",
    "hyper-tab-icons",
    "hyper-simple-vibrancy",
    'hyper-papercolor'
    // "hyper-material"
    // "hyper-one-light"

  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};

