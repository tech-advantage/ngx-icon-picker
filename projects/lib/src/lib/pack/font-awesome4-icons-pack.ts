import {Icon} from '../icon';
import {IconsPack} from '../icons-pack';

export class FontAwesome4IconsPack implements IconsPack {
  public getIcons(): Icon[] {
    return [
      {
        name: 'Glass',
        id: 'glass',
        filter: [
          'martini',
          'drink',
          'bar',
          'alcohol',
          'liquor'
        ]
      },
      {
        name: 'Music',
        id: 'music',
        filter: [
          'note',
          'sound'
        ]
      },
      {
        name: 'Search',
        id: 'search',
        filter: [
          'magnify',
          'zoom',
          'enlarge',
          'bigger'
        ]
      },
      {
        name: 'Envelope Outlined',
        id: 'envelope-o',
        filter: [
          'email',
          'e-mail',
          'letter',
          'support',
          'mail',
          'message',
          'notification'
        ]
      },
      {
        name: 'Heart',
        id: 'heart',
        filter: [
          'love',
          'like',
          'favorite'
        ]
      },
      {
        name: 'Star',
        id: 'star',
        filter: [
          'award',
          'achievement',
          'night',
          'rating',
          'score',
          'favorite'
        ]
      },
      {
        name: 'Star Outlined',
        id: 'star-o',
        filter: [
          'award',
          'achievement',
          'night',
          'rating',
          'score',
          'favorite'
        ]
      },
      {
        name: 'User',
        id: 'user',
        filter: [
          'person',
          'man',
          'head',
          'profile'
        ]
      },
      {
        name: 'Film',
        id: 'film',
        filter: [
          'movie'
        ]
      },
      {
        name: 'th-large',
        id: 'th-large',
        filter: [
          'blocks',
          'squares',
          'boxes',
          'grid'
        ]
      },
      {
        name: 'th',
        id: 'th',
        filter: [
          'blocks',
          'squares',
          'boxes',
          'grid'
        ]
      },
      {
        name: 'th-list',
        id: 'th-list',
        filter: [
          'ul',
          'ol',
          'checklist',
          'finished',
          'completed',
          'done',
          'todo'
        ]
      },
      {
        name: 'Check',
        id: 'check',
        filter: [
          'checkmark',
          'done',
          'todo',
          'agree',
          'accept',
          'confirm',
          'tick',
          'ok'
        ]
      },
      {
        name: 'Times',
        id: 'times',
        aliases: [
          'remove',
          'close'
        ],
        filter: [
          'close',
          'exit',
          'x',
          'cross'
        ]
      },
      {
        name: 'Search Plus',
        id: 'search-plus',
        filter: [
          'magnify',
          'zoom',
          'enlarge',
          'bigger'
        ]
      },
      {
        name: 'Search Minus',
        id: 'search-minus',
        filter: [
          'magnify',
          'minify',
          'zoom',
          'smaller'
        ]
      },
      {
        name: 'Power Off',
        id: 'power-off',
        filter: [
          'on'
        ]
      },
      {
        name: 'signal',
        id: 'signal',
        filter: [
          'graph',
          'bars'
        ]
      },
      {
        name: 'cog',
        id: 'cog',
        filter: [
          'settings'
        ],
        aliases: [
          'gear'
        ]
      },
      {
        name: 'Trash Outlined',
        id: 'trash-o',
        filter: [
          'garbage',
          'delete',
          'remove',
          'trash',
          'hide'
        ]
      },
      {
        name: 'home',
        id: 'home',
        filter: [
          'main',
          'house'
        ]
      },
      {
        name: 'File Outlined',
        id: 'file-o',
        filter: [
          'new',
          'page',
          'pdf',
          'document'
        ]
      },
      {
        name: 'Clock Outlined',
        id: 'clock-o',
        filter: [
          'watch',
          'timer',
          'late',
          'timestamp'
        ]
      },
      {
        name: 'road',
        id: 'road',
        filter: [
          'street'
        ]
      },
      {
        name: 'Download',
        id: 'download',
        filter: [
          'import'
        ]
      },
      {
        name: 'Arrow Circle Outlined Down',
        id: 'arrow-circle-o-down',
        filter: [
          'download'
        ]
      },
      {
        name: 'Arrow Circle Outlined Up',
        id: 'arrow-circle-o-up'
      },
      {
        name: 'inbox',
        id: 'inbox'
      },
      {
        name: 'Play Circle Outlined',
        id: 'play-circle-o'
      },
      {
        name: 'Repeat',
        id: 'repeat',
        filter: [
          'redo',
          'forward'
        ],
        aliases: [
          'rotate-right'
        ]
      },
      {
        name: 'refresh',
        id: 'refresh',
        filter: [
          'reload',
          'sync'
        ]
      },
      {
        name: 'list-alt',
        id: 'list-alt',
        filter: [
          'ul',
          'ol',
          'checklist',
          'finished',
          'completed',
          'done',
          'todo'
        ]
      },
      {
        name: 'lock',
        id: 'lock',
        filter: [
          'protect',
          'admin',
          'security'
        ]
      },
      {
        name: 'flag',
        id: 'flag',
        filter: [
          'report',
          'notification',
          'notify'
        ]
      },
      {
        name: 'headphones',
        id: 'headphones',
        filter: [
          'sound',
          'listen',
          'music',
          'audio'
        ]
      },
      {
        name: 'volume-off',
        id: 'volume-off',
        filter: [
          'audio',
          'mute',
          'sound',
          'music'
        ]
      },
      {
        name: 'volume-down',
        id: 'volume-down',
        filter: [
          'audio',
          'lower',
          'quieter',
          'sound',
          'music'
        ]
      },
      {
        name: 'volume-up',
        id: 'volume-up',
        filter: [
          'audio',
          'higher',
          'louder',
          'sound',
          'music'
        ]
      },
      {
        name: 'qrcode',
        id: 'qrcode',
        filter: [
          'scan'
        ]
      },
      {
        name: 'barcode',
        id: 'barcode',
        filter: [
          'scan'
        ]
      },
      {
        name: 'tag',
        id: 'tag',
        filter: [
          'label'
        ]
      },
      {
        name: 'tags',
        id: 'tags',
        filter: [
          'labels'
        ]
      },
      {
        name: 'book',
        id: 'book',
        filter: [
          'read',
          'documentation'
        ]
      },
      {
        name: 'bookmark',
        id: 'bookmark',
        filter: [
          'save'
        ]
      },
      {
        name: 'print',
        id: 'print'
      },
      {
        name: 'camera',
        id: 'camera',
        filter: [
          'photo',
          'picture',
          'record'
        ]
      },
      {
        name: 'font',
        id: 'font',
        filter: [
          'text'
        ]
      },
      {
        name: 'bold',
        id: 'bold'
      },
      {
        name: 'italic',
        id: 'italic',
        filter: [
          'italics'
        ]
      },
      {
        name: 'text-height',
        id: 'text-height'
      },
      {
        name: 'text-width',
        id: 'text-width'
      },
      {
        name: 'align-left',
        id: 'align-left',
        filter: [
          'text'
        ]
      },
      {
        name: 'align-center',
        id: 'align-center',
        filter: [
          'middle',
          'text'
        ]
      },
      {
        name: 'align-right',
        id: 'align-right',
        filter: [
          'text'
        ]
      },
      {
        name: 'align-justify',
        id: 'align-justify',
        filter: [
          'text'
        ]
      },
      {
        name: 'list',
        id: 'list',
        filter: [
          'ul',
          'ol',
          'checklist',
          'finished',
          'completed',
          'done',
          'todo'
        ]
      },
      {
        name: 'Outdent',
        id: 'outdent',
        aliases: [
          'dedent'
        ]
      },
      {
        name: 'Indent',
        id: 'indent'
      },
      {
        name: 'Video Camera',
        id: 'video-camera',
        filter: [
          'film',
          'movie',
          'record'
        ]
      },
      {
        name: 'Picture Outlined',
        id: 'picture-o',
        aliases: [
          'photo',
          'image'
        ]
      },
      {
        name: 'pencil',
        id: 'pencil',
        filter: [
          'write',
          'edit',
          'update'
        ]
      },
      {
        name: 'map-marker',
        id: 'map-marker',
        filter: [
          'map',
          'pin',
          'location',
          'coordinates',
          'localize',
          'address',
          'travel',
          'where',
          'place'
        ]
      },
      {
        name: 'adjust',
        id: 'adjust',
        filter: [
          'contrast'
        ]
      },
      {
        name: 'tint',
        id: 'tint',
        filter: [
          'raindrop',
          'waterdrop',
          'drop',
          'droplet'
        ]
      },
      {
        name: 'Pencil Square Outlined',
        id: 'pencil-square-o',
        filter: [
          'write',
          'edit',
          'update'
        ],
        aliases: [
          'edit'
        ]
      },
      {
        name: 'Share Square Outlined',
        id: 'share-square-o',
        filter: [
          'social',
          'send',
          'arrow'
        ]
      },
      {
        name: 'Check Square Outlined',
        id: 'check-square-o',
        filter: [
          'todo',
          'done',
          'agree',
          'accept',
          'confirm',
          'ok'
        ]
      },
      {
        name: 'Arrows',
        id: 'arrows',
        filter: [
          'move',
          'reorder',
          'resize'
        ]
      },
      {
        name: 'step-backward',
        id: 'step-backward',
        filter: [
          'rewind',
          'previous',
          'beginning',
          'start',
          'first'
        ]
      },
      {
        name: 'fast-backward',
        id: 'fast-backward',
        filter: [
          'rewind',
          'previous',
          'beginning',
          'start',
          'first'
        ]
      },
      {
        name: 'backward',
        id: 'backward',
        filter: [
          'rewind',
          'previous'
        ]
      },
      {
        name: 'play',
        id: 'play',
        filter: [
          'start',
          'playing',
          'music',
          'sound'
        ]
      },
      {
        name: 'pause',
        id: 'pause',
        filter: [
          'wait'
        ]
      },
      {
        name: 'stop',
        id: 'stop',
        filter: [
          'block',
          'box',
          'square'
        ]
      },
      {
        name: 'forward',
        id: 'forward',
        filter: [
          'forward',
          'next'
        ]
      },
      {
        name: 'fast-forward',
        id: 'fast-forward',
        filter: [
          'next',
          'end',
          'last'
        ]
      },
      {
        name: 'step-forward',
        id: 'step-forward',
        filter: [
          'next',
          'end',
          'last'
        ]
      },
      {
        name: 'eject',
        id: 'eject'
      },
      {
        name: 'chevron-left',
        id: 'chevron-left',
        filter: [
          'bracket',
          'previous',
          'back'
        ]
      },
      {
        name: 'chevron-right',
        id: 'chevron-right',
        filter: [
          'bracket',
          'next',
          'forward'
        ]
      },
      {
        name: 'Plus Circle',
        id: 'plus-circle',
        filter: [
          'add',
          'new',
          'create',
          'expand'
        ]
      },
      {
        name: 'Minus Circle',
        id: 'minus-circle',
        filter: [
          'delete',
          'remove',
          'trash',
          'hide'
        ]
      },
      {
        name: 'Times Circle',
        id: 'times-circle',
        filter: [
          'close',
          'exit',
          'x'
        ]
      },
      {
        name: 'Check Circle',
        id: 'check-circle',
        filter: [
          'todo',
          'done',
          'agree',
          'accept',
          'confirm',
          'ok'
        ]
      },
      {
        name: 'Question Circle',
        id: 'question-circle',
        filter: [
          'help',
          'information',
          'unknown',
          'support'
        ]
      },
      {
        name: 'Info Circle',
        id: 'info-circle',
        filter: [
          'help',
          'information',
          'more',
          'details'
        ]
      },
      {
        name: 'Crosshairs',
        id: 'crosshairs',
        filter: [
          'picker'
        ]
      },
      {
        name: 'Times Circle Outlined',
        id: 'times-circle-o',
        filter: [
          'close',
          'exit',
          'x'
        ]
      },
      {
        name: 'Check Circle Outlined',
        id: 'check-circle-o',
        filter: [
          'todo',
          'done',
          'agree',
          'accept',
          'confirm',
          'ok'
        ]
      },
      {
        name: 'ban',
        id: 'ban',
        filter: [
          'delete',
          'remove',
          'trash',
          'hide',
          'block',
          'stop',
          'abort',
          'cancel'
        ]
      },
      {
        name: 'arrow-left',
        id: 'arrow-left',
        filter: [
          'previous',
          'back'
        ]
      },
      {
        name: 'arrow-right',
        id: 'arrow-right',
        filter: [
          'next',
          'forward'
        ]
      },
      {
        name: 'arrow-up',
        id: 'arrow-up'
      },
      {
        name: 'arrow-down',
        id: 'arrow-down',
        filter: [
          'download'
        ]
      },
      {
        name: 'Share',
        id: 'share',
        aliases: [
          'mail-forward'
        ]
      },
      {
        name: 'Expand',
        id: 'expand',
        filter: [
          'enlarge',
          'bigger',
          'resize'
        ]
      },
      {
        name: 'Compress',
        id: 'compress',
        filter: [
          'collapse',
          'combine',
          'contract',
          'merge',
          'smaller'
        ]
      },
      {
        name: 'plus',
        id: 'plus',
        filter: [
          'add',
          'new',
          'create',
          'expand'
        ]
      },
      {
        name: 'minus',
        id: 'minus',
        filter: [
          'hide',
          'minify',
          'delete',
          'remove',
          'trash',
          'hide',
          'collapse'
        ]
      },
      {
        name: 'asterisk',
        id: 'asterisk',
        filter: [
          'details'
        ]
      },
      {
        name: 'Exclamation Circle',
        id: 'exclamation-circle',
        filter: [
          'warning',
          'error',
          'problem',
          'notification',
          'alert'
        ]
      },
      {
        name: 'gift',
        id: 'gift',
        filter: [
          'present'
        ]
      },
      {
        name: 'leaf',
        id: 'leaf',
        filter: [
          'eco',
          'nature',
          'plant'
        ]
      },
      {
        name: 'fire',
        id: 'fire',
        filter: [
          'flame',
          'hot',
          'popular'
        ]
      },
      {
        name: 'Eye',
        id: 'eye',
        filter: [
          'show',
          'visible',
          'views'
        ]
      },
      {
        name: 'Eye Slash',
        id: 'eye-slash',
        filter: [
          'toggle',
          'show',
          'hide',
          'visible',
          'visiblity',
          'views'
        ]
      },
      {
        name: 'Exclamation Triangle',
        id: 'exclamation-triangle',
        filter: [
          'warning',
          'error',
          'problem',
          'notification',
          'alert'
        ],
        aliases: [
          'warning'
        ]
      },
      {
        name: 'plane',
        id: 'plane',
        filter: [
          'travel',
          'trip',
          'location',
          'destination',
          'airplane',
          'fly',
          'mode'
        ]
      },
      {
        name: 'calendar',
        id: 'calendar',
        filter: [
          'date',
          'time',
          'when',
          'event'
        ]
      },
      {
        name: 'random',
        id: 'random',
        filter: [
          'sort',
          'shuffle'
        ]
      },
      {
        name: 'comment',
        id: 'comment',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'magnet',
        id: 'magnet'
      },
      {
        name: 'chevron-up',
        id: 'chevron-up'
      },
      {
        name: 'chevron-down',
        id: 'chevron-down'
      },
      {
        name: 'retweet',
        id: 'retweet',
        filter: [
          'refresh',
          'reload',
          'share'
        ]
      },
      {
        name: 'shopping-cart',
        id: 'shopping-cart',
        filter: [
          'checkout',
          'buy',
          'purchase',
          'payment'
        ]
      },
      {
        name: 'Folder',
        id: 'folder'
      },
      {
        name: 'Folder Open',
        id: 'folder-open'
      },
      {
        name: 'Arrows Vertical',
        id: 'arrows-v',
        filter: [
          'resize'
        ]
      },
      {
        name: 'Arrows Horizontal',
        id: 'arrows-h',
        filter: [
          'resize'
        ]
      },
      {
        name: 'Bar Chart',
        id: 'bar-chart',
        aliases: [
          'bar-chart-o'
        ],
        filter: [
          'graph',
          'analytics'
        ]
      },
      {
        name: 'Twitter Square',
        id: 'twitter-square',
        filter: [
          'tweet',
          'social network'
        ]
      },
      {
        name: 'Facebook Square',
        id: 'facebook-square',
        filter: [
          'social network'
        ]
      },
      {
        name: 'camera-retro',
        id: 'camera-retro',
        filter: [
          'photo',
          'picture',
          'record'
        ]
      },
      {
        name: 'key',
        id: 'key',
        filter: [
          'unlock',
          'password'
        ]
      },
      {
        name: 'cogs',
        id: 'cogs',
        aliases: [
          'gears'
        ],
        filter: [
          'settings'
        ]
      },
      {
        name: 'comments',
        id: 'comments',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'Thumbs Up Outlined',
        id: 'thumbs-o-up',
        filter: [
          'like',
          'approve',
          'favorite',
          'agree',
          'hand'
        ]
      },
      {
        name: 'Thumbs Down Outlined',
        id: 'thumbs-o-down',
        filter: [
          'dislike',
          'disapprove',
          'disagree',
          'hand'
        ]
      },
      {
        name: 'star-half',
        id: 'star-half',
        filter: [
          'award',
          'achievement',
          'rating',
          'score'
        ]
      },
      {
        name: 'Heart Outlined',
        id: 'heart-o',
        filter: [
          'love',
          'like',
          'favorite'
        ]
      },
      {
        name: 'Sign Out',
        id: 'sign-out',
        filter: [
          'log out',
          'logout',
          'leave',
          'exit',
          'arrow'
        ]
      },
      {
        name: 'LinkedIn Square',
        id: 'linkedin-square'
      },
      {
        name: 'Thumb Tack',
        id: 'thumb-tack',
        filter: [
          'marker',
          'pin',
          'location',
          'coordinates'
        ]
      },
      {
        name: 'External Link',
        id: 'external-link',
        filter: [
          'open',
          'new'
        ]
      },
      {
        name: 'Sign In',
        id: 'sign-in',
        filter: [
          'enter',
          'join',
          'log in',
          'login',
          'sign up',
          'sign in',
          'signin',
          'signup',
          'arrow'
        ]
      },
      {
        name: 'trophy',
        id: 'trophy',
        filter: [
          'award',
          'achievement',
          'cup',
          'winner',
          'game'
        ]
      },
      {
        name: 'GitHub Square',
        id: 'github-square',
        filter: [
          'octocat'
        ]
      },
      {
        name: 'Upload',
        id: 'upload',
        filter: [
          'import'
        ]
      },
      {
        name: 'Lemon Outlined',
        id: 'lemon-o',
        filter: [
          'food'
        ]
      },
      {
        name: 'Phone',
        id: 'phone',
        filter: [
          'call',
          'voice',
          'number',
          'support',
          'earphone',
          'telephone'
        ]
      },
      {
        name: 'Square Outlined',
        id: 'square-o',
        filter: [
          'block',
          'square',
          'box'
        ]
      },
      {
        name: 'Bookmark Outlined',
        id: 'bookmark-o',
        filter: [
          'save'
        ]
      },
      {
        name: 'Phone Square',
        id: 'phone-square',
        filter: [
          'call',
          'voice',
          'number',
          'support',
          'telephone'
        ]
      },
      {
        name: 'Twitter',
        id: 'twitter',
        filter: [
          'tweet',
          'social network'
        ]
      },
      {
        name: 'Facebook',
        id: 'facebook',
        aliases: [
          'facebook-f'
        ],
        filter: [
          'social network'
        ]
      },
      {
        name: 'GitHub',
        id: 'github',
        filter: [
          'octocat'
        ]
      },
      {
        name: 'unlock',
        id: 'unlock',
        filter: [
          'protect',
          'admin',
          'password',
          'lock'
        ]
      },
      {
        name: 'credit-card',
        id: 'credit-card',
        filter: [
          'money',
          'buy',
          'debit',
          'checkout',
          'purchase',
          'payment'
        ]
      },
      {
        name: 'rss',
        id: 'rss',
        filter: [
          'blog'
        ],
        aliases: [
          'feed'
        ]
      },
      {
        name: 'HDD',
        id: 'hdd-o',
        filter: [
          'harddrive',
          'hard drive',
          'storage',
          'save'
        ]
      },
      {
        name: 'bullhorn',
        id: 'bullhorn',
        filter: [
          'announcement',
          'share',
          'broadcast',
          'louder',
          'megaphone'
        ]
      },
      {
        name: 'bell',
        id: 'bell',
        filter: [
          'alert',
          'reminder',
          'notification'
        ]
      },
      {
        name: 'certificate',
        id: 'certificate',
        filter: [
          'badge',
          'star'
        ]
      },
      {
        name: 'Hand Outlined Right',
        id: 'hand-o-right',
        filter: [
          'point',
          'right',
          'next',
          'forward',
          'finger'
        ]
      },
      {
        name: 'Hand Outlined Left',
        id: 'hand-o-left',
        filter: [
          'point',
          'left',
          'previous',
          'back',
          'finger'
        ]
      },
      {
        name: 'Hand Outlined Up',
        id: 'hand-o-up',
        filter: [
          'point',
          'finger'
        ]
      },
      {
        name: 'Hand Outlined Down',
        id: 'hand-o-down',
        filter: [
          'point',
          'finger'
        ]
      },
      {
        name: 'Arrow Circle Left',
        id: 'arrow-circle-left',
        filter: [
          'previous',
          'back'
        ]
      },
      {
        name: 'Arrow Circle Right',
        id: 'arrow-circle-right',
        filter: [
          'next',
          'forward'
        ]
      },
      {
        name: 'Arrow Circle Up',
        id: 'arrow-circle-up'
      },
      {
        name: 'Arrow Circle Down',
        id: 'arrow-circle-down',
        filter: [
          'download'
        ]
      },
      {
        name: 'Globe',
        id: 'globe',
        filter: [
          'world',
          'planet',
          'map',
          'place',
          'travel',
          'earth',
          'global',
          'translate',
          'all',
          'language',
          'localize',
          'location',
          'coordinates',
          'country'
        ]
      },
      {
        name: 'Wrench',
        id: 'wrench',
        filter: [
          'settings',
          'fix',
          'update',
          'spanner'
        ]
      },
      {
        name: 'Tasks',
        id: 'tasks',
        filter: [
          'progress',
          'loading',
          'downloading',
          'downloads',
          'settings'
        ]
      },
      {
        name: 'Filter',
        id: 'filter',
        filter: [
          'funnel',
          'options'
        ]
      },
      {
        name: 'Briefcase',
        id: 'briefcase',
        filter: [
          'work',
          'business',
          'office',
          'luggage',
          'bag'
        ]
      },
      {
        name: 'Arrows Alt',
        id: 'arrows-alt',
        filter: [
          'expand',
          'enlarge',
          'fullscreen',
          'bigger',
          'move',
          'reorder',
          'resize',
          'arrow'
        ]
      },
      {
        name: 'Users',
        id: 'users',
        filter: [
          'people',
          'profiles',
          'persons'
        ],
        aliases: [
          'group'
        ]
      },
      {
        name: 'Link',
        id: 'link',
        filter: [
          'chain'
        ],
        aliases: [
          'chain'
        ]
      },
      {
        name: 'Cloud',
        id: 'cloud',
        filter: [
          'save'
        ]
      },
      {
        name: 'Flask',
        id: 'flask',
        filter: [
          'science',
          'beaker',
          'experimental',
          'labs'
        ]
      },
      {
        name: 'Scissors',
        id: 'scissors',
        aliases: [
          'cut'
        ]
      },
      {
        name: 'Files Outlined',
        id: 'files-o',
        filter: [
          'duplicate',
          'clone',
          'copy'
        ],
        aliases: [
          'copy'
        ]
      },
      {
        name: 'Paperclip',
        id: 'paperclip',
        filter: [
          'attachment'
        ]
      },
      {
        name: 'Floppy Outlined',
        id: 'floppy-o',
        aliases: [
          'save'
        ]
      },
      {
        name: 'Square',
        id: 'square',
        filter: [
          'block',
          'box'
        ]
      },
      {
        name: 'Bars',
        id: 'bars',
        aliases: [
          'navicon',
          'reorder'
        ],
        filter: [
          'menu',
          'drag',
          'reorder',
          'settings',
          'list',
          'ul',
          'ol',
          'checklist',
          'todo',
          'list',
          'hamburger'
        ]
      },
      {
        name: 'list-ul',
        id: 'list-ul',
        filter: [
          'ul',
          'ol',
          'checklist',
          'todo',
          'list'
        ]
      },
      {
        name: 'list-ol',
        id: 'list-ol',
        filter: [
          'ul',
          'ol',
          'checklist',
          'list',
          'todo',
          'list',
          'numbers'
        ]
      },
      {
        name: 'Strikethrough',
        id: 'strikethrough'
      },
      {
        name: 'Underline',
        id: 'underline'
      },
      {
        name: 'table',
        id: 'table',
        filter: [
          'data',
          'excel',
          'spreadsheet'
        ]
      },
      {
        name: 'magic',
        id: 'magic',
        filter: [
          'wizard',
          'automatic',
          'autocomplete'
        ]
      },
      {
        name: 'truck',
        id: 'truck',
        filter: [
          'shipping'
        ]
      },
      {
        name: 'Pinterest',
        id: 'pinterest'
      },
      {
        name: 'Pinterest Square',
        id: 'pinterest-square'
      },
      {
        name: 'Google Plus Square',
        id: 'google-plus-square',
        filter: [
          'social network'
        ]
      },
      {
        name: 'Google Plus',
        id: 'google-plus',
        filter: [
          'social network'
        ]
      },
      {
        name: 'Money',
        id: 'money',
        filter: [
          'cash',
          'money',
          'buy',
          'checkout',
          'purchase',
          'payment'
        ]
      },
      {
        name: 'Caret Down',
        id: 'caret-down',
        filter: [
          'more',
          'dropdown',
          'menu',
          'triangle down',
          'arrow'
        ]
      },
      {
        name: 'Caret Up',
        id: 'caret-up',
        filter: [
          'triangle up',
          'arrow'
        ]
      },
      {
        name: 'Caret Left',
        id: 'caret-left',
        filter: [
          'previous',
          'back',
          'triangle left',
          'arrow'
        ]
      },
      {
        name: 'Caret Right',
        id: 'caret-right',
        filter: [
          'next',
          'forward',
          'triangle right',
          'arrow'
        ]
      },
      {
        name: 'Columns',
        id: 'columns',
        filter: [
          'split',
          'panes'
        ]
      },
      {
        name: 'Sort',
        id: 'sort',
        filter: [
          'order'
        ],
        aliases: [
          'unsorted'
        ]
      },
      {
        name: 'Sort Descending',
        id: 'sort-desc',
        filter: [
          'dropdown',
          'more',
          'menu',
          'arrow'
        ],
        aliases: [
          'sort-down'
        ]
      },
      {
        name: 'Sort Ascending',
        id: 'sort-asc',
        aliases: [
          'sort-up'
        ],
        filter: [
          'arrow'
        ]
      },
      {
        name: 'Envelope',
        id: 'envelope',
        filter: [
          'email',
          'e-mail',
          'letter',
          'support',
          'mail',
          'message',
          'notification'
        ]
      },
      {
        name: 'LinkedIn',
        id: 'linkedin'
      },
      {
        name: 'Undo',
        id: 'undo',
        filter: [
          'back'
        ],
        aliases: [
          'rotate-left'
        ]
      },
      {
        name: 'Gavel',
        id: 'gavel',
        filter: [
          'judge',
          'lawyer',
          'opinion'
        ],
        aliases: [
          'legal'
        ]
      },
      {
        name: 'Tachometer',
        id: 'tachometer',
        filter: [
          'speedometer',
          'fast'
        ],
        aliases: [
          'dashboard'
        ]
      },
      {
        name: 'comment-o',
        id: 'comment-o',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'comments-o',
        id: 'comments-o',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'Lightning Bolt',
        id: 'bolt',
        filter: [
          'lightning',
          'weather'
        ],
        aliases: [
          'flash'
        ]
      },
      {
        name: 'Sitemap',
        id: 'sitemap',
        filter: [
          'directory',
          'hierarchy',
          'organization'
        ]
      },
      {
        name: 'Umbrella',
        id: 'umbrella'
      },
      {
        name: 'Clipboard',
        id: 'clipboard',
        filter: [
          'copy'
        ],
        aliases: [
          'paste'
        ]
      },
      {
        name: 'Lightbulb Outlined',
        id: 'lightbulb-o',
        filter: [
          'idea',
          'inspiration'
        ]
      },
      {
        name: 'Exchange',
        id: 'exchange',
        filter: [
          'transfer',
          'arrows',
          'arrow'
        ]
      },
      {
        name: 'Cloud Download',
        id: 'cloud-download',
        filter: [
          'import'
        ]
      },
      {
        name: 'Cloud Upload',
        id: 'cloud-upload',
        filter: [
          'import'
        ]
      },
      {
        name: 'user-md',
        id: 'user-md',
        filter: [
          'doctor',
          'profile',
          'medical',
          'nurse'
        ]
      },
      {
        name: 'Stethoscope',
        id: 'stethoscope'
      },
      {
        name: 'Suitcase',
        id: 'suitcase',
        filter: [
          'trip',
          'luggage',
          'travel',
          'move',
          'baggage'
        ]
      },
      {
        name: 'Bell Outlined',
        id: 'bell-o',
        filter: [
          'alert',
          'reminder',
          'notification'
        ]
      },
      {
        name: 'Coffee',
        id: 'coffee',
        filter: [
          'morning',
          'mug',
          'breakfast',
          'tea',
          'drink',
          'cafe'
        ]
      },
      {
        name: 'Cutlery',
        id: 'cutlery',
        filter: [
          'food',
          'restaurant',
          'spoon',
          'knife',
          'dinner',
          'eat'
        ]
      },
      {
        name: 'File Text Outlined',
        id: 'file-text-o',
        filter: [
          'new',
          'page',
          'pdf',
          'document'
        ]
      },
      {
        name: 'Building Outlined',
        id: 'building-o',
        filter: [
          'work',
          'business',
          'apartment',
          'office',
          'company'
        ]
      },
      {
        name: 'hospital Outlined',
        id: 'hospital-o',
        filter: [
          'building'
        ]
      },
      {
        name: 'ambulance',
        id: 'ambulance',
        filter: [
          'vehicle',
          'support',
          'help'
        ]
      },
      {
        name: 'medkit',
        id: 'medkit',
        filter: [
          'first aid',
          'firstaid',
          'help',
          'support',
          'health'
        ]
      },
      {
        name: 'fighter-jet',
        id: 'fighter-jet',
        filter: [
          'fly',
          'plane',
          'airplane',
          'quick',
          'fast',
          'travel'
        ]
      },
      {
        name: 'beer',
        id: 'beer',
        filter: [
          'alcohol',
          'stein',
          'drink',
          'mug',
          'bar',
          'liquor'
        ]
      },
      {
        name: 'H Square',
        id: 'h-square',
        filter: [
          'hospital',
          'hotel'
        ]
      },
      {
        name: 'Plus Square',
        id: 'plus-square',
        filter: [
          'add',
          'new',
          'create',
          'expand'
        ]
      },
      {
        name: 'Angle Double Left',
        id: 'angle-double-left',
        filter: [
          'laquo',
          'quote',
          'previous',
          'back',
          'arrows'
        ]
      },
      {
        name: 'Angle Double Right',
        id: 'angle-double-right',
        filter: [
          'raquo',
          'quote',
          'next',
          'forward',
          'arrows'
        ]
      },
      {
        name: 'Angle Double Up',
        id: 'angle-double-up',
        filter: [
          'arrows'
        ]
      },
      {
        name: 'Angle Double Down',
        id: 'angle-double-down',
        filter: [
          'arrows'
        ]
      },
      {
        name: 'angle-left',
        id: 'angle-left',
        filter: [
          'previous',
          'back',
          'arrow'
        ]
      },
      {
        name: 'angle-right',
        id: 'angle-right',
        filter: [
          'next',
          'forward',
          'arrow'
        ]
      },
      {
        name: 'angle-up',
        id: 'angle-up',
        filter: [
          'arrow'
        ]
      },
      {
        name: 'angle-down',
        id: 'angle-down',
        filter: [
          'arrow'
        ]
      },
      {
        name: 'Desktop',
        id: 'desktop',
        filter: [
          'monitor',
          'screen',
          'desktop',
          'computer',
          'demo',
          'device'
        ]
      },
      {
        name: 'Laptop',
        id: 'laptop',
        filter: [
          'demo',
          'computer',
          'device'
        ]
      },
      {
        name: 'tablet',
        id: 'tablet',
        filter: [
          'ipad',
          'device'
        ]
      },
      {
        name: 'Mobile Phone',
        id: 'mobile',
        filter: [
          'cell phone',
          'cellphone',
          'text',
          'call',
          'iphone',
          'number',
          'telephone'
        ],
        aliases: [
          'mobile-phone'
        ]
      },
      {
        name: 'Circle Outlined',
        id: 'circle-o'
      },
      {
        name: 'quote-left',
        id: 'quote-left'
      },
      {
        name: 'quote-right',
        id: 'quote-right'
      },
      {
        name: 'Spinner',
        id: 'spinner',
        filter: [
          'loading',
          'progress'
        ]
      },
      {
        name: 'Circle',
        id: 'circle',
        filter: [
          'dot',
          'notification'
        ]
      },
      {
        name: 'Reply',
        id: 'reply',
        aliases: [
          'mail-reply'
        ]
      },
      {
        name: 'GitHub Alt',
        id: 'github-alt',
        filter: [
          'octocat'
        ]
      },
      {
        name: 'Folder Outlined',
        id: 'folder-o'
      },
      {
        name: 'Folder Open Outlined',
        id: 'folder-open-o'
      },
      {
        name: 'Smile Outlined',
        id: 'smile-o',
        filter: [
          'face',
          'emoticon',
          'happy',
          'approve',
          'satisfied',
          'rating'
        ]
      },
      {
        name: 'Frown Outlined',
        id: 'frown-o',
        filter: [
          'face',
          'emoticon',
          'sad',
          'disapprove',
          'rating'
        ]
      },
      {
        name: 'Meh Outlined',
        id: 'meh-o',
        filter: [
          'face',
          'emoticon',
          'rating',
          'neutral'
        ]
      },
      {
        name: 'Gamepad',
        id: 'gamepad',
        filter: [
          'controller'
        ]
      },
      {
        name: 'Keyboard Outlined',
        id: 'keyboard-o',
        filter: [
          'type',
          'input'
        ]
      },
      {
        name: 'Flag Outlined',
        id: 'flag-o',
        filter: [
          'report',
          'notification'
        ]
      },
      {
        name: 'flag-checkered',
        id: 'flag-checkered',
        filter: [
          'report',
          'notification',
          'notify'
        ]
      },
      {
        name: 'Terminal',
        id: 'terminal',
        filter: [
          'command',
          'prompt',
          'code'
        ]
      },
      {
        name: 'Code',
        id: 'code',
        filter: [
          'html',
          'brackets'
        ]
      },
      {
        name: 'reply-all',
        id: 'reply-all',
        aliases: [
          'mail-reply-all'
        ]
      },
      {
        name: 'Star Half Outlined',
        id: 'star-half-o',
        filter: [
          'award',
          'achievement',
          'rating',
          'score'
        ],
        aliases: [
          'star-half-empty',
          'star-half-full'
        ]
      },
      {
        name: 'location-arrow',
        id: 'location-arrow',
        filter: [
          'map',
          'coordinates',
          'location',
          'address',
          'place',
          'where'
        ]
      },
      {
        name: 'crop',
        id: 'crop'
      },
      {
        name: 'code-fork',
        id: 'code-fork',
        filter: [
          'git',
          'fork',
          'vcs',
          'svn',
          'github',
          'rebase',
          'version',
          'merge'
        ]
      },
      {
        name: 'Chain Broken',
        id: 'chain-broken',
        filter: [
          'remove'
        ],
        aliases: [
          'unlink'
        ]
      },
      {
        name: 'Question',
        id: 'question',
        filter: [
          'help',
          'information',
          'unknown',
          'support'
        ]
      },
      {
        name: 'Info',
        id: 'info',
        filter: [
          'help',
          'information',
          'more',
          'details'
        ]
      },
      {
        name: 'exclamation',
        id: 'exclamation',
        filter: [
          'warning',
          'error',
          'problem',
          'notification',
          'notify',
          'alert'
        ]
      },
      {
        name: 'superscript',
        id: 'superscript',
        filter: [
          'exponential'
        ]
      },
      {
        name: 'subscript',
        id: 'subscript'
      },
      {
        name: 'eraser',
        id: 'eraser',
        filter: [
          'remove',
          'delete'
        ]
      },
      {
        name: 'Puzzle Piece',
        id: 'puzzle-piece',
        filter: [
          'addon',
          'add-on',
          'section'
        ]
      },
      {
        name: 'microphone',
        id: 'microphone',
        filter: [
          'record',
          'voice',
          'sound'
        ]
      },
      {
        name: 'Microphone Slash',
        id: 'microphone-slash',
        filter: [
          'record',
          'voice',
          'sound',
          'mute'
        ]
      },
      {
        name: 'shield',
        id: 'shield',
        filter: [
          'award',
          'achievement',
          'security',
          'winner'
        ]
      },
      {
        name: 'calendar-o',
        id: 'calendar-o',
        filter: [
          'date',
          'time',
          'when',
          'event'
        ]
      },
      {
        name: 'fire-extinguisher',
        id: 'fire-extinguisher'
      },
      {
        name: 'rocket',
        id: 'rocket',
        filter: [
          'app'
        ]
      },
      {
        name: 'MaxCDN',
        id: 'maxcdn'
      },
      {
        name: 'Chevron Circle Left',
        id: 'chevron-circle-left',
        filter: [
          'previous',
          'back',
          'arrow'
        ]
      },
      {
        name: 'Chevron Circle Right',
        id: 'chevron-circle-right',
        filter: [
          'next',
          'forward',
          'arrow'
        ]
      },
      {
        name: 'Chevron Circle Up',
        id: 'chevron-circle-up',
        filter: [
          'arrow'
        ]
      },
      {
        name: 'Chevron Circle Down',
        id: 'chevron-circle-down',
        filter: [
          'more',
          'dropdown',
          'menu',
          'arrow'
        ]
      },
      {
        name: 'HTML 5 Logo',
        id: 'html5'
      },
      {
        name: 'CSS 3 Logo',
        id: 'css3',
        filter: [
          'code'
        ]
      },
      {
        name: 'Anchor',
        id: 'anchor',
        filter: [
          'link'
        ]
      },
      {
        name: 'Unlock Alt',
        id: 'unlock-alt',
        filter: [
          'protect',
          'admin',
          'password',
          'lock'
        ]
      },
      {
        name: 'Bullseye',
        id: 'bullseye',
        filter: [
          'target'
        ]
      },
      {
        name: 'Ellipsis Horizontal',
        id: 'ellipsis-h',
        filter: [
          'dots'
        ]
      },
      {
        name: 'Ellipsis Vertical',
        id: 'ellipsis-v',
        filter: [
          'dots'
        ]
      },
      {
        name: 'RSS Square',
        id: 'rss-square',
        filter: [
          'feed',
          'blog'
        ]
      },
      {
        name: 'Play Circle',
        id: 'play-circle',
        filter: [
          'start',
          'playing'
        ]
      },
      {
        name: 'Ticket',
        id: 'ticket',
        filter: [
          'movie',
          'pass',
          'support'
        ]
      },
      {
        name: 'Minus Square',
        id: 'minus-square',
        filter: [
          'hide',
          'minify',
          'delete',
          'remove',
          'trash',
          'hide',
          'collapse'
        ]
      },
      {
        name: 'Minus Square Outlined',
        id: 'minus-square-o',
        filter: [
          'hide',
          'minify',
          'delete',
          'remove',
          'trash',
          'hide',
          'collapse'
        ]
      },
      {
        name: 'Level Up',
        id: 'level-up',
        filter: [
          'arrow'
        ]
      },
      {
        name: 'Level Down',
        id: 'level-down',
        filter: [
          'arrow'
        ]
      },
      {
        name: 'Check Square',
        id: 'check-square',
        filter: [
          'checkmark',
          'done',
          'todo',
          'agree',
          'accept',
          'confirm',
          'ok'
        ]
      },
      {
        name: 'Pencil Square',
        id: 'pencil-square',
        filter: [
          'write',
          'edit',
          'update'
        ]
      },
      {
        name: 'External Link Square',
        id: 'external-link-square',
        filter: [
          'open',
          'new'
        ]
      },
      {
        name: 'Share Square',
        id: 'share-square',
        filter: [
          'social',
          'send'
        ]
      },
      {
        name: 'Compass',
        id: 'compass',
        filter: [
          'safari',
          'directory',
          'menu',
          'location'
        ]
      },
      {
        name: 'Caret Square Outlined Down',
        id: 'caret-square-o-down',
        aliases: [
          'toggle-down'
        ],
        filter: [
          'more',
          'dropdown',
          'menu'
        ]
      },
      {
        name: 'Caret Square Outlined Up',
        id: 'caret-square-o-up',
        aliases: [
          'toggle-up'
        ]
      },
      {
        name: 'Caret Square Outlined Right',
        id: 'caret-square-o-right',
        filter: [
          'next',
          'forward'
        ],
        aliases: [
          'toggle-right'
        ]
      },
      {
        name: 'Euro (EUR)',
        id: 'eur',
        aliases: [
          'euro'
        ]
      },
      {
        name: 'GBP',
        id: 'gbp'
      },
      {
        name: 'US Dollar',
        id: 'usd',
        aliases: [
          'dollar'
        ]
      },
      {
        name: 'Indian Rupee (INR)',
        id: 'inr',
        aliases: [
          'rupee'
        ]
      },
      {
        name: 'Japanese Yen (JPY)',
        id: 'jpy',
        aliases: [
          'cny',
          'rmb',
          'yen'
        ]
      },
      {
        name: 'Russian Ruble (RUB)',
        id: 'rub',
        aliases: [
          'ruble',
          'rouble'
        ]
      },
      {
        name: 'Korean Won (KRW)',
        id: 'krw',
        aliases: [
          'won'
        ]
      },
      {
        name: 'Bitcoin (BTC)',
        id: 'btc',
        aliases: [
          'bitcoin'
        ]
      },
      {
        name: 'File',
        id: 'file',
        filter: [
          'new',
          'page',
          'pdf',
          'document'
        ]
      },
      {
        name: 'File Text',
        id: 'file-text',
        filter: [
          'new',
          'page',
          'pdf',
          'document'
        ]
      },
      {
        name: 'Sort Alpha Ascending',
        id: 'sort-alpha-asc'
      },
      {
        name: 'Sort Alpha Descending',
        id: 'sort-alpha-desc'
      },
      {
        name: 'Sort Amount Ascending',
        id: 'sort-amount-asc'
      },
      {
        name: 'Sort Amount Descending',
        id: 'sort-amount-desc'
      },
      {
        name: 'Sort Numeric Ascending',
        id: 'sort-numeric-asc',
        filter: [
          'numbers'
        ]
      },
      {
        name: 'Sort Numeric Descending',
        id: 'sort-numeric-desc',
        filter: [
          'numbers'
        ]
      },
      {
        name: 'thumbs-up',
        id: 'thumbs-up',
        filter: [
          'like',
          'favorite',
          'approve',
          'agree',
          'hand'
        ]
      },
      {
        name: 'thumbs-down',
        id: 'thumbs-down',
        filter: [
          'dislike',
          'disapprove',
          'disagree',
          'hand'
        ]
      },
      {
        name: 'YouTube Square',
        id: 'youtube-square',
        filter: [
          'video',
          'film'
        ]
      },
      {
        name: 'YouTube',
        id: 'youtube',
        filter: [
          'video',
          'film'
        ]
      },
      {
        name: 'Xing',
        id: 'xing'
      },
      {
        name: 'Xing Square',
        id: 'xing-square'
      },
      {
        name: 'YouTube Play',
        id: 'youtube-play',
        filter: [
          'start',
          'playing'
        ]
      },
      {
        name: 'Dropbox',
        id: 'dropbox'
      },
      {
        name: 'Stack Overflow',
        id: 'stack-overflow'
      },
      {
        name: 'Instagram',
        id: 'instagram'
      },
      {
        name: 'Flickr',
        id: 'flickr'
      },
      {
        name: 'App.net',
        id: 'adn'
      },
      {
        name: 'Bitbucket',
        id: 'bitbucket',
        filter: [
          'git'
        ]
      },
      {
        name: 'Bitbucket Square',
        id: 'bitbucket-square',
        filter: [
          'git'
        ]
      },
      {
        name: 'Tumblr',
        id: 'tumblr'
      },
      {
        name: 'Tumblr Square',
        id: 'tumblr-square'
      },
      {
        name: 'Long Arrow Down',
        id: 'long-arrow-down'
      },
      {
        name: 'Long Arrow Up',
        id: 'long-arrow-up'
      },
      {
        name: 'Long Arrow Left',
        id: 'long-arrow-left',
        filter: [
          'previous',
          'back'
        ]
      },
      {
        name: 'Long Arrow Right',
        id: 'long-arrow-right'
      },
      {
        name: 'Apple',
        id: 'apple',
        filter: [
          'osx',
          'food'
        ]
      },
      {
        name: 'Windows',
        id: 'windows',
        filter: [
          'microsoft'
        ]
      },
      {
        name: 'Android',
        id: 'android',
        filter: [
          'robot'
        ]
      },
      {
        name: 'Linux',
        id: 'linux',
        filter: [
          'tux'
        ]
      },
      {
        name: 'Dribbble',
        id: 'dribbble'
      },
      {
        name: 'Skype',
        id: 'skype'
      },
      {
        name: 'Foursquare',
        id: 'foursquare'
      },
      {
        name: 'Trello',
        id: 'trello'
      },
      {
        name: 'Female',
        id: 'female',
        filter: [
          'woman',
          'user',
          'person',
          'profile'
        ]
      },
      {
        name: 'Male',
        id: 'male',
        filter: [
          'man',
          'user',
          'person',
          'profile'
        ]
      },
      {
        name: 'Gratipay (Gittip)',
        id: 'gratipay',
        aliases: [
          'gittip'
        ],
        filter: [
          'heart',
          'like',
          'favorite',
          'love'
        ]
      },
      {
        name: 'Sun Outlined',
        id: 'sun-o',
        filter: [
          'weather',
          'contrast',
          'lighter',
          'brighten',
          'day'
        ]
      },
      {
        name: 'Moon Outlined',
        id: 'moon-o',
        filter: [
          'night',
          'darker',
          'contrast'
        ]
      },
      {
        name: 'Archive',
        id: 'archive',
        filter: [
          'box',
          'storage'
        ]
      },
      {
        name: 'Bug',
        id: 'bug',
        filter: [
          'report',
          'insect'
        ]
      },
      {
        name: 'VK',
        id: 'vk'
      },
      {
        name: 'Weibo',
        id: 'weibo'
      },
      {
        name: 'Renren',
        id: 'renren'
      },
      {
        name: 'Pagelines',
        id: 'pagelines',
        filter: [
          'leaf',
          'leaves',
          'tree',
          'plant',
          'eco',
          'nature'
        ]
      },
      {
        name: 'Stack Exchange',
        id: 'stack-exchange'
      },
      {
        name: 'Arrow Circle Outlined Right',
        id: 'arrow-circle-o-right',
        filter: [
          'next',
          'forward'
        ]
      },
      {
        name: 'Arrow Circle Outlined Left',
        id: 'arrow-circle-o-left',
        filter: [
          'previous',
          'back'
        ]
      },
      {
        name: 'Caret Square Outlined Left',
        id: 'caret-square-o-left',
        filter: [
          'previous',
          'back'
        ],
        aliases: [
          'toggle-left'
        ]
      },
      {
        name: 'Dot Circle Outlined',
        id: 'dot-circle-o',
        filter: [
          'target',
          'bullseye',
          'notification'
        ]
      },
      {
        name: 'Wheelchair',
        id: 'wheelchair',
        filter: [
          'handicap',
          'person'
        ]
      },
      {
        name: 'Vimeo Square',
        id: 'vimeo-square'
      },
      {
        name: 'Turkish Lira (TRY)',
        id: 'try',
        aliases: [
          'turkish-lira'
        ]
      },
      {
        name: 'Plus Square Outlined',
        id: 'plus-square-o',
        filter: [
          'add',
          'new',
          'create',
          'expand'
        ]
      },
      {
        name: 'Space Shuttle',
        id: 'space-shuttle',
        filter: null
      },
      {
        name: 'Slack Logo',
        id: 'slack',
        filter: [
          'hashtag',
          'anchor',
          'hash'
        ]
      },
      {
        name: 'Envelope Square',
        id: 'envelope-square',
        filter: [
          'email',
          'e-mail',
          'letter',
          'support',
          'mail',
          'message',
          'notification'
        ]
      },
      {
        name: 'WordPress Logo',
        id: 'wordpress'
      },
      {
        name: 'OpenID',
        id: 'openid'
      },
      {
        name: 'University',
        id: 'university',
        aliases: [
          'institution',
          'bank'
        ]
      },
      {
        name: 'Graduation Cap',
        id: 'graduation-cap',
        aliases: [
          'mortar-board'
        ],
        filter: [
          'learning',
          'school',
          'student'
        ]
      },
      {
        name: 'Yahoo Logo',
        id: 'yahoo'
      },
      {
        name: 'Google Logo',
        id: 'google'
      },
      {
        name: 'reddit Logo',
        id: 'reddit'
      },
      {
        name: 'reddit Square',
        id: 'reddit-square'
      },
      {
        name: 'StumbleUpon Circle',
        id: 'stumbleupon-circle'
      },
      {
        name: 'StumbleUpon Logo',
        id: 'stumbleupon'
      },
      {
        name: 'Delicious Logo',
        id: 'delicious'
      },
      {
        name: 'Digg Logo',
        id: 'digg'
      },
      {
        name: 'Pied Piper PP Logo (Old)',
        id: 'pied-piper-pp'
      },
      {
        name: 'Pied Piper Alternate Logo',
        id: 'pied-piper-alt'
      },
      {
        name: 'Drupal Logo',
        id: 'drupal'
      },
      {
        name: 'Joomla Logo',
        id: 'joomla'
      },
      {
        name: 'Language',
        id: 'language'
      },
      {
        name: 'Fax',
        id: 'fax'
      },
      {
        name: 'Building',
        id: 'building',
        filter: [
          'work',
          'business',
          'apartment',
          'office',
          'company'
        ]
      },
      {
        name: 'Child',
        id: 'child'
      },
      {
        name: 'Paw',
        id: 'paw',
        filter: [
          'pet'
        ]
      },
      {
        name: 'spoon',
        id: 'spoon'
      },
      {
        name: 'Cube',
        id: 'cube'
      },
      {
        name: 'Cubes',
        id: 'cubes'
      },
      {
        name: 'Behance',
        id: 'behance'
      },
      {
        name: 'Behance Square',
        id: 'behance-square'
      },
      {
        name: 'Steam',
        id: 'steam'
      },
      {
        name: 'Steam Square',
        id: 'steam-square'
      },
      {
        name: 'Recycle',
        id: 'recycle'
      },
      {
        name: 'Car',
        id: 'car',
        aliases: [
          'automobile'
        ],
        filter: [
          'vehicle'
        ]
      },
      {
        name: 'Taxi',
        id: 'taxi',
        aliases: [
          'cab'
        ],
        filter: [
          'vehicle'
        ]
      },
      {
        name: 'Tree',
        id: 'tree'
      },
      {
        name: 'Spotify',
        id: 'spotify'
      },
      {
        name: 'deviantART',
        id: 'deviantart'
      },
      {
        name: 'SoundCloud',
        id: 'soundcloud'
      },
      {
        name: 'Database',
        id: 'database'
      },
      {
        name: 'PDF File Outlined',
        id: 'file-pdf-o'
      },
      {
        name: 'Word File Outlined',
        id: 'file-word-o'
      },
      {
        name: 'Excel File Outlined',
        id: 'file-excel-o'
      },
      {
        name: 'Powerpoint File Outlined',
        id: 'file-powerpoint-o'
      },
      {
        name: 'Image File Outlined',
        id: 'file-image-o',
        aliases: [
          'file-photo-o',
          'file-picture-o'
        ]
      },
      {
        name: 'Archive File Outlined',
        id: 'file-archive-o',
        aliases: [
          'file-zip-o'
        ]
      },
      {
        name: 'Audio File Outlined',
        id: 'file-audio-o',
        aliases: [
          'file-sound-o'
        ]
      },
      {
        name: 'Video File Outlined',
        id: 'file-video-o',
        aliases: [
          'file-movie-o'
        ]
      },
      {
        name: 'Code File Outlined',
        id: 'file-code-o'
      },
      {
        name: 'Vine',
        id: 'vine'
      },
      {
        name: 'Codepen',
        id: 'codepen'
      },
      {
        name: 'jsFiddle',
        id: 'jsfiddle'
      },
      {
        name: 'Life Ring',
        id: 'life-ring',
        aliases: [
          'life-buoy',
          'life-saver',
          'support'
        ]
      },
      {
        name: 'Circle Outlined Notched',
        id: 'circle-o-notch'
      },
      {
        name: 'Rebel Alliance',
        id: 'rebel',
        aliases: [
          'ra',
          'resistance'
        ]
      },
      {
        name: 'Galactic Empire',
        id: 'empire',
        aliases: [
          'ge'
        ]
      },
      {
        name: 'Git Square',
        id: 'git-square'
      },
      {
        name: 'Git',
        id: 'git'
      },
      {
        name: 'Hacker News',
        id: 'hacker-news',
        aliases: [
          'y-combinator-square',
          'yc-square'
        ]
      },
      {
        name: 'Tencent Weibo',
        id: 'tencent-weibo'
      },
      {
        name: 'QQ',
        id: 'qq'
      },
      {
        name: 'Weixin (WeChat)',
        id: 'weixin',
        aliases: [
          'wechat'
        ]
      },
      {
        name: 'Paper Plane',
        id: 'paper-plane',
        aliases: [
          'send'
        ]
      },
      {
        name: 'Paper Plane Outlined',
        id: 'paper-plane-o',
        aliases: [
          'send-o'
        ]
      },
      {
        name: 'History',
        id: 'history'
      },
      {
        name: 'Circle Outlined Thin',
        id: 'circle-thin'
      },
      {
        name: 'header',
        id: 'header',
        filter: [
          'heading'
        ]
      },
      {
        name: 'paragraph',
        id: 'paragraph'
      },
      {
        name: 'Sliders',
        id: 'sliders',
        filter: [
          'settings'
        ]
      },
      {
        name: 'Share Alt',
        id: 'share-alt'
      },
      {
        name: 'Share Alt Square',
        id: 'share-alt-square'
      },
      {
        name: 'Bomb',
        id: 'bomb'
      },
      {
        name: 'Futbol Outlined',
        id: 'futbol-o',
        aliases: [
          'soccer-ball-o'
        ]
      },
      {
        name: 'TTY',
        id: 'tty'
      },
      {
        name: 'Binoculars',
        id: 'binoculars'
      },
      {
        name: 'Plug',
        id: 'plug',
        filter: [
          'power',
          'connect'
        ]
      },
      {
        name: 'Slideshare',
        id: 'slideshare'
      },
      {
        name: 'Twitch',
        id: 'twitch'
      },
      {
        name: 'Yelp',
        id: 'yelp'
      },
      {
        name: 'Newspaper Outlined',
        id: 'newspaper-o',
        filter: [
          'press'
        ]
      },
      {
        name: 'WiFi',
        id: 'wifi'
      },
      {
        name: 'Calculator',
        id: 'calculator'
      },
      {
        name: 'Paypal',
        id: 'paypal'
      },
      {
        name: 'Google Wallet',
        id: 'google-wallet'
      },
      {
        name: 'Visa Credit Card',
        id: 'cc-visa'
      },
      {
        name: 'MasterCard Credit Card',
        id: 'cc-mastercard'
      },
      {
        name: 'Discover Credit Card',
        id: 'cc-discover'
      },
      {
        name: 'American Express Credit Card',
        id: 'cc-amex',
        filter: [
          'amex'
        ]
      },
      {
        name: 'Paypal Credit Card',
        id: 'cc-paypal'
      },
      {
        name: 'Stripe Credit Card',
        id: 'cc-stripe'
      },
      {
        name: 'Bell Slash',
        id: 'bell-slash'
      },
      {
        name: 'Bell Slash Outlined',
        id: 'bell-slash-o'
      },
      {
        name: 'Trash',
        id: 'trash',
        filter: [
          'garbage',
          'delete',
          'remove',
          'hide'
        ]
      },
      {
        name: 'Copyright',
        id: 'copyright'
      },
      {
        name: 'At',
        id: 'at',
        filter: [
          'email',
          'e-mail'
        ]
      },
      {
        name: 'Eyedropper',
        id: 'eyedropper'
      },
      {
        name: 'Paint Brush',
        id: 'paint-brush'
      },
      {
        name: 'Birthday Cake',
        id: 'birthday-cake'
      },
      {
        name: 'Area Chart',
        id: 'area-chart',
        filter: [
          'graph',
          'analytics'
        ]
      },
      {
        name: 'Pie Chart',
        id: 'pie-chart',
        filter: [
          'graph',
          'analytics'
        ]
      },
      {
        name: 'Line Chart',
        id: 'line-chart',
        filter: [
          'graph',
          'analytics'
        ]
      },
      {
        name: 'last.fm',
        id: 'lastfm'
      },
      {
        name: 'last.fm Square',
        id: 'lastfm-square'
      },
      {
        name: 'Toggle Off',
        id: 'toggle-off'
      },
      {
        name: 'Toggle On',
        id: 'toggle-on'
      },
      {
        name: 'Bicycle',
        id: 'bicycle',
        filter: [
          'vehicle',
          'bike'
        ]
      },
      {
        name: 'Bus',
        id: 'bus',
        filter: [
          'vehicle'
        ]
      },
      {
        name: 'ioxhost',
        id: 'ioxhost'
      },
      {
        name: 'AngelList',
        id: 'angellist'
      },
      {
        name: 'Closed Captions',
        id: 'cc'
      },
      {
        name: 'Shekel (ILS)',
        id: 'ils',
        aliases: [
          'shekel',
          'sheqel'
        ]
      },
      {
        name: 'meanpath',
        id: 'meanpath'
      },
      {
        name: 'BuySellAds',
        id: 'buysellads'
      },
      {
        name: 'Connect Develop',
        id: 'connectdevelop'
      },
      {
        name: 'DashCube',
        id: 'dashcube'
      },
      {
        name: 'Forumbee',
        id: 'forumbee'
      },
      {
        name: 'Leanpub',
        id: 'leanpub'
      },
      {
        name: 'Sellsy',
        id: 'sellsy'
      },
      {
        name: 'Shirts in Bulk',
        id: 'shirtsinbulk'
      },
      {
        name: 'SimplyBuilt',
        id: 'simplybuilt'
      },
      {
        name: 'skyatlas',
        id: 'skyatlas'
      },
      {
        name: 'Add to Shopping Cart',
        id: 'cart-plus',
        filter: [
          'add',
          'shopping'
        ]
      },
      {
        name: 'Shopping Cart Arrow Down',
        id: 'cart-arrow-down',
        filter: [
          'shopping'
        ]
      },
      {
        name: 'Diamond',
        id: 'diamond',
        filter: [
          'gem',
          'gemstone'
        ]
      },
      {
        name: 'Ship',
        id: 'ship',
        filter: [
          'boat',
          'sea'
        ]
      },
      {
        name: 'User Secret',
        id: 'user-secret',
        filter: [
          'whisper',
          'spy',
          'incognito',
          'privacy'
        ]
      },
      {
        name: 'Motorcycle',
        id: 'motorcycle',
        filter: [
          'vehicle',
          'bike'
        ]
      },
      {
        name: 'Street View',
        id: 'street-view',
        filter: [
          'map'
        ]
      },
      {
        name: 'Heartbeat',
        id: 'heartbeat',
        filter: [
          'ekg'
        ]
      },
      {
        name: 'Venus',
        id: 'venus',
        filter: [
          'female'
        ]
      },
      {
        name: 'Mars',
        id: 'mars',
        filter: [
          'male'
        ]
      },
      {
        name: 'Mercury',
        id: 'mercury',
        filter: [
          'transgender'
        ]
      },
      {
        name: 'Transgender',
        id: 'transgender',
        aliases: [
          'intersex'
        ]
      },
      {
        name: 'Transgender Alt',
        id: 'transgender-alt'
      },
      {
        name: 'Venus Double',
        id: 'venus-double'
      },
      {
        name: 'Mars Double',
        id: 'mars-double'
      },
      {
        name: 'Venus Mars',
        id: 'venus-mars'
      },
      {
        name: 'Mars Stroke',
        id: 'mars-stroke'
      },
      {
        name: 'Mars Stroke Vertical',
        id: 'mars-stroke-v'
      },
      {
        name: 'Mars Stroke Horizontal',
        id: 'mars-stroke-h'
      },
      {
        name: 'Neuter',
        id: 'neuter'
      },
      {
        name: 'Genderless',
        id: 'genderless'
      },
      {
        name: 'Facebook Official',
        id: 'facebook-official'
      },
      {
        name: 'Pinterest P',
        id: 'pinterest-p'
      },
      {
        name: 'What\'s App',
        id: 'whatsapp'
      },
      {
        name: 'Server',
        id: 'server'
      },
      {
        name: 'Add User',
        id: 'user-plus',
        filter: [
          'sign up',
          'signup'
        ]
      },
      {
        name: 'Remove User',
        id: 'user-times'
      },
      {
        name: 'Bed',
        id: 'bed',
        filter: [
          'travel'
        ],
        aliases: [
          'hotel'
        ]
      },
      {
        name: 'Viacoin',
        id: 'viacoin'
      },
      {
        name: 'Train',
        id: 'train'
      },
      {
        name: 'Subway',
        id: 'subway'
      },
      {
        name: 'Medium',
        id: 'medium'
      },
      {
        name: 'Y Combinator',
        id: 'y-combinator',
        aliases: [
          'yc'
        ]
      },
      {
        name: 'Optin Monster',
        id: 'optin-monster'
      },
      {
        name: 'OpenCart',
        id: 'opencart'
      },
      {
        name: 'ExpeditedSSL',
        id: 'expeditedssl'
      },
      {
        name: 'Battery Full',
        id: 'battery-full',
        aliases: [
          'battery-4',
          'battery'
        ],
        filter: [
          'power'
        ]
      },
      {
        name: 'Battery 3/4 Full',
        id: 'battery-three-quarters',
        aliases: [
          'battery-3'
        ],
        filter: [
          'power'
        ]
      },
      {
        name: 'Battery 1/2 Full',
        id: 'battery-half',
        aliases: [
          'battery-2'
        ],
        filter: [
          'power'
        ]
      },
      {
        name: 'Battery 1/4 Full',
        id: 'battery-quarter',
        aliases: [
          'battery-1'
        ],
        filter: [
          'power'
        ]
      },
      {
        name: 'Battery Empty',
        id: 'battery-empty',
        aliases: [
          'battery-0'
        ],
        filter: [
          'power'
        ]
      },
      {
        name: 'Mouse Pointer',
        id: 'mouse-pointer'
      },
      {
        name: 'I Beam Cursor',
        id: 'i-cursor'
      },
      {
        name: 'Object Group',
        id: 'object-group'
      },
      {
        name: 'Object Ungroup',
        id: 'object-ungroup'
      },
      {
        name: 'Sticky Note',
        id: 'sticky-note'
      },
      {
        name: 'Sticky Note Outlined',
        id: 'sticky-note-o'
      },
      {
        name: 'JCB Credit Card',
        id: 'cc-jcb'
      },
      {
        name: 'Diner\'s Club Credit Card',
        id: 'cc-diners-club'
      },
      {
        name: 'Clone',
        id: 'clone',
        filter: [
          'copy'
        ]
      },
      {
        name: 'Balance Scale',
        id: 'balance-scale'
      },
      {
        name: 'Hourglass Outlined',
        id: 'hourglass-o'
      },
      {
        name: 'Hourglass Start',
        id: 'hourglass-start',
        aliases: [
          'hourglass-1'
        ]
      },
      {
        name: 'Hourglass Half',
        id: 'hourglass-half',
        aliases: [
          'hourglass-2'
        ]
      },
      {
        name: 'Hourglass End',
        id: 'hourglass-end',
        aliases: [
          'hourglass-3'
        ]
      },
      {
        name: 'Hourglass',
        id: 'hourglass'
      },
      {
        name: 'Rock (Hand)',
        id: 'hand-rock-o',
        aliases: [
          'hand-grab-o'
        ]
      },
      {
        name: 'Paper (Hand)',
        id: 'hand-paper-o',
        aliases: [
          'hand-stop-o'
        ],
        filter: [
          'stop'
        ]
      },
      {
        name: 'Scissors (Hand)',
        id: 'hand-scissors-o'
      },
      {
        name: 'Lizard (Hand)',
        id: 'hand-lizard-o'
      },
      {
        name: 'Spock (Hand)',
        id: 'hand-spock-o'
      },
      {
        name: 'Hand Pointer',
        id: 'hand-pointer-o'
      },
      {
        name: 'Hand Peace',
        id: 'hand-peace-o'
      },
      {
        name: 'Trademark',
        id: 'trademark'
      },
      {
        name: 'Registered Trademark',
        id: 'registered'
      },
      {
        name: 'Creative Commons',
        id: 'creative-commons'
      },
      {
        name: 'GG Currency',
        id: 'gg'
      },
      {
        name: 'GG Currency Circle',
        id: 'gg-circle'
      },
      {
        name: 'TripAdvisor',
        id: 'tripadvisor'
      },
      {
        name: 'Odnoklassniki',
        id: 'odnoklassniki'
      },
      {
        name: 'Odnoklassniki Square',
        id: 'odnoklassniki-square'
      },
      {
        name: 'Get Pocket',
        id: 'get-pocket'
      },
      {
        name: 'Wikipedia W',
        id: 'wikipedia-w'
      },
      {
        name: 'Safari',
        id: 'safari',
        filter: [
          'browser'
        ]
      },
      {
        name: 'Chrome',
        id: 'chrome',
        filter: [
          'browser'
        ]
      },
      {
        name: 'Firefox',
        id: 'firefox',
        filter: [
          'browser'
        ]
      },
      {
        name: 'Opera',
        id: 'opera'
      },
      {
        name: 'Internet-explorer',
        id: 'internet-explorer',
        filter: [
          'browser',
          'ie'
        ]
      },
      {
        name: 'Television',
        id: 'television',
        aliases: [
          'tv'
        ],
        filter: [
          'display',
          'computer',
          'monitor'
        ]
      },
      {
        name: 'Contao',
        id: 'contao'
      },
      {
        name: '500px',
        id: '500px'
      },
      {
        name: 'Amazon',
        id: 'amazon'
      },
      {
        name: 'Calendar Plus Outlined',
        id: 'calendar-plus-o'
      },
      {
        name: 'Calendar Minus Outlined',
        id: 'calendar-minus-o'
      },
      {
        name: 'Calendar Times Outlined',
        id: 'calendar-times-o'
      },
      {
        name: 'Calendar Check Outlined',
        id: 'calendar-check-o',
        filter: [
          'ok'
        ]
      },
      {
        name: 'Industry',
        id: 'industry',
        filter: [
          'factory'
        ]
      },
      {
        name: 'Map Pin',
        id: 'map-pin'
      },
      {
        name: 'Map Signs',
        id: 'map-signs'
      },
      {
        name: 'Map Outlined',
        id: 'map-o'
      },
      {
        name: 'Map',
        id: 'map'
      },
      {
        name: 'Commenting',
        id: 'commenting',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'Commenting Outlined',
        id: 'commenting-o',
        filter: [
          'speech',
          'notification',
          'note',
          'chat',
          'bubble',
          'feedback',
          'message',
          'texting',
          'sms',
          'conversation'
        ]
      },
      {
        name: 'Houzz',
        id: 'houzz'
      },
      {
        name: 'Vimeo',
        id: 'vimeo'
      },
      {
        name: 'Font Awesome Black Tie',
        id: 'black-tie'
      },
      {
        name: 'Fonticons',
        id: 'fonticons'
      },
      {
        name: 'reddit Alien',
        id: 'reddit-alien'
      },
      {
        name: 'Edge Browser',
        id: 'edge',
        filter: [
          'browser',
          'ie'
        ]
      },
      {
        name: 'Credit Card',
        id: 'credit-card-alt',
        filter: [
          'money',
          'buy',
          'debit',
          'checkout',
          'purchase',
          'payment',
          'credit card'
        ]
      },
      {
        name: 'Codie Pie',
        id: 'codiepie'
      },
      {
        name: 'MODX',
        id: 'modx'
      },
      {
        name: 'Fort Awesome',
        id: 'fort-awesome'
      },
      {
        name: 'USB',
        id: 'usb'
      },
      {
        name: 'Product Hunt',
        id: 'product-hunt'
      },
      {
        name: 'Mixcloud',
        id: 'mixcloud'
      },
      {
        name: 'Scribd',
        id: 'scribd'
      },
      {
        name: 'Pause Circle',
        id: 'pause-circle'
      },
      {
        name: 'Pause Circle Outlined',
        id: 'pause-circle-o'
      },
      {
        name: 'Stop Circle',
        id: 'stop-circle'
      },
      {
        name: 'Stop Circle Outlined',
        id: 'stop-circle-o'
      },
      {
        name: 'Shopping Bag',
        id: 'shopping-bag'
      },
      {
        name: 'Shopping Basket',
        id: 'shopping-basket'
      },
      {
        name: 'Hashtag',
        id: 'hashtag'
      },
      {
        name: 'Bluetooth',
        id: 'bluetooth'
      },
      {
        name: 'Bluetooth',
        id: 'bluetooth-b'
      },
      {
        name: 'Percent',
        id: 'percent'
      },
      {
        name: 'GitLab',
        id: 'gitlab'
      },
      {
        name: 'WPBeginner',
        id: 'wpbeginner'
      },
      {
        name: 'WPForms',
        id: 'wpforms'
      },
      {
        name: 'Envira Gallery',
        id: 'envira',
        filter: [
          'leaf'
        ]
      },
      {
        name: 'Universal Access',
        id: 'universal-access'
      },
      {
        name: 'Wheelchair Alt',
        id: 'wheelchair-alt',
        filter: [
          'handicap',
          'person'
        ]
      },
      {
        name: 'Question Circle Outlined',
        id: 'question-circle-o'
      },
      {
        name: 'Blind',
        id: 'blind'
      },
      {
        name: 'Audio Description',
        id: 'audio-description'
      },
      {
        name: 'Volume Control Phone',
        id: 'volume-control-phone',
        filter: [
          'telephone'
        ]
      },
      {
        name: 'Braille',
        id: 'braille'
      },
      {
        name: 'Assistive Listening Systems',
        id: 'assistive-listening-systems'
      },
      {
        name: 'American Sign Language Interpreting',
        id: 'american-sign-language-interpreting',
        aliases: [
          'asl-interpreting'
        ]
      },
      {
        name: 'Deaf',
        id: 'deaf',
        aliases: [
          'deafness',
          'hard-of-hearing'
        ]
      },
      {
        name: 'Glide',
        id: 'glide'
      },
      {
        name: 'Glide G',
        id: 'glide-g'
      },
      {
        name: 'Sign Language',
        id: 'sign-language',
        aliases: [
          'signing'
        ]
      },
      {
        name: 'Low Vision',
        id: 'low-vision'
      },
      {
        name: 'Viadeo',
        id: 'viadeo'
      },
      {
        name: 'Viadeo Square',
        id: 'viadeo-square'
      },
      {
        name: 'Snapchat',
        id: 'snapchat'
      },
      {
        name: 'Snapchat Ghost',
        id: 'snapchat-ghost'
      },
      {
        name: 'Snapchat Square',
        id: 'snapchat-square'
      },
      {
        name: 'Pied Piper Logo',
        id: 'pied-piper'
      },
      {
        name: 'First Order',
        id: 'first-order'
      },
      {
        name: 'Yoast',
        id: 'yoast'
      },
      {
        name: 'ThemeIsle',
        id: 'themeisle'
      },
      {
        name: 'Google Plus Official',
        id: 'google-plus-official',
        aliases: [
          'google-plus-circle'
        ]
      },
      {
        name: 'Font Awesome',
        id: 'font-awesome',
        aliases: [
          'fa'
        ]
      },
      {
        name: 'Handshake Outlined',
        id: 'handshake-o'
      },
      {
        name: 'Envelope Open',
        id: 'envelope-open',
        filter: [
          'email',
          'e-mail',
          'letter',
          'support',
          'mail',
          'message',
          'notification'
        ]
      },
      {
        name: 'Envelope Open Outlined',
        id: 'envelope-open-o',
        filter: [
          'email',
          'e-mail',
          'letter',
          'support',
          'mail',
          'message',
          'notification'
        ]
      },
      {
        name: 'Linode',
        id: 'linode'
      },
      {
        name: 'Address Book',
        id: 'address-book'
      },
      {
        name: 'Address Book Outlined',
        id: 'address-book-o'
      },
      {
        name: 'Address Card',
        id: 'address-card',
        aliases: [
          'vcard'
        ]
      },
      {
        name: 'Address Card Outlined',
        id: 'address-card-o',
        aliases: [
          'vcard-o'
        ]
      },
      {
        name: 'User Circle',
        id: 'user-circle'
      },
      {
        name: 'User Circle Outlined',
        id: 'user-circle-o'
      },
      {
        name: 'User Outlined',
        id: 'user-o'
      },
      {
        name: 'Identification Badge',
        id: 'id-badge'
      },
      {
        name: 'Identification Card',
        id: 'id-card',
        aliases: [
          'drivers-license'
        ]
      },
      {
        name: 'Identification Card Outlined',
        id: 'id-card-o',
        aliases: [
          'drivers-license-o'
        ]
      },
      {
        name: 'Quora',
        id: 'quora'
      },
      {
        name: 'Free Code Camp',
        id: 'free-code-camp'
      },
      {
        name: 'Telegram',
        id: 'telegram'
      },
      {
        name: 'Thermometer Full',
        id: 'thermometer-full',
        aliases: [
          'thermometer-4',
          'thermometer'
        ]
      },
      {
        name: 'Thermometer 3/4 Full',
        id: 'thermometer-three-quarters',
        aliases: [
          'thermometer-3'
        ]
      },
      {
        name: 'Thermometer 1/2 Full',
        id: 'thermometer-half',
        aliases: [
          'thermometer-2'
        ]
      },
      {
        name: 'Thermometer 1/4 Full',
        id: 'thermometer-quarter',
        aliases: [
          'thermometer-1'
        ]
      },
      {
        name: 'Thermometer Empty',
        id: 'thermometer-empty',
        aliases: [
          'thermometer-0'
        ]
      },
      {
        name: 'Shower',
        id: 'shower'
      },
      {
        name: 'Bath',
        id: 'bath',
        aliases: [
          'bathtub',
          's15'
        ]
      },
      {
        name: 'Podcast',
        id: 'podcast'
      },
      {
        name: 'Window Maximize',
        id: 'window-maximize'
      },
      {
        name: 'Window Minimize',
        id: 'window-minimize'
      },
      {
        name: 'Window Restore',
        id: 'window-restore'
      },
      {
        name: 'Window Close',
        id: 'window-close',
        aliases: [
          'times-rectangle'
        ]
      },
      {
        name: 'Window Close Outline',
        id: 'window-close-o',
        aliases: [
          'times-rectangle-o'
        ]
      },
      {
        name: 'Bandcamp',
        id: 'bandcamp'
      },
      {
        name: 'Grav',
        id: 'grav'
      },
      {
        name: 'Etsy',
        id: 'etsy'
      },
      {
        name: 'IMDB',
        id: 'imdb'
      },
      {
        name: 'Ravelry',
        id: 'ravelry'
      },
      {
        name: 'Eercast',
        id: 'eercast'
      },
      {
        name: 'Microchip',
        id: 'microchip'
      },
      {
        name: 'Snowflake Outlined',
        id: 'snowflake-o'
      },
      {
        name: 'Superpowers',
        id: 'superpowers'
      },
      {
        name: 'WPExplorer',
        id: 'wpexplorer'
      },
      {
        name: 'Meetup',
        id: 'meetup'
      }
    ];
  }

}
