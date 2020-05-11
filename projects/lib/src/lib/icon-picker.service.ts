import { Injectable } from '@angular/core';
import { Icon, IconType } from './icon';

@Injectable()
export class IconPickerService {


  getIcons(ipIconPacks: string[]): Icon[] {
    let icons: Icon[] = [];
    ipIconPacks.forEach((ipIconPack) => {
      if (ipIconPack === 'fa' || ipIconPack === 'all') {
        const faIcons = this.getFaIcons().map(icon => {
          icon.type = IconType.FONT_AWESEOME;
          return icon;
        });
        icons = icons.concat(faIcons);
      }
      if (ipIconPack === 'bs' || ipIconPack === 'all') {
        const bsIcons = this.getBsIcons().map(icon => {
          icon.type = IconType.BOOTSTRAP;
          return icon;
        });
        icons = icons.concat(bsIcons);
      }
      if (ipIconPack === 'fa5' || ipIconPack === 'all') {
        const fa5Icons = this.getFa5Icons().map(icon => {
          icon.type = IconType.FONT_AWESEOME5;
          return icon;
        });
        icons = icons.concat(fa5Icons);
      }
      if (ipIconPack === 'mat' || ipIconPack === 'all') {
        const matIcons = this.getMatIcons().map(icon => {
          icon.type = IconType.MATERIAL;
          return icon;
        });
        icons = icons.concat(matIcons);
      }
    });
    return icons;
  }

  private getFaIcons(): Icon[] {
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

  private getBsIcons(): Icon[] {
    return [
      {
        id: 'asterisk',
        name: 'Asterisk'
      },
      {
        id: 'plus',
        name: 'Plus'
      },
      {
        id: 'euro',
        name: 'Euro'
      },
      {
        id: 'minus',
        name: 'Minus'
      },
      {
        id: 'cloud',
        name: 'Cloud'
      },
      {
        id: 'envelope',
        name: 'Envelope'
      },
      {
        id: 'pencil',
        name: 'Pencil'
      },
      {
        id: 'glass',
        name: 'Glass'
      },
      {
        id: 'music',
        name: 'Music'
      },
      {
        id: 'search',
        name: 'Search'
      },
      {
        id: 'heart',
        name: 'Heart'
      },
      {
        id: 'star',
        name: 'Star'
      },
      {
        id: 'star-empty',
        name: 'Star-empty'
      },
      {
        id: 'user',
        name: 'User'
      },
      {
        id: 'film',
        name: 'Film'
      },
      {
        id: 'th-large',
        name: 'Th-large'
      },
      {
        id: 'th',
        name: 'Th'
      },
      {
        id: 'th-list',
        name: 'Th-list'
      },
      {
        id: 'ok',
        name: 'Ok'
      },
      {
        id: 'remove',
        name: 'Remove'
      },
      {
        id: 'zoom-in',
        name: 'Zoom-in'
      },
      {
        id: 'zoom-out',
        name: 'Zoom-out'
      },
      {
        id: 'off',
        name: 'Off'
      },
      {
        id: 'signal',
        name: 'Signal'
      },
      {
        id: 'cog',
        name: 'Cog'
      },
      {
        id: 'trash',
        name: 'Trash'
      },
      {
        id: 'home',
        name: 'Home'
      },
      {
        id: 'file',
        name: 'File'
      },
      {
        id: 'time',
        name: 'Time'
      },
      {
        id: 'road',
        name: 'Road'
      },
      {
        id: 'download-alt',
        name: 'Download-alt'
      },
      {
        id: 'download',
        name: 'Download'
      },
      {
        id: 'upload',
        name: 'Upload'
      },
      {
        id: 'inbox',
        name: 'Inbox'
      },
      {
        id: 'play-circle',
        name: 'Play-circle'
      },
      {
        id: 'repeat',
        name: 'Repeat'
      },
      {
        id: 'refresh',
        name: 'Refresh'
      },
      {
        id: 'list-alt',
        name: 'List-alt'
      },
      {
        id: 'lock',
        name: 'Lock'
      },
      {
        id: 'flag',
        name: 'Flag'
      },
      {
        id: 'headphones',
        name: 'Headphones'
      },
      {
        id: 'volume-off',
        name: 'Volume-off'
      },
      {
        id: 'volume-down',
        name: 'Volume-down'
      },
      {
        id: 'volume-up',
        name: 'Volume-up'
      },
      {
        id: 'qrcode',
        name: 'Qrcode'
      },
      {
        id: 'barcode',
        name: 'Barcode'
      },
      {
        id: 'tag',
        name: 'Tag'
      },
      {
        id: 'tags',
        name: 'Tags'
      },
      {
        id: 'book',
        name: 'Book'
      },
      {
        id: 'bookmark',
        name: 'Bookmark'
      },
      {
        id: 'print',
        name: 'Print'
      },
      {
        id: 'camera',
        name: 'Camera'
      },
      {
        id: 'font',
        name: 'Font'
      },
      {
        id: 'bold',
        name: 'Bold'
      },
      {
        id: 'italic',
        name: 'Italic'
      },
      {
        id: 'text-height',
        name: 'Text-height'
      },
      {
        id: 'text-width',
        name: 'Text-width'
      },
      {
        id: 'align-left',
        name: 'Align-left'
      },
      {
        id: 'align-center',
        name: 'Align-center'
      },
      {
        id: 'align-right',
        name: 'Align-right'
      },
      {
        id: 'align-justify',
        name: 'Align-justify'
      },
      {
        id: 'list',
        name: 'List'
      },
      {
        id: 'indent-left',
        name: 'Indent-left'
      },
      {
        id: 'indent-right',
        name: 'Indent-right'
      },
      {
        id: 'facetime-video',
        name: 'Facetime-video'
      },
      {
        id: 'picture',
        name: 'Picture'
      },
      {
        id: 'map-marker',
        name: 'Map-marker'
      },
      {
        id: 'adjust',
        name: 'Adjust'
      },
      {
        id: 'tint',
        name: 'Tint'
      },
      {
        id: 'edit',
        name: 'Edit'
      },
      {
        id: 'share',
        name: 'Share'
      },
      {
        id: 'check',
        name: 'Check'
      },
      {
        id: 'move',
        name: 'Move'
      },
      {
        id: 'step-backward',
        name: 'Step-backward'
      },
      {
        id: 'fast-backward',
        name: 'Fast-backward'
      },
      {
        id: 'backward',
        name: 'Backward'
      },
      {
        id: 'play',
        name: 'Play'
      },
      {
        id: 'pause',
        name: 'Pause'
      },
      {
        id: 'stop',
        name: 'Stop'
      },
      {
        id: 'forward',
        name: 'Forward'
      },
      {
        id: 'fast-forward',
        name: 'Fast-forward'
      },
      {
        id: 'step-forward',
        name: 'Step-forward'
      },
      {
        id: 'eject',
        name: 'Eject'
      },
      {
        id: 'chevron-left',
        name: 'Chevron-left'
      },
      {
        id: 'chevron-right',
        name: 'Chevron-right'
      },
      {
        id: 'plus-sign',
        name: 'Plus-sign'
      },
      {
        id: 'minus-sign',
        name: 'Minus-sign'
      },
      {
        id: 'remove-sign',
        name: 'Remove-sign'
      },
      {
        id: 'ok-sign',
        name: 'Ok-sign'
      },
      {
        id: 'question-sign',
        name: 'Question-sign'
      },
      {
        id: 'info-sign',
        name: 'Info-sign'
      },
      {
        id: 'screenshot',
        name: 'Screenshot'
      },
      {
        id: 'remove-circle',
        name: 'Remove-circle'
      },
      {
        id: 'ok-circle',
        name: 'Ok-circle'
      },
      {
        id: 'ban-circle',
        name: 'Ban-circle'
      },
      {
        id: 'arrow-left',
        name: 'Arrow-left'
      },
      {
        id: 'arrow-right',
        name: 'Arrow-right'
      },
      {
        id: 'arrow-up',
        name: 'Arrow-up'
      },
      {
        id: 'arrow-down',
        name: 'Arrow-down'
      },
      {
        id: 'share-alt',
        name: 'Share-alt'
      },
      {
        id: 'resize-full',
        name: 'Resize-full'
      },
      {
        id: 'resize-small',
        name: 'Resize-small'
      },
      {
        id: 'exclamation-sign',
        name: 'Exclamation-sign'
      },
      {
        id: 'gift',
        name: 'Gift'
      },
      {
        id: 'leaf',
        name: 'Leaf'
      },
      {
        id: 'fire',
        name: 'Fire'
      },
      {
        id: 'eye-open',
        name: 'Eye-open'
      },
      {
        id: 'eye-close',
        name: 'Eye-close'
      },
      {
        id: 'warning-sign',
        name: 'Warning-sign'
      },
      {
        id: 'plane',
        name: 'Plane'
      },
      {
        id: 'calendar',
        name: 'Calendar'
      },
      {
        id: 'random',
        name: 'Random'
      },
      {
        id: 'comment',
        name: 'Comment'
      },
      {
        id: 'magnet',
        name: 'Magnet'
      },
      {
        id: 'chevron-up',
        name: 'Chevron-up'
      },
      {
        id: 'chevron-down',
        name: 'Chevron-down'
      },
      {
        id: 'retweet',
        name: 'Retweet'
      },
      {
        id: 'shopping-cart',
        name: 'Shopping-cart'
      },
      {
        id: 'folder-close',
        name: 'Folder-close'
      },
      {
        id: 'folder-open',
        name: 'Folder-open'
      },
      {
        id: 'resize-vertical',
        name: 'Resize-vertical'
      },
      {
        id: 'resize-horizontal',
        name: 'Resize-horizontal'
      },
      {
        id: 'hdd',
        name: 'Hdd'
      },
      {
        id: 'bullhorn',
        name: 'Bullhorn'
      },
      {
        id: 'bell',
        name: 'Bell'
      },
      {
        id: 'certificate',
        name: 'Certificate'
      },
      {
        id: 'thumbs-up',
        name: 'Thumbs-up'
      },
      {
        id: 'thumbs-down',
        name: 'Thumbs-down'
      },
      {
        id: 'hand-right',
        name: 'Hand-right'
      },
      {
        id: 'hand-left',
        name: 'Hand-left'
      },
      {
        id: 'hand-up',
        name: 'Hand-up'
      },
      {
        id: 'hand-down',
        name: 'Hand-down'
      },
      {
        id: 'circle-arrow-right',
        name: 'Circle-arrow-right'
      },
      {
        id: 'circle-arrow-left',
        name: 'Circle-arrow-left'
      },
      {
        id: 'circle-arrow-up',
        name: 'Circle-arrow-up'
      },
      {
        id: 'circle-arrow-down',
        name: 'Circle-arrow-down'
      },
      {
        id: 'globe',
        name: 'Globe'
      },
      {
        id: 'wrench',
        name: 'Wrench'
      },
      {
        id: 'tasks',
        name: 'Tasks'
      },
      {
        id: 'filter',
        name: 'Filter'
      },
      {
        id: 'briefcase',
        name: 'Briefcase'
      },
      {
        id: 'fullscreen',
        name: 'Fullscreen'
      },
      {
        id: 'dashboard',
        name: 'Dashboard'
      },
      {
        id: 'paperclip',
        name: 'Paperclip'
      },
      {
        id: 'heart-empty',
        name: 'Heart-empty'
      },
      {
        id: 'link',
        name: 'Link'
      },
      {
        id: 'phone',
        name: 'Phone'
      },
      {
        id: 'pushpin',
        name: 'Pushpin'
      },
      {
        id: 'usd',
        name: 'Usd'
      },
      {
        id: 'gbp',
        name: 'Gbp'
      },
      {
        id: 'sort',
        name: 'Sort'
      },
      {
        id: 'sort-by-alphabet',
        name: 'Sort-by-alphabet'
      },
      {
        id: 'sort-by-alphabet-alt',
        name: 'Sort-by-alphabet-alt'
      },
      {
        id: 'sort-by-order',
        name: 'Sort-by-order'
      },
      {
        id: 'sort-by-order-alt',
        name: 'Sort-by-order-alt'
      },
      {
        id: 'sort-by-attributes',
        name: 'Sort-by-attributes'
      },
      {
        id: 'sort-by-attributes-alt',
        name: 'Sort-by-attributes-alt'
      },
      {
        id: 'unchecked',
        name: 'Unchecked'
      },
      {
        id: 'expand',
        name: 'Expand'
      },
      {
        id: 'collapse-down',
        name: 'Collapse-down'
      },
      {
        id: 'collapse-up',
        name: 'Collapse-up'
      },
      {
        id: 'log-in',
        name: 'Log-in'
      },
      {
        id: 'flash',
        name: 'Flash'
      },
      {
        id: 'log-out',
        name: 'Log-out'
      },
      {
        id: 'new-window',
        name: 'New-window'
      },
      {
        id: 'record',
        name: 'Record'
      },
      {
        id: 'save',
        name: 'Save'
      },
      {
        id: 'open',
        name: 'Open'
      },
      {
        id: 'saved',
        name: 'Saved'
      },
      {
        id: 'import',
        name: 'Import'
      },
      {
        id: 'export',
        name: 'Export'
      },
      {
        id: 'send',
        name: 'Send'
      },
      {
        id: 'floppy-disk',
        name: 'Floppy-disk'
      },
      {
        id: 'floppy-saved',
        name: 'Floppy-saved'
      },
      {
        id: 'floppy-remove',
        name: 'Floppy-remove'
      },
      {
        id: 'floppy-save',
        name: 'Floppy-save'
      },
      {
        id: 'floppy-open',
        name: 'Floppy-open'
      },
      {
        id: 'credit-card',
        name: 'Credit-card'
      },
      {
        id: 'transfer',
        name: 'Transfer'
      },
      {
        id: 'cutlery',
        name: 'Cutlery'
      },
      {
        id: 'header',
        name: 'Header'
      },
      {
        id: 'compressed',
        name: 'Compressed'
      },
      {
        id: 'earphone',
        name: 'Earphone'
      },
      {
        id: 'phone-alt',
        name: 'Phone-alt'
      },
      {
        id: 'tower',
        name: 'Tower'
      },
      {
        id: 'stats',
        name: 'Stats'
      },
      {
        id: 'sd-video',
        name: 'Sd-video'
      },
      {
        id: 'hd-video',
        name: 'Hd-video'
      },
      {
        id: 'subtitles',
        name: 'Subtitles'
      },
      {
        id: 'sound-stereo',
        name: 'Sound-stereo'
      },
      {
        id: 'sound-dolby',
        name: 'Sound-dolby'
      },
      {
        id: 'sound-5-1',
        name: 'Sound-5-1'
      },
      {
        id: 'sound-6-1',
        name: 'Sound-6-1'
      },
      {
        id: 'sound-7-1',
        name: 'Sound-7-1'
      },
      {
        id: 'copyright-mark',
        name: 'Copyright-mark'
      },
      {
        id: 'registration-mark',
        name: 'Registration-mark'
      },
      {
        id: 'cloud-download',
        name: 'Cloud-download'
      },
      {
        id: 'cloud-upload',
        name: 'Cloud-upload'
      },
      {
        id: 'tree-conifer',
        name: 'Tree-conifer'
      },
      {
        id: 'tree-deciduous',
        name: 'Tree-deciduous'
      }
    ];
  }

  private getFa5Icons(): Icon[] {

    return [
      {
        name: 'Accessible-icon',
        id: 'fab fa-accessible-icon',
        filter: [
          'accessibility',
          'accessible',
          'icon'
        ]
      },
      {
        name: 'American-sign-language-interpreting',
        id: 'fas fa-american-sign-language-interpreting',
        filter: [
          'accessibility',
          'american',
          'sign',
          'language',
          'interpreting'
        ]
      },
      {
        name: 'Assistive-listening-systems',
        id: 'fas fa-assistive-listening-systems',
        filter: [
          'accessibility',
          'assistive',
          'listening',
          'systems'
        ]
      },
      {
        name: 'Audio-description',
        id: 'fas fa-audio-description',
        filter: [
          'accessibility',
          'audio',
          'description'
        ]
      },
      {
        name: 'Blind',
        id: 'fas fa-blind',
        filter: [
          'accessibility',
          'blind'
        ]
      },
      {
        name: 'Braille',
        id: 'fas fa-braille',
        filter: [
          'accessibility',
          'braille'
        ]
      },
      {
        name: 'Closed-captioning',
        id: 'fas fa-closed-captioning',
        filter: [
          'accessibility',
          'closed',
          'captioning'
        ]
      },
      {
        name: 'Closed-captioning',
        id: 'far fa-closed-captioning',
        filter: [
          'accessibility',
          'closed',
          'captioning'
        ]
      },
      {
        name: 'Deaf',
        id: 'fas fa-deaf',
        filter: [
          'accessibility',
          'deaf'
        ]
      },
      {
        name: 'Low-vision',
        id: 'fas fa-low-vision',
        filter: [
          'accessibility',
          'low',
          'vision'
        ]
      },
      {
        name: 'Phone-volume',
        id: 'fas fa-phone-volume',
        filter: [
          'accessibility',
          'phone',
          'volume'
        ]
      },
      {
        name: 'Question-circle',
        id: 'fas fa-question-circle',
        filter: [
          'accessibility',
          'question',
          'circle'
        ]
      },
      {
        name: 'Question-circle',
        id: 'far fa-question-circle',
        filter: [
          'accessibility',
          'question',
          'circle'
        ]
      },
      {
        name: 'Sign-language',
        id: 'fas fa-sign-language',
        filter: [
          'accessibility',
          'sign',
          'language'
        ]
      },
      {
        name: 'Tty',
        id: 'fas fa-tty',
        filter: [
          'accessibility',
          'tty'
        ]
      },
      {
        name: 'Universal-access',
        id: 'fas fa-universal-access',
        filter: [
          'accessibility',
          'universal',
          'access'
        ]
      },
      {
        name: 'Wheelchair',
        id: 'fas fa-wheelchair',
        filter: [
          'accessibility',
          'wheelchair'
        ]
      },
      {
        name: 'Angle-double-down',
        id: 'fas fa-angle-double-down',
        filter: [
          'arrows',
          'angle',
          'double',
          'down'
        ]
      },
      {
        name: 'Angle-double-left',
        id: 'fas fa-angle-double-left',
        filter: [
          'arrows',
          'angle',
          'double',
          'left'
        ]
      },
      {
        name: 'Angle-double-right',
        id: 'fas fa-angle-double-right',
        filter: [
          'arrows',
          'angle',
          'double',
          'right'
        ]
      },
      {
        name: 'Angle-double-up',
        id: 'fas fa-angle-double-up',
        filter: [
          'arrows',
          'angle',
          'double',
          'up'
        ]
      },
      {
        name: 'Angle-down',
        id: 'fas fa-angle-down',
        filter: [
          'arrows',
          'angle',
          'down'
        ]
      },
      {
        name: 'Angle-left',
        id: 'fas fa-angle-left',
        filter: [
          'arrows',
          'angle',
          'left'
        ]
      },
      {
        name: 'Angle-right',
        id: 'fas fa-angle-right',
        filter: [
          'arrows',
          'angle',
          'right'
        ]
      },
      {
        name: 'Angle-up',
        id: 'fas fa-angle-up',
        filter: [
          'arrows',
          'angle',
          'up'
        ]
      },
      {
        name: 'Arrow-alt-circle-down',
        id: 'fas fa-arrow-alt-circle-down',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'down'
        ]
      },
      {
        name: 'Arrow-alt-circle-down',
        id: 'far fa-arrow-alt-circle-down',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'down'
        ]
      },
      {
        name: 'Arrow-alt-circle-left',
        id: 'fas fa-arrow-alt-circle-left',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'left'
        ]
      },
      {
        name: 'Arrow-alt-circle-left',
        id: 'far fa-arrow-alt-circle-left',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'left'
        ]
      },
      {
        name: 'Arrow-alt-circle-right',
        id: 'fas fa-arrow-alt-circle-right',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'right'
        ]
      },
      {
        name: 'Arrow-alt-circle-right',
        id: 'far fa-arrow-alt-circle-right',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'right'
        ]
      },
      {
        name: 'Arrow-alt-circle-up',
        id: 'fas fa-arrow-alt-circle-up',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'up'
        ]
      },
      {
        name: 'Arrow-alt-circle-up',
        id: 'far fa-arrow-alt-circle-up',
        filter: [
          'arrows',
          'arrow',
          'alt',
          'circle',
          'up'
        ]
      },
      {
        name: 'Arrow-circle-down',
        id: 'fas fa-arrow-circle-down',
        filter: [
          'arrows',
          'arrow',
          'circle',
          'down'
        ]
      },
      {
        name: 'Arrow-circle-left',
        id: 'fas fa-arrow-circle-left',
        filter: [
          'arrows',
          'arrow',
          'circle',
          'left'
        ]
      },
      {
        name: 'Arrow-circle-right',
        id: 'fas fa-arrow-circle-right',
        filter: [
          'arrows',
          'arrow',
          'circle',
          'right'
        ]
      },
      {
        name: 'Arrow-circle-up',
        id: 'fas fa-arrow-circle-up',
        filter: [
          'arrows',
          'arrow',
          'circle',
          'up'
        ]
      },
      {
        name: 'Arrow-down',
        id: 'fas fa-arrow-down',
        filter: [
          'arrows',
          'arrow',
          'down'
        ]
      },
      {
        name: 'Arrow-left',
        id: 'fas fa-arrow-left',
        filter: [
          'arrows',
          'arrow',
          'left'
        ]
      },
      {
        name: 'Arrow-right',
        id: 'fas fa-arrow-right',
        filter: [
          'arrows',
          'arrow',
          'right'
        ]
      },
      {
        name: 'Arrow-up',
        id: 'fas fa-arrow-up',
        filter: [
          'arrows',
          'arrow',
          'up'
        ]
      },
      {
        name: 'Arrows-alt',
        id: 'fas fa-arrows-alt',
        filter: [
          'arrows',
          'arrows',
          'alt'
        ]
      },
      {
        name: 'Arrows-alt-h',
        id: 'fas fa-arrows-alt-h',
        filter: [
          'arrows',
          'arrows',
          'alt',
          'h'
        ]
      },
      {
        name: 'Arrows-alt-v',
        id: 'fas fa-arrows-alt-v',
        filter: [
          'arrows',
          'arrows',
          'alt',
          'v'
        ]
      },
      {
        name: 'Caret-down',
        id: 'fas fa-caret-down',
        filter: [
          'arrows',
          'caret',
          'down'
        ]
      },
      {
        name: 'Caret-left',
        id: 'fas fa-caret-left',
        filter: [
          'arrows',
          'caret',
          'left'
        ]
      },
      {
        name: 'Caret-right',
        id: 'fas fa-caret-right',
        filter: [
          'arrows',
          'caret',
          'right'
        ]
      },
      {
        name: 'Caret-square-down',
        id: 'fas fa-caret-square-down',
        filter: [
          'arrows',
          'caret',
          'square',
          'down'
        ]
      },
      {
        name: 'Caret-square-down',
        id: 'far fa-caret-square-down',
        filter: [
          'arrows',
          'caret',
          'square',
          'down'
        ]
      },
      {
        name: 'Caret-square-left',
        id: 'fas fa-caret-square-left',
        filter: [
          'arrows',
          'caret',
          'square',
          'left'
        ]
      },
      {
        name: 'Caret-square-left',
        id: 'far fa-caret-square-left',
        filter: [
          'arrows',
          'caret',
          'square',
          'left'
        ]
      },
      {
        name: 'Caret-square-right',
        id: 'fas fa-caret-square-right',
        filter: [
          'arrows',
          'caret',
          'square',
          'right'
        ]
      },
      {
        name: 'Caret-square-right',
        id: 'far fa-caret-square-right',
        filter: [
          'arrows',
          'caret',
          'square',
          'right'
        ]
      },
      {
        name: 'Caret-square-up',
        id: 'fas fa-caret-square-up',
        filter: [
          'arrows',
          'caret',
          'square',
          'up'
        ]
      },
      {
        name: 'Caret-square-up',
        id: 'far fa-caret-square-up',
        filter: [
          'arrows',
          'caret',
          'square',
          'up'
        ]
      },
      {
        name: 'Caret-up',
        id: 'fas fa-caret-up',
        filter: [
          'arrows',
          'caret',
          'up'
        ]
      },
      {
        name: 'Cart-arrow-down',
        id: 'fas fa-cart-arrow-down',
        filter: [
          'arrows',
          'cart',
          'arrow',
          'down'
        ]
      },
      {
        name: 'Chart-line',
        id: 'fas fa-chart-line',
        filter: [
          'arrows',
          'chart',
          'line'
        ]
      },
      {
        name: 'Chevron-circle-down',
        id: 'fas fa-chevron-circle-down',
        filter: [
          'arrows',
          'chevron',
          'circle',
          'down'
        ]
      },
      {
        name: 'Chevron-circle-left',
        id: 'fas fa-chevron-circle-left',
        filter: [
          'arrows',
          'chevron',
          'circle',
          'left'
        ]
      },
      {
        name: 'Chevron-circle-right',
        id: 'fas fa-chevron-circle-right',
        filter: [
          'arrows',
          'chevron',
          'circle',
          'right'
        ]
      },
      {
        name: 'Chevron-circle-up',
        id: 'fas fa-chevron-circle-up',
        filter: [
          'arrows',
          'chevron',
          'circle',
          'up'
        ]
      },
      {
        name: 'Chevron-down',
        id: 'fas fa-chevron-down',
        filter: [
          'arrows',
          'chevron',
          'down'
        ]
      },
      {
        name: 'Chevron-left',
        id: 'fas fa-chevron-left',
        filter: [
          'arrows',
          'chevron',
          'left'
        ]
      },
      {
        name: 'Chevron-right',
        id: 'fas fa-chevron-right',
        filter: [
          'arrows',
          'chevron',
          'right'
        ]
      },
      {
        name: 'Chevron-up',
        id: 'fas fa-chevron-up',
        filter: [
          'arrows',
          'chevron',
          'up'
        ]
      },
      {
        name: 'Cloud-download-alt',
        id: 'fas fa-cloud-download-alt',
        filter: [
          'arrows',
          'cloud',
          'download',
          'alt'
        ]
      },
      {
        name: 'Cloud-upload-alt',
        id: 'fas fa-cloud-upload-alt',
        filter: [
          'arrows',
          'cloud',
          'upload',
          'alt'
        ]
      },
      {
        name: 'Download',
        id: 'fas fa-download',
        filter: [
          'arrows',
          'download'
        ]
      },
      {
        name: 'Exchange-alt',
        id: 'fas fa-exchange-alt',
        filter: [
          'arrows',
          'exchange',
          'alt'
        ]
      },
      {
        name: 'Expand-arrows-alt',
        id: 'fas fa-expand-arrows-alt',
        filter: [
          'arrows',
          'expand',
          'arrows',
          'alt'
        ]
      },
      {
        name: 'External-link-alt',
        id: 'fas fa-external-link-alt',
        filter: [
          'arrows',
          'external',
          'link',
          'alt'
        ]
      },
      {
        name: 'External-link-square-alt',
        id: 'fas fa-external-link-square-alt',
        filter: [
          'arrows',
          'external',
          'link',
          'square',
          'alt'
        ]
      },
      {
        name: 'Hand-point-down',
        id: 'fas fa-hand-point-down',
        filter: [
          'arrows',
          'hand',
          'point',
          'down'
        ]
      },
      {
        name: 'Hand-point-down',
        id: 'far fa-hand-point-down',
        filter: [
          'arrows',
          'hand',
          'point',
          'down'
        ]
      },
      {
        name: 'Hand-point-left',
        id: 'fas fa-hand-point-left',
        filter: [
          'arrows',
          'hand',
          'point',
          'left'
        ]
      },
      {
        name: 'Hand-point-left',
        id: 'far fa-hand-point-left',
        filter: [
          'arrows',
          'hand',
          'point',
          'left'
        ]
      },
      {
        name: 'Hand-point-right',
        id: 'fas fa-hand-point-right',
        filter: [
          'arrows',
          'hand',
          'point',
          'right'
        ]
      },
      {
        name: 'Hand-point-right',
        id: 'far fa-hand-point-right',
        filter: [
          'arrows',
          'hand',
          'point',
          'right'
        ]
      },
      {
        name: 'Hand-point-up',
        id: 'fas fa-hand-point-up',
        filter: [
          'arrows',
          'hand',
          'point',
          'up'
        ]
      },
      {
        name: 'Hand-point-up',
        id: 'far fa-hand-point-up',
        filter: [
          'arrows',
          'hand',
          'point',
          'up'
        ]
      },
      {
        name: 'Hand-pointer',
        id: 'fas fa-hand-pointer',
        filter: [
          'arrows',
          'hand',
          'pointer'
        ]
      },
      {
        name: 'Hand-pointer',
        id: 'far fa-hand-pointer',
        filter: [
          'arrows',
          'hand',
          'pointer'
        ]
      },
      {
        name: 'History',
        id: 'fas fa-history',
        filter: [
          'arrows',
          'history'
        ]
      },
      {
        name: 'Level-down-alt',
        id: 'fas fa-level-down-alt',
        filter: [
          'arrows',
          'level',
          'down',
          'alt'
        ]
      },
      {
        name: 'Level-up-alt',
        id: 'fas fa-level-up-alt',
        filter: [
          'arrows',
          'level',
          'up',
          'alt'
        ]
      },
      {
        name: 'Location-arrow',
        id: 'fas fa-location-arrow',
        filter: [
          'arrows',
          'location',
          'arrow'
        ]
      },
      {
        name: 'Long-arrow-alt-down',
        id: 'fas fa-long-arrow-alt-down',
        filter: [
          'arrows',
          'long',
          'arrow',
          'alt',
          'down'
        ]
      },
      {
        name: 'Long-arrow-alt-left',
        id: 'fas fa-long-arrow-alt-left',
        filter: [
          'arrows',
          'long',
          'arrow',
          'alt',
          'left'
        ]
      },
      {
        name: 'Long-arrow-alt-right',
        id: 'fas fa-long-arrow-alt-right',
        filter: [
          'arrows',
          'long',
          'arrow',
          'alt',
          'right'
        ]
      },
      {
        name: 'Long-arrow-alt-up',
        id: 'fas fa-long-arrow-alt-up',
        filter: [
          'arrows',
          'long',
          'arrow',
          'alt',
          'up'
        ]
      },
      {
        name: 'Mouse-pointer',
        id: 'fas fa-mouse-pointer',
        filter: [
          'arrows',
          'mouse',
          'pointer'
        ]
      },
      {
        name: 'Play',
        id: 'fas fa-play',
        filter: [
          'arrows',
          'play'
        ]
      },
      {
        name: 'Random',
        id: 'fas fa-random',
        filter: [
          'arrows',
          'random'
        ]
      },
      {
        name: 'Recycle',
        id: 'fas fa-recycle',
        filter: [
          'arrows',
          'recycle'
        ]
      },
      {
        name: 'Redo',
        id: 'fas fa-redo',
        filter: [
          'arrows',
          'redo'
        ]
      },
      {
        name: 'Redo-alt',
        id: 'fas fa-redo-alt',
        filter: [
          'arrows',
          'redo',
          'alt'
        ]
      },
      {
        name: 'Reply',
        id: 'fas fa-reply',
        filter: [
          'arrows',
          'reply'
        ]
      },
      {
        name: 'Reply-all',
        id: 'fas fa-reply-all',
        filter: [
          'arrows',
          'reply',
          'all'
        ]
      },
      {
        name: 'Retweet',
        id: 'fas fa-retweet',
        filter: [
          'arrows',
          'retweet'
        ]
      },
      {
        name: 'Share',
        id: 'fas fa-share',
        filter: [
          'arrows',
          'share'
        ]
      },
      {
        name: 'Share-square',
        id: 'fas fa-share-square',
        filter: [
          'arrows',
          'share',
          'square'
        ]
      },
      {
        name: 'Share-square',
        id: 'far fa-share-square',
        filter: [
          'arrows',
          'share',
          'square'
        ]
      },
      {
        name: 'Sign-in-alt',
        id: 'fas fa-sign-in-alt',
        filter: [
          'arrows',
          'sign',
          'in',
          'alt'
        ]
      },
      {
        name: 'Sign-out-alt',
        id: 'fas fa-sign-out-alt',
        filter: [
          'arrows',
          'sign',
          'out',
          'alt'
        ]
      },
      {
        name: 'Sort',
        id: 'fas fa-sort',
        filter: [
          'arrows',
          'sort'
        ]
      },
      {
        name: 'Sort-alpha-down',
        id: 'fas fa-sort-alpha-down',
        filter: [
          'arrows',
          'sort',
          'alpha',
          'down'
        ]
      },
      {
        name: 'Sort-alpha-up',
        id: 'fas fa-sort-alpha-up',
        filter: [
          'arrows',
          'sort',
          'alpha',
          'up'
        ]
      },
      {
        name: 'Sort-amount-down',
        id: 'fas fa-sort-amount-down',
        filter: [
          'arrows',
          'sort',
          'amount',
          'down'
        ]
      },
      {
        name: 'Sort-amount-up',
        id: 'fas fa-sort-amount-up',
        filter: [
          'arrows',
          'sort',
          'amount',
          'up'
        ]
      },
      {
        name: 'Sort-down',
        id: 'fas fa-sort-down',
        filter: [
          'arrows',
          'sort',
          'down'
        ]
      },
      {
        name: 'Sort-numeric-down',
        id: 'fas fa-sort-numeric-down',
        filter: [
          'arrows',
          'sort',
          'numeric',
          'down'
        ]
      },
      {
        name: 'Sort-numeric-up',
        id: 'fas fa-sort-numeric-up',
        filter: [
          'arrows',
          'sort',
          'numeric',
          'up'
        ]
      },
      {
        name: 'Sort-up',
        id: 'fas fa-sort-up',
        filter: [
          'arrows',
          'sort',
          'up'
        ]
      },
      {
        name: 'Sync',
        id: 'fas fa-sync',
        filter: [
          'arrows',
          'sync'
        ]
      },
      {
        name: 'Sync-alt',
        id: 'fas fa-sync-alt',
        filter: [
          'arrows',
          'sync',
          'alt'
        ]
      },
      {
        name: 'Text-height',
        id: 'fas fa-text-height',
        filter: [
          'arrows',
          'text',
          'height'
        ]
      },
      {
        name: 'Text-width',
        id: 'fas fa-text-width',
        filter: [
          'arrows',
          'text',
          'width'
        ]
      },
      {
        name: 'Undo',
        id: 'fas fa-undo',
        filter: [
          'arrows',
          'undo'
        ]
      },
      {
        name: 'Undo-alt',
        id: 'fas fa-undo-alt',
        filter: [
          'arrows',
          'undo',
          'alt'
        ]
      },
      {
        name: 'Upload',
        id: 'fas fa-upload',
        filter: [
          'arrows',
          'upload'
        ]
      },
      {
        name: 'Backward',
        id: 'fas fa-backward',
        filter: [
          'audio & video',
          'backward'
        ]
      },
      {
        name: 'Circle',
        id: 'fas fa-circle',
        filter: [
          'audio & video',
          'circle'
        ]
      },
      {
        name: 'Circle',
        id: 'far fa-circle',
        filter: [
          'audio & video',
          'circle'
        ]
      },
      {
        name: 'Compress',
        id: 'fas fa-compress',
        filter: [
          'audio & video',
          'compress'
        ]
      },
      {
        name: 'Eject',
        id: 'fas fa-eject',
        filter: [
          'audio & video',
          'eject'
        ]
      },
      {
        name: 'Expand',
        id: 'fas fa-expand',
        filter: [
          'audio & video',
          'expand'
        ]
      },
      {
        name: 'Fast-backward',
        id: 'fas fa-fast-backward',
        filter: [
          'audio & video',
          'fast',
          'backward'
        ]
      },
      {
        name: 'Fast-forward',
        id: 'fas fa-fast-forward',
        filter: [
          'audio & video',
          'fast',
          'forward'
        ]
      },
      {
        name: 'File-audio',
        id: 'fas fa-file-audio',
        filter: [
          'audio & video',
          'file',
          'audio'
        ]
      },
      {
        name: 'File-audio',
        id: 'far fa-file-audio',
        filter: [
          'audio & video',
          'file',
          'audio'
        ]
      },
      {
        name: 'File-video',
        id: 'fas fa-file-video',
        filter: [
          'audio & video',
          'file',
          'video'
        ]
      },
      {
        name: 'File-video',
        id: 'far fa-file-video',
        filter: [
          'audio & video',
          'file',
          'video'
        ]
      },
      {
        name: 'Film',
        id: 'fas fa-film',
        filter: [
          'audio & video',
          'film'
        ]
      },
      {
        name: 'Forward',
        id: 'fas fa-forward',
        filter: [
          'audio & video',
          'forward'
        ]
      },
      {
        name: 'Headphones',
        id: 'fas fa-headphones',
        filter: [
          'audio & video',
          'headphones'
        ]
      },
      {
        name: 'Microphone',
        id: 'fas fa-microphone',
        filter: [
          'audio & video',
          'microphone'
        ]
      },
      {
        name: 'Microphone-slash',
        id: 'fas fa-microphone-slash',
        filter: [
          'audio & video',
          'microphone',
          'slash'
        ]
      },
      {
        name: 'Music',
        id: 'fas fa-music',
        filter: [
          'audio & video',
          'music'
        ]
      },
      {
        name: 'Pause',
        id: 'fas fa-pause',
        filter: [
          'audio & video',
          'pause'
        ]
      },
      {
        name: 'Pause-circle',
        id: 'fas fa-pause-circle',
        filter: [
          'audio & video',
          'pause',
          'circle'
        ]
      },
      {
        name: 'Pause-circle',
        id: 'far fa-pause-circle',
        filter: [
          'audio & video',
          'pause',
          'circle'
        ]
      },
      {
        name: 'Play-circle',
        id: 'fas fa-play-circle',
        filter: [
          'audio & video',
          'play',
          'circle'
        ]
      },
      {
        name: 'Play-circle',
        id: 'far fa-play-circle',
        filter: [
          'audio & video',
          'play',
          'circle'
        ]
      },
      {
        name: 'Podcast',
        id: 'fas fa-podcast',
        filter: [
          'audio & video',
          'podcast'
        ]
      },
      {
        name: 'Rss',
        id: 'fas fa-rss',
        filter: [
          'audio & video',
          'rss'
        ]
      },
      {
        name: 'Rss-square',
        id: 'fas fa-rss-square',
        filter: [
          'audio & video',
          'rss',
          'square'
        ]
      },
      {
        name: 'Step-backward',
        id: 'fas fa-step-backward',
        filter: [
          'audio & video',
          'step',
          'backward'
        ]
      },
      {
        name: 'Step-forward',
        id: 'fas fa-step-forward',
        filter: [
          'audio & video',
          'step',
          'forward'
        ]
      },
      {
        name: 'Stop',
        id: 'fas fa-stop',
        filter: [
          'audio & video',
          'stop'
        ]
      },
      {
        name: 'Stop-circle',
        id: 'fas fa-stop-circle',
        filter: [
          'audio & video',
          'stop',
          'circle'
        ]
      },
      {
        name: 'Stop-circle',
        id: 'far fa-stop-circle',
        filter: [
          'audio & video',
          'stop',
          'circle'
        ]
      },
      {
        name: 'Video',
        id: 'fas fa-video',
        filter: [
          'audio & video',
          'video'
        ]
      },
      {
        name: 'Volume-down',
        id: 'fas fa-volume-down',
        filter: [
          'audio & video',
          'volume',
          'down'
        ]
      },
      {
        name: 'Volume-off',
        id: 'fas fa-volume-off',
        filter: [
          'audio & video',
          'volume',
          'off'
        ]
      },
      {
        name: 'Volume-up',
        id: 'fas fa-volume-up',
        filter: [
          'audio & video',
          'volume',
          'up'
        ]
      },
      {
        name: 'Youtube',
        id: 'fab fa-youtube',
        filter: [
          'audio & video',
          'youtube'
        ]
      },
      {
        name: 'Address-book',
        id: 'fas fa-address-book',
        filter: [
          'business',
          'address',
          'book'
        ]
      },
      {
        name: 'Address-book',
        id: 'far fa-address-book',
        filter: [
          'business',
          'address',
          'book'
        ]
      },
      {
        name: 'Address-card',
        id: 'fas fa-address-card',
        filter: [
          'business',
          'address',
          'card'
        ]
      },
      {
        name: 'Address-card',
        id: 'far fa-address-card',
        filter: [
          'business',
          'address',
          'card'
        ]
      },
      {
        name: 'Archive',
        id: 'fas fa-archive',
        filter: [
          'business',
          'archive'
        ]
      },
      {
        name: 'Balance-scale',
        id: 'fas fa-balance-scale',
        filter: [
          'business',
          'balance',
          'scale'
        ]
      },
      {
        name: 'Birthday-cake',
        id: 'fas fa-birthday-cake',
        filter: [
          'business',
          'birthday',
          'cake'
        ]
      },
      {
        name: 'Book',
        id: 'fas fa-book',
        filter: [
          'business',
          'book'
        ]
      },
      {
        name: 'Briefcase',
        id: 'fas fa-briefcase',
        filter: [
          'business',
          'briefcase'
        ]
      },
      {
        name: 'Building',
        id: 'fas fa-building',
        filter: [
          'business',
          'building'
        ]
      },
      {
        name: 'Building',
        id: 'far fa-building',
        filter: [
          'business',
          'building'
        ]
      },
      {
        name: 'Bullhorn',
        id: 'fas fa-bullhorn',
        filter: [
          'business',
          'bullhorn'
        ]
      },
      {
        name: 'Bullseye',
        id: 'fas fa-bullseye',
        filter: [
          'business',
          'bullseye'
        ]
      },
      {
        name: 'Calculator',
        id: 'fas fa-calculator',
        filter: [
          'business',
          'calculator'
        ]
      },
      {
        name: 'Calendar',
        id: 'fas fa-calendar',
        filter: [
          'business',
          'calendar'
        ]
      },
      {
        name: 'Calendar',
        id: 'far fa-calendar',
        filter: [
          'business',
          'calendar'
        ]
      },
      {
        name: 'Calendar-alt',
        id: 'fas fa-calendar-alt',
        filter: [
          'business',
          'calendar',
          'alt'
        ]
      },
      {
        name: 'Calendar-alt',
        id: 'far fa-calendar-alt',
        filter: [
          'business',
          'calendar',
          'alt'
        ]
      },
      {
        name: 'Certificate',
        id: 'fas fa-certificate',
        filter: [
          'business',
          'certificate'
        ]
      },
      {
        name: 'Chart-area',
        id: 'fas fa-chart-area',
        filter: [
          'business',
          'chart',
          'area'
        ]
      },
      {
        name: 'Chart-bar',
        id: 'fas fa-chart-bar',
        filter: [
          'business',
          'chart',
          'bar'
        ]
      },
      {
        name: 'Chart-bar',
        id: 'far fa-chart-bar',
        filter: [
          'business',
          'chart',
          'bar'
        ]
      },
      {
        name: 'Chart-pie',
        id: 'fas fa-chart-pie',
        filter: [
          'business',
          'chart',
          'pie'
        ]
      },
      {
        name: 'Clipboard',
        id: 'fas fa-clipboard',
        filter: [
          'business',
          'clipboard'
        ]
      },
      {
        name: 'Clipboard',
        id: 'far fa-clipboard',
        filter: [
          'business',
          'clipboard'
        ]
      },
      {
        name: 'Coffee',
        id: 'fas fa-coffee',
        filter: [
          'business',
          'coffee'
        ]
      },
      {
        name: 'Columns',
        id: 'fas fa-columns',
        filter: [
          'business',
          'columns'
        ]
      },
      {
        name: 'Compass',
        id: 'fas fa-compass',
        filter: [
          'business',
          'compass'
        ]
      },
      {
        name: 'Compass',
        id: 'far fa-compass',
        filter: [
          'business',
          'compass'
        ]
      },
      {
        name: 'Copy',
        id: 'fas fa-copy',
        filter: [
          'business',
          'copy'
        ]
      },
      {
        name: 'Copy',
        id: 'far fa-copy',
        filter: [
          'business',
          'copy'
        ]
      },
      {
        name: 'Copyright',
        id: 'fas fa-copyright',
        filter: [
          'business',
          'copyright'
        ]
      },
      {
        name: 'Copyright',
        id: 'far fa-copyright',
        filter: [
          'business',
          'copyright'
        ]
      },
      {
        name: 'Cut',
        id: 'fas fa-cut',
        filter: [
          'business',
          'cut'
        ]
      },
      {
        name: 'Edit',
        id: 'fas fa-edit',
        filter: [
          'business',
          'edit'
        ]
      },
      {
        name: 'Edit',
        id: 'far fa-edit',
        filter: [
          'business',
          'edit'
        ]
      },
      {
        name: 'Envelope',
        id: 'fas fa-envelope',
        filter: [
          'business',
          'envelope'
        ]
      },
      {
        name: 'Envelope',
        id: 'far fa-envelope',
        filter: [
          'business',
          'envelope'
        ]
      },
      {
        name: 'Envelope-open',
        id: 'fas fa-envelope-open',
        filter: [
          'business',
          'envelope',
          'open'
        ]
      },
      {
        name: 'Envelope-open',
        id: 'far fa-envelope-open',
        filter: [
          'business',
          'envelope',
          'open'
        ]
      },
      {
        name: 'Envelope-square',
        id: 'fas fa-envelope-square',
        filter: [
          'business',
          'envelope',
          'square'
        ]
      },
      {
        name: 'Eraser',
        id: 'fas fa-eraser',
        filter: [
          'business',
          'eraser'
        ]
      },
      {
        name: 'Fax',
        id: 'fas fa-fax',
        filter: [
          'business',
          'fax'
        ]
      },
      {
        name: 'File',
        id: 'fas fa-file',
        filter: [
          'business',
          'file'
        ]
      },
      {
        name: 'File',
        id: 'far fa-file',
        filter: [
          'business',
          'file'
        ]
      },
      {
        name: 'File-alt',
        id: 'fas fa-file-alt',
        filter: [
          'business',
          'file',
          'alt'
        ]
      },
      {
        name: 'File-alt',
        id: 'far fa-file-alt',
        filter: [
          'business',
          'file',
          'alt'
        ]
      },
      {
        name: 'Folder',
        id: 'fas fa-folder',
        filter: [
          'business',
          'folder'
        ]
      },
      {
        name: 'Folder',
        id: 'far fa-folder',
        filter: [
          'business',
          'folder'
        ]
      },
      {
        name: 'Folder-open',
        id: 'fas fa-folder-open',
        filter: [
          'business',
          'folder',
          'open'
        ]
      },
      {
        name: 'Folder-open',
        id: 'far fa-folder-open',
        filter: [
          'business',
          'folder',
          'open'
        ]
      },
      {
        name: 'Globe',
        id: 'fas fa-globe',
        filter: [
          'business',
          'globe'
        ]
      },
      {
        name: 'Industry',
        id: 'fas fa-industry',
        filter: [
          'business',
          'industry'
        ]
      },
      {
        name: 'Paperclip',
        id: 'fas fa-paperclip',
        filter: [
          'business',
          'paperclip'
        ]
      },
      {
        name: 'Paste',
        id: 'fas fa-paste',
        filter: [
          'business',
          'paste'
        ]
      },
      {
        name: 'Pen-square',
        id: 'fas fa-pen-square',
        filter: [
          'business',
          'pen',
          'square'
        ]
      },
      {
        name: 'Pencil-alt',
        id: 'fas fa-pencil-alt',
        filter: [
          'business',
          'pencil',
          'alt'
        ]
      },
      {
        name: 'Percent',
        id: 'fas fa-percent',
        filter: [
          'business',
          'percent'
        ]
      },
      {
        name: 'Phone',
        id: 'fas fa-phone',
        filter: [
          'business',
          'phone'
        ]
      },
      {
        name: 'Phone-square',
        id: 'fas fa-phone-square',
        filter: [
          'business',
          'phone',
          'square'
        ]
      },
      {
        name: 'Registered',
        id: 'fas fa-registered',
        filter: [
          'business',
          'registered'
        ]
      },
      {
        name: 'Registered',
        id: 'far fa-registered',
        filter: [
          'business',
          'registered'
        ]
      },
      {
        name: 'Save',
        id: 'fas fa-save',
        filter: [
          'business',
          'save'
        ]
      },
      {
        name: 'Save',
        id: 'far fa-save',
        filter: [
          'business',
          'save'
        ]
      },
      {
        name: 'Sitemap',
        id: 'fas fa-sitemap',
        filter: [
          'business',
          'sitemap'
        ]
      },
      {
        name: 'Sticky-note',
        id: 'fas fa-sticky-note',
        filter: [
          'business',
          'sticky',
          'note'
        ]
      },
      {
        name: 'Sticky-note',
        id: 'far fa-sticky-note',
        filter: [
          'business',
          'sticky',
          'note'
        ]
      },
      {
        name: 'Suitcase',
        id: 'fas fa-suitcase',
        filter: [
          'business',
          'suitcase'
        ]
      },
      {
        name: 'Table',
        id: 'fas fa-table',
        filter: [
          'business',
          'table'
        ]
      },
      {
        name: 'Tag',
        id: 'fas fa-tag',
        filter: [
          'business',
          'tag'
        ]
      },
      {
        name: 'Tags',
        id: 'fas fa-tags',
        filter: [
          'business',
          'tags'
        ]
      },
      {
        name: 'Tasks',
        id: 'fas fa-tasks',
        filter: [
          'business',
          'tasks'
        ]
      },
      {
        name: 'Thumbtack',
        id: 'fas fa-thumbtack',
        filter: [
          'business',
          'thumbtack'
        ]
      },
      {
        name: 'Trademark',
        id: 'fas fa-trademark',
        filter: [
          'business',
          'trademark'
        ]
      },
      {
        name: 'Chess',
        id: 'fas fa-chess',
        filter: [
          'chess',
          'chess'
        ]
      },
      {
        name: 'Chess-bishop',
        id: 'fas fa-chess-bishop',
        filter: [
          'chess',
          'chess',
          'bishop'
        ]
      },
      {
        name: 'Chess-board',
        id: 'fas fa-chess-board',
        filter: [
          'chess',
          'chess',
          'board'
        ]
      },
      {
        name: 'Chess-king',
        id: 'fas fa-chess-king',
        filter: [
          'chess',
          'chess',
          'king'
        ]
      },
      {
        name: 'Chess-knight',
        id: 'fas fa-chess-knight',
        filter: [
          'chess',
          'chess',
          'knight'
        ]
      },
      {
        name: 'Chess-pawn',
        id: 'fas fa-chess-pawn',
        filter: [
          'chess',
          'chess',
          'pawn'
        ]
      },
      {
        name: 'Chess-queen',
        id: 'fas fa-chess-queen',
        filter: [
          'chess',
          'chess',
          'queen'
        ]
      },
      {
        name: 'Chess-rook',
        id: 'fas fa-chess-rook',
        filter: [
          'chess',
          'chess',
          'rook'
        ]
      },
      {
        name: 'Square-full',
        id: 'fas fa-square-full',
        filter: [
          'chess',
          'square',
          'full'
        ]
      },
      {
        name: 'Barcode',
        id: 'fas fa-barcode',
        filter: [
          'code',
          'barcode'
        ]
      },
      {
        name: 'Bath',
        id: 'fas fa-bath',
        filter: [
          'code',
          'bath'
        ]
      },
      {
        name: 'Bug',
        id: 'fas fa-bug',
        filter: [
          'code',
          'bug'
        ]
      },
      {
        name: 'Code',
        id: 'fas fa-code',
        filter: [
          'code',
          'code'
        ]
      },
      {
        name: 'Code-branch',
        id: 'fas fa-code-branch',
        filter: [
          'code',
          'code',
          'branch'
        ]
      },
      {
        name: 'File-code',
        id: 'fas fa-file-code',
        filter: [
          'code',
          'file',
          'code'
        ]
      },
      {
        name: 'File-code',
        id: 'far fa-file-code',
        filter: [
          'code',
          'file',
          'code'
        ]
      },
      {
        name: 'Filter',
        id: 'fas fa-filter',
        filter: [
          'code',
          'filter'
        ]
      },
      {
        name: 'Fire-extinguisher',
        id: 'fas fa-fire-extinguisher',
        filter: [
          'code',
          'fire',
          'extinguisher'
        ]
      },
      {
        name: 'Keyboard',
        id: 'fas fa-keyboard',
        filter: [
          'code',
          'keyboard'
        ]
      },
      {
        name: 'Keyboard',
        id: 'far fa-keyboard',
        filter: [
          'code',
          'keyboard'
        ]
      },
      {
        name: 'Microchip',
        id: 'fas fa-microchip',
        filter: [
          'code',
          'microchip'
        ]
      },
      {
        name: 'Qrcode',
        id: 'fas fa-qrcode',
        filter: [
          'code',
          'qrcode'
        ]
      },
      {
        name: 'Shield-alt',
        id: 'fas fa-shield-alt',
        filter: [
          'code',
          'shield',
          'alt'
        ]
      },
      {
        name: 'Terminal',
        id: 'fas fa-terminal',
        filter: [
          'code',
          'terminal'
        ]
      },
      {
        name: 'User-secret',
        id: 'fas fa-user-secret',
        filter: [
          'code',
          'user',
          'secret'
        ]
      },
      {
        name: 'Window-close',
        id: 'fas fa-window-close',
        filter: [
          'code',
          'window',
          'close'
        ]
      },
      {
        name: 'Window-close',
        id: 'far fa-window-close',
        filter: [
          'code',
          'window',
          'close'
        ]
      },
      {
        name: 'Window-maximize',
        id: 'fas fa-window-maximize',
        filter: [
          'code',
          'window',
          'maximize'
        ]
      },
      {
        name: 'Window-maximize',
        id: 'far fa-window-maximize',
        filter: [
          'code',
          'window',
          'maximize'
        ]
      },
      {
        name: 'Window-minimize',
        id: 'fas fa-window-minimize',
        filter: [
          'code',
          'window',
          'minimize'
        ]
      },
      {
        name: 'Window-minimize',
        id: 'far fa-window-minimize',
        filter: [
          'code',
          'window',
          'minimize'
        ]
      },
      {
        name: 'Window-restore',
        id: 'fas fa-window-restore',
        filter: [
          'code',
          'window',
          'restore'
        ]
      },
      {
        name: 'Window-restore',
        id: 'far fa-window-restore',
        filter: [
          'code',
          'window',
          'restore'
        ]
      },
      {
        name: 'At',
        id: 'fas fa-at',
        filter: [
          'communication',
          'at'
        ]
      },
      {
        name: 'Bell',
        id: 'fas fa-bell',
        filter: [
          'communication',
          'bell'
        ]
      },
      {
        name: 'Bell',
        id: 'far fa-bell',
        filter: [
          'communication',
          'bell'
        ]
      },
      {
        name: 'Bell-slash',
        id: 'fas fa-bell-slash',
        filter: [
          'communication',
          'bell',
          'slash'
        ]
      },
      {
        name: 'Bell-slash',
        id: 'far fa-bell-slash',
        filter: [
          'communication',
          'bell',
          'slash'
        ]
      },
      {
        name: 'Bluetooth',
        id: 'fab fa-bluetooth',
        filter: [
          'communication',
          'bluetooth'
        ]
      },
      {
        name: 'Bluetooth-b',
        id: 'fab fa-bluetooth-b',
        filter: [
          'communication',
          'bluetooth',
          'b'
        ]
      },
      {
        name: 'Comment',
        id: 'fas fa-comment',
        filter: [
          'communication',
          'comment'
        ]
      },
      {
        name: 'Comment',
        id: 'far fa-comment',
        filter: [
          'communication',
          'comment'
        ]
      },
      {
        name: 'Comment-alt',
        id: 'fas fa-comment-alt',
        filter: [
          'communication',
          'comment',
          'alt'
        ]
      },
      {
        name: 'Comment-alt',
        id: 'far fa-comment-alt',
        filter: [
          'communication',
          'comment',
          'alt'
        ]
      },
      {
        name: 'Comments',
        id: 'fas fa-comments',
        filter: [
          'communication',
          'comments'
        ]
      },
      {
        name: 'Comments',
        id: 'far fa-comments',
        filter: [
          'communication',
          'comments'
        ]
      },
      {
        name: 'Inbox',
        id: 'fas fa-inbox',
        filter: [
          'communication',
          'inbox'
        ]
      },
      {
        name: 'Language',
        id: 'fas fa-language',
        filter: [
          'communication',
          'language'
        ]
      },
      {
        name: 'Mobile',
        id: 'fas fa-mobile',
        filter: [
          'communication',
          'mobile'
        ]
      },
      {
        name: 'Mobile-alt',
        id: 'fas fa-mobile-alt',
        filter: [
          'communication',
          'mobile',
          'alt'
        ]
      },
      {
        name: 'Paper-plane',
        id: 'fas fa-paper-plane',
        filter: [
          'communication',
          'paper',
          'plane'
        ]
      },
      {
        name: 'Paper-plane',
        id: 'far fa-paper-plane',
        filter: [
          'communication',
          'paper',
          'plane'
        ]
      },
      {
        name: 'Wifi',
        id: 'fas fa-wifi',
        filter: [
          'communication',
          'wifi'
        ]
      },
      {
        name: 'Desktop',
        id: 'fas fa-desktop',
        filter: [
          'computers',
          'desktop'
        ]
      },
      {
        name: 'Hdd',
        id: 'fas fa-hdd',
        filter: [
          'computers',
          'hdd'
        ]
      },
      {
        name: 'Hdd',
        id: 'far fa-hdd',
        filter: [
          'computers',
          'hdd'
        ]
      },
      {
        name: 'Laptop',
        id: 'fas fa-laptop',
        filter: [
          'computers',
          'laptop'
        ]
      },
      {
        name: 'Plug',
        id: 'fas fa-plug',
        filter: [
          'computers',
          'plug'
        ]
      },
      {
        name: 'Power-off',
        id: 'fas fa-power-off',
        filter: [
          'computers',
          'power',
          'off'
        ]
      },
      {
        name: 'Print',
        id: 'fas fa-print',
        filter: [
          'computers',
          'print'
        ]
      },
      {
        name: 'Server',
        id: 'fas fa-server',
        filter: [
          'computers',
          'server'
        ]
      },
      {
        name: 'Tablet',
        id: 'fas fa-tablet',
        filter: [
          'computers',
          'tablet'
        ]
      },
      {
        name: 'Tablet-alt',
        id: 'fas fa-tablet-alt',
        filter: [
          'computers',
          'tablet',
          'alt'
        ]
      },
      {
        name: 'Tv',
        id: 'fas fa-tv',
        filter: [
          'computers',
          'tv'
        ]
      },
      {
        name: 'Bitcoin',
        id: 'fab fa-bitcoin',
        filter: [
          'currency',
          'bitcoin'
        ]
      },
      {
        name: 'Btc',
        id: 'fab fa-btc',
        filter: [
          'currency',
          'btc'
        ]
      },
      {
        name: 'Dollar-sign',
        id: 'fas fa-dollar-sign',
        filter: [
          'currency',
          'dollar',
          'sign'
        ]
      },
      {
        name: 'Euro-sign',
        id: 'fas fa-euro-sign',
        filter: [
          'currency',
          'euro',
          'sign'
        ]
      },
      {
        name: 'Gg',
        id: 'fab fa-gg',
        filter: [
          'currency',
          'gg'
        ]
      },
      {
        name: 'Gg-circle',
        id: 'fab fa-gg-circle',
        filter: [
          'currency',
          'gg',
          'circle'
        ]
      },
      {
        name: 'Lira-sign',
        id: 'fas fa-lira-sign',
        filter: [
          'currency',
          'lira',
          'sign'
        ]
      },
      {
        name: 'Money-bill-alt',
        id: 'fas fa-money-bill-alt',
        filter: [
          'currency',
          'money',
          'bill',
          'alt'
        ]
      },
      {
        name: 'Money-bill-alt',
        id: 'far fa-money-bill-alt',
        filter: [
          'currency',
          'money',
          'bill',
          'alt'
        ]
      },
      {
        name: 'Pound-sign',
        id: 'fas fa-pound-sign',
        filter: [
          'currency',
          'pound',
          'sign'
        ]
      },
      {
        name: 'Ruble-sign',
        id: 'fas fa-ruble-sign',
        filter: [
          'currency',
          'ruble',
          'sign'
        ]
      },
      {
        name: 'Rupee-sign',
        id: 'fas fa-rupee-sign',
        filter: [
          'currency',
          'rupee',
          'sign'
        ]
      },
      {
        name: 'Shekel-sign',
        id: 'fas fa-shekel-sign',
        filter: [
          'currency',
          'shekel',
          'sign'
        ]
      },
      {
        name: 'Won-sign',
        id: 'fas fa-won-sign',
        filter: [
          'currency',
          'won',
          'sign'
        ]
      },
      {
        name: 'Yen-sign',
        id: 'fas fa-yen-sign',
        filter: [
          'currency',
          'yen',
          'sign'
        ]
      },
      {
        name: 'Calendar-check',
        id: 'fas fa-calendar-check',
        filter: [
          'date & time',
          'calendar',
          'check'
        ]
      },
      {
        name: 'Calendar-check',
        id: 'far fa-calendar-check',
        filter: [
          'date & time',
          'calendar',
          'check'
        ]
      },
      {
        name: 'Calendar-minus',
        id: 'fas fa-calendar-minus',
        filter: [
          'date & time',
          'calendar',
          'minus'
        ]
      },
      {
        name: 'Calendar-minus',
        id: 'far fa-calendar-minus',
        filter: [
          'date & time',
          'calendar',
          'minus'
        ]
      },
      {
        name: 'Calendar-plus',
        id: 'fas fa-calendar-plus',
        filter: [
          'date & time',
          'calendar',
          'plus'
        ]
      },
      {
        name: 'Calendar-plus',
        id: 'far fa-calendar-plus',
        filter: [
          'date & time',
          'calendar',
          'plus'
        ]
      },
      {
        name: 'Calendar-times',
        id: 'fas fa-calendar-times',
        filter: [
          'date & time',
          'calendar',
          'times'
        ]
      },
      {
        name: 'Calendar-times',
        id: 'far fa-calendar-times',
        filter: [
          'date & time',
          'calendar',
          'times'
        ]
      },
      {
        name: 'Clock',
        id: 'fas fa-clock',
        filter: [
          'date & time',
          'clock'
        ]
      },
      {
        name: 'Clock',
        id: 'far fa-clock',
        filter: [
          'date & time',
          'clock'
        ]
      },
      {
        name: 'Hourglass',
        id: 'fas fa-hourglass',
        filter: [
          'date & time',
          'hourglass'
        ]
      },
      {
        name: 'Hourglass',
        id: 'far fa-hourglass',
        filter: [
          'date & time',
          'hourglass'
        ]
      },
      {
        name: 'Hourglass-end',
        id: 'fas fa-hourglass-end',
        filter: [
          'date & time',
          'hourglass',
          'end'
        ]
      },
      {
        name: 'Hourglass-half',
        id: 'fas fa-hourglass-half',
        filter: [
          'date & time',
          'hourglass',
          'half'
        ]
      },
      {
        name: 'Hourglass-start',
        id: 'fas fa-hourglass-start',
        filter: [
          'date & time',
          'hourglass',
          'start'
        ]
      },
      {
        name: 'Stopwatch',
        id: 'fas fa-stopwatch',
        filter: [
          'date & time',
          'stopwatch'
        ]
      },
      {
        name: 'Adjust',
        id: 'fas fa-adjust',
        filter: [
          'design',
          'adjust'
        ]
      },
      {
        name: 'Clone',
        id: 'fas fa-clone',
        filter: [
          'design',
          'clone'
        ]
      },
      {
        name: 'Clone',
        id: 'far fa-clone',
        filter: [
          'design',
          'clone'
        ]
      },
      {
        name: 'Crop',
        id: 'fas fa-crop',
        filter: [
          'design',
          'crop'
        ]
      },
      {
        name: 'Crosshairs',
        id: 'fas fa-crosshairs',
        filter: [
          'design',
          'crosshairs'
        ]
      },
      {
        name: 'Eye',
        id: 'fas fa-eye',
        filter: [
          'design',
          'eye'
        ]
      },
      {
        name: 'Eye-dropper',
        id: 'fas fa-eye-dropper',
        filter: [
          'design',
          'eye',
          'dropper'
        ]
      },
      {
        name: 'Eye-slash',
        id: 'fas fa-eye-slash',
        filter: [
          'design',
          'eye',
          'slash'
        ]
      },
      {
        name: 'Eye-slash',
        id: 'far fa-eye-slash',
        filter: [
          'design',
          'eye',
          'slash'
        ]
      },
      {
        name: 'Object-group',
        id: 'fas fa-object-group',
        filter: [
          'design',
          'object',
          'group'
        ]
      },
      {
        name: 'Object-group',
        id: 'far fa-object-group',
        filter: [
          'design',
          'object',
          'group'
        ]
      },
      {
        name: 'Object-ungroup',
        id: 'fas fa-object-ungroup',
        filter: [
          'design',
          'object',
          'ungroup'
        ]
      },
      {
        name: 'Object-ungroup',
        id: 'far fa-object-ungroup',
        filter: [
          'design',
          'object',
          'ungroup'
        ]
      },
      {
        name: 'Paint-brush',
        id: 'fas fa-paint-brush',
        filter: [
          'design',
          'paint',
          'brush'
        ]
      },
      {
        name: 'Tint',
        id: 'fas fa-tint',
        filter: [
          'design',
          'tint'
        ]
      },
      {
        name: 'Align-center',
        id: 'fas fa-align-center',
        filter: [
          'editors',
          'align',
          'center'
        ]
      },
      {
        name: 'Align-justify',
        id: 'fas fa-align-justify',
        filter: [
          'editors',
          'align',
          'justify'
        ]
      },
      {
        name: 'Align-left',
        id: 'fas fa-align-left',
        filter: [
          'editors',
          'align',
          'left'
        ]
      },
      {
        name: 'Align-right',
        id: 'fas fa-align-right',
        filter: [
          'editors',
          'align',
          'right'
        ]
      },
      {
        name: 'Bold',
        id: 'fas fa-bold',
        filter: [
          'editors',
          'bold'
        ]
      },
      {
        name: 'Font',
        id: 'fas fa-font',
        filter: [
          'editors',
          'font'
        ]
      },
      {
        name: 'Heading',
        id: 'fas fa-heading',
        filter: [
          'editors',
          'heading'
        ]
      },
      {
        name: 'I-cursor',
        id: 'fas fa-i-cursor',
        filter: [
          'editors',
          'i',
          'cursor'
        ]
      },
      {
        name: 'Indent',
        id: 'fas fa-indent',
        filter: [
          'editors',
          'indent'
        ]
      },
      {
        name: 'Italic',
        id: 'fas fa-italic',
        filter: [
          'editors',
          'italic'
        ]
      },
      {
        name: 'Link',
        id: 'fas fa-link',
        filter: [
          'editors',
          'link'
        ]
      },
      {
        name: 'List',
        id: 'fas fa-list',
        filter: [
          'editors',
          'list'
        ]
      },
      {
        name: 'List-alt',
        id: 'fas fa-list-alt',
        filter: [
          'editors',
          'list',
          'alt'
        ]
      },
      {
        name: 'List-alt',
        id: 'far fa-list-alt',
        filter: [
          'editors',
          'list',
          'alt'
        ]
      },
      {
        name: 'List-ol',
        id: 'fas fa-list-ol',
        filter: [
          'editors',
          'list',
          'ol'
        ]
      },
      {
        name: 'List-ul',
        id: 'fas fa-list-ul',
        filter: [
          'editors',
          'list',
          'ul'
        ]
      },
      {
        name: 'Outdent',
        id: 'fas fa-outdent',
        filter: [
          'editors',
          'outdent'
        ]
      },
      {
        name: 'Paragraph',
        id: 'fas fa-paragraph',
        filter: [
          'editors',
          'paragraph'
        ]
      },
      {
        name: 'Quote-left',
        id: 'fas fa-quote-left',
        filter: [
          'editors',
          'quote',
          'left'
        ]
      },
      {
        name: 'Quote-right',
        id: 'fas fa-quote-right',
        filter: [
          'editors',
          'quote',
          'right'
        ]
      },
      {
        name: 'Strikethrough',
        id: 'fas fa-strikethrough',
        filter: [
          'editors',
          'strikethrough'
        ]
      },
      {
        name: 'Subscript',
        id: 'fas fa-subscript',
        filter: [
          'editors',
          'subscript'
        ]
      },
      {
        name: 'Superscript',
        id: 'fas fa-superscript',
        filter: [
          'editors',
          'superscript'
        ]
      },
      {
        name: 'Th',
        id: 'fas fa-th',
        filter: [
          'editors',
          'th'
        ]
      },
      {
        name: 'Th-large',
        id: 'fas fa-th-large',
        filter: [
          'editors',
          'th',
          'large'
        ]
      },
      {
        name: 'Th-list',
        id: 'fas fa-th-list',
        filter: [
          'editors',
          'th',
          'list'
        ]
      },
      {
        name: 'Trash',
        id: 'fas fa-trash',
        filter: [
          'editors',
          'trash'
        ]
      },
      {
        name: 'Trash-alt',
        id: 'fas fa-trash-alt',
        filter: [
          'editors',
          'trash',
          'alt'
        ]
      },
      {
        name: 'Trash-alt',
        id: 'far fa-trash-alt',
        filter: [
          'editors',
          'trash',
          'alt'
        ]
      },
      {
        name: 'Underline',
        id: 'fas fa-underline',
        filter: [
          'editors',
          'underline'
        ]
      },
      {
        name: 'Unlink',
        id: 'fas fa-unlink',
        filter: [
          'editors',
          'unlink'
        ]
      },
      {
        name: 'File-archive',
        id: 'fas fa-file-archive',
        filter: [
          'files',
          'file',
          'archive'
        ]
      },
      {
        name: 'File-archive',
        id: 'far fa-file-archive',
        filter: [
          'files',
          'file',
          'archive'
        ]
      },
      {
        name: 'File-excel',
        id: 'fas fa-file-excel',
        filter: [
          'files',
          'file',
          'excel'
        ]
      },
      {
        name: 'File-excel',
        id: 'far fa-file-excel',
        filter: [
          'files',
          'file',
          'excel'
        ]
      },
      {
        name: 'File-image',
        id: 'fas fa-file-image',
        filter: [
          'files',
          'file',
          'image'
        ]
      },
      {
        name: 'File-image',
        id: 'far fa-file-image',
        filter: [
          'files',
          'file',
          'image'
        ]
      },
      {
        name: 'File-pdf',
        id: 'fas fa-file-pdf',
        filter: [
          'files',
          'file',
          'pdf'
        ]
      },
      {
        name: 'File-pdf',
        id: 'far fa-file-pdf',
        filter: [
          'files',
          'file',
          'pdf'
        ]
      },
      {
        name: 'File-powerpoint',
        id: 'fas fa-file-powerpoint',
        filter: [
          'files',
          'file',
          'powerpoint'
        ]
      },
      {
        name: 'File-powerpoint',
        id: 'far fa-file-powerpoint',
        filter: [
          'files',
          'file',
          'powerpoint'
        ]
      },
      {
        name: 'File-word',
        id: 'fas fa-file-word',
        filter: [
          'files',
          'file',
          'word'
        ]
      },
      {
        name: 'File-word',
        id: 'far fa-file-word',
        filter: [
          'files',
          'file',
          'word'
        ]
      },
      {
        name: 'Genderless',
        id: 'fas fa-genderless',
        filter: [
          'genders',
          'genderless'
        ]
      },
      {
        name: 'Mars',
        id: 'fas fa-mars',
        filter: [
          'genders',
          'mars'
        ]
      },
      {
        name: 'Mars-double',
        id: 'fas fa-mars-double',
        filter: [
          'genders',
          'mars',
          'double'
        ]
      },
      {
        name: 'Mars-stroke',
        id: 'fas fa-mars-stroke',
        filter: [
          'genders',
          'mars',
          'stroke'
        ]
      },
      {
        name: 'Mars-stroke-h',
        id: 'fas fa-mars-stroke-h',
        filter: [
          'genders',
          'mars',
          'stroke',
          'h'
        ]
      },
      {
        name: 'Mars-stroke-v',
        id: 'fas fa-mars-stroke-v',
        filter: [
          'genders',
          'mars',
          'stroke',
          'v'
        ]
      },
      {
        name: 'Mercury',
        id: 'fas fa-mercury',
        filter: [
          'genders',
          'mercury'
        ]
      },
      {
        name: 'Neuter',
        id: 'fas fa-neuter',
        filter: [
          'genders',
          'neuter'
        ]
      },
      {
        name: 'Transgender',
        id: 'fas fa-transgender',
        filter: [
          'genders',
          'transgender'
        ]
      },
      {
        name: 'Transgender-alt',
        id: 'fas fa-transgender-alt',
        filter: [
          'genders',
          'transgender',
          'alt'
        ]
      },
      {
        name: 'Venus',
        id: 'fas fa-venus',
        filter: [
          'genders',
          'venus'
        ]
      },
      {
        name: 'Venus-double',
        id: 'fas fa-venus-double',
        filter: [
          'genders',
          'venus',
          'double'
        ]
      },
      {
        name: 'Venus-mars',
        id: 'fas fa-venus-mars',
        filter: [
          'genders',
          'venus',
          'mars'
        ]
      },
      {
        name: 'Hand-lizard',
        id: 'fas fa-hand-lizard',
        filter: [
          'hands',
          'hand',
          'lizard'
        ]
      },
      {
        name: 'Hand-lizard',
        id: 'far fa-hand-lizard',
        filter: [
          'hands',
          'hand',
          'lizard'
        ]
      },
      {
        name: 'Hand-paper',
        id: 'fas fa-hand-paper',
        filter: [
          'hands',
          'hand',
          'paper'
        ]
      },
      {
        name: 'Hand-paper',
        id: 'far fa-hand-paper',
        filter: [
          'hands',
          'hand',
          'paper'
        ]
      },
      {
        name: 'Hand-peace',
        id: 'fas fa-hand-peace',
        filter: [
          'hands',
          'hand',
          'peace'
        ]
      },
      {
        name: 'Hand-peace',
        id: 'far fa-hand-peace',
        filter: [
          'hands',
          'hand',
          'peace'
        ]
      },
      {
        name: 'Hand-rock',
        id: 'fas fa-hand-rock',
        filter: [
          'hands',
          'hand',
          'rock'
        ]
      },
      {
        name: 'Hand-rock',
        id: 'far fa-hand-rock',
        filter: [
          'hands',
          'hand',
          'rock'
        ]
      },
      {
        name: 'Hand-scissors',
        id: 'fas fa-hand-scissors',
        filter: [
          'hands',
          'hand',
          'scissors'
        ]
      },
      {
        name: 'Hand-scissors',
        id: 'far fa-hand-scissors',
        filter: [
          'hands',
          'hand',
          'scissors'
        ]
      },
      {
        name: 'Hand-spock',
        id: 'fas fa-hand-spock',
        filter: [
          'hands',
          'hand',
          'spock'
        ]
      },
      {
        name: 'Hand-spock',
        id: 'far fa-hand-spock',
        filter: [
          'hands',
          'hand',
          'spock'
        ]
      },
      {
        name: 'Handshake',
        id: 'fas fa-handshake',
        filter: [
          'hands',
          'handshake'
        ]
      },
      {
        name: 'Handshake',
        id: 'far fa-handshake',
        filter: [
          'hands',
          'handshake'
        ]
      },
      {
        name: 'Thumbs-down',
        id: 'fas fa-thumbs-down',
        filter: [
          'hands',
          'thumbs',
          'down'
        ]
      },
      {
        name: 'Thumbs-down',
        id: 'far fa-thumbs-down',
        filter: [
          'hands',
          'thumbs',
          'down'
        ]
      },
      {
        name: 'Thumbs-up',
        id: 'fas fa-thumbs-up',
        filter: [
          'hands',
          'thumbs',
          'up'
        ]
      },
      {
        name: 'Thumbs-up',
        id: 'far fa-thumbs-up',
        filter: [
          'hands',
          'thumbs',
          'up'
        ]
      },
      {
        name: 'Ambulance',
        id: 'fas fa-ambulance',
        filter: [
          'health',
          'ambulance'
        ]
      },
      {
        name: 'H-square',
        id: 'fas fa-h-square',
        filter: [
          'health',
          'h',
          'square'
        ]
      },
      {
        name: 'Heart',
        id: 'fas fa-heart',
        filter: [
          'health',
          'heart'
        ]
      },
      {
        name: 'Heart',
        id: 'far fa-heart',
        filter: [
          'health',
          'heart'
        ]
      },
      {
        name: 'Heartbeat',
        id: 'fas fa-heartbeat',
        filter: [
          'health',
          'heartbeat'
        ]
      },
      {
        name: 'Hospital',
        id: 'fas fa-hospital',
        filter: [
          'health',
          'hospital'
        ]
      },
      {
        name: 'Hospital',
        id: 'far fa-hospital',
        filter: [
          'health',
          'hospital'
        ]
      },
      {
        name: 'Medkit',
        id: 'fas fa-medkit',
        filter: [
          'health',
          'medkit'
        ]
      },
      {
        name: 'Plus-square',
        id: 'fas fa-plus-square',
        filter: [
          'health',
          'plus',
          'square'
        ]
      },
      {
        name: 'Plus-square',
        id: 'far fa-plus-square',
        filter: [
          'health',
          'plus',
          'square'
        ]
      },
      {
        name: 'Stethoscope',
        id: 'fas fa-stethoscope',
        filter: [
          'health',
          'stethoscope'
        ]
      },
      {
        name: 'User-md',
        id: 'fas fa-user-md',
        filter: [
          'health',
          'user',
          'md'
        ]
      },
      {
        name: 'Bolt',
        id: 'fas fa-bolt',
        filter: [
          'images',
          'bolt'
        ]
      },
      {
        name: 'Camera',
        id: 'fas fa-camera',
        filter: [
          'images',
          'camera'
        ]
      },
      {
        name: 'Camera-retro',
        id: 'fas fa-camera-retro',
        filter: [
          'images',
          'camera',
          'retro'
        ]
      },
      {
        name: 'Id-badge',
        id: 'fas fa-id-badge',
        filter: [
          'images',
          'id',
          'badge'
        ]
      },
      {
        name: 'Id-badge',
        id: 'far fa-id-badge',
        filter: [
          'images',
          'id',
          'badge'
        ]
      },
      {
        name: 'Id-card',
        id: 'fas fa-id-card',
        filter: [
          'images',
          'id',
          'card'
        ]
      },
      {
        name: 'Id-card',
        id: 'far fa-id-card',
        filter: [
          'images',
          'id',
          'card'
        ]
      },
      {
        name: 'Image',
        id: 'fas fa-image',
        filter: [
          'images',
          'image'
        ]
      },
      {
        name: 'Image',
        id: 'far fa-image',
        filter: [
          'images',
          'image'
        ]
      },
      {
        name: 'Images',
        id: 'fas fa-images',
        filter: [
          'images',
          'images'
        ]
      },
      {
        name: 'Images',
        id: 'far fa-images',
        filter: [
          'images',
          'images'
        ]
      },
      {
        name: 'Sliders-h',
        id: 'fas fa-sliders-h',
        filter: [
          'images',
          'sliders',
          'h'
        ]
      },
      {
        name: 'Ban',
        id: 'fas fa-ban',
        filter: [
          'interfaces',
          'ban'
        ]
      },
      {
        name: 'Bars',
        id: 'fas fa-bars',
        filter: [
          'interfaces',
          'bars'
        ]
      },
      {
        name: 'Beer',
        id: 'fas fa-beer',
        filter: [
          'interfaces',
          'beer'
        ]
      },
      {
        name: 'Check',
        id: 'fas fa-check',
        filter: [
          'interfaces',
          'check'
        ]
      },
      {
        name: 'Check-circle',
        id: 'fas fa-check-circle',
        filter: [
          'interfaces',
          'check',
          'circle'
        ]
      },
      {
        name: 'Check-circle',
        id: 'far fa-check-circle',
        filter: [
          'interfaces',
          'check',
          'circle'
        ]
      },
      {
        name: 'Check-square',
        id: 'fas fa-check-square',
        filter: [
          'interfaces',
          'check',
          'square'
        ]
      },
      {
        name: 'Check-square',
        id: 'far fa-check-square',
        filter: [
          'interfaces',
          'check',
          'square'
        ]
      },
      {
        name: 'Cloud',
        id: 'fas fa-cloud',
        filter: [
          'interfaces',
          'cloud'
        ]
      },
      {
        name: 'Cog',
        id: 'fas fa-cog',
        filter: [
          'interfaces',
          'cog'
        ]
      },
      {
        name: 'Cogs',
        id: 'fas fa-cogs',
        filter: [
          'interfaces',
          'cogs'
        ]
      },
      {
        name: 'Database',
        id: 'fas fa-database',
        filter: [
          'interfaces',
          'database'
        ]
      },
      {
        name: 'Dot-circle',
        id: 'fas fa-dot-circle',
        filter: [
          'interfaces',
          'dot',
          'circle'
        ]
      },
      {
        name: 'Dot-circle',
        id: 'far fa-dot-circle',
        filter: [
          'interfaces',
          'dot',
          'circle'
        ]
      },
      {
        name: 'Ellipsis-h',
        id: 'fas fa-ellipsis-h',
        filter: [
          'interfaces',
          'ellipsis',
          'h'
        ]
      },
      {
        name: 'Ellipsis-v',
        id: 'fas fa-ellipsis-v',
        filter: [
          'interfaces',
          'ellipsis',
          'v'
        ]
      },
      {
        name: 'Exclamation',
        id: 'fas fa-exclamation',
        filter: [
          'interfaces',
          'exclamation'
        ]
      },
      {
        name: 'Exclamation-circle',
        id: 'fas fa-exclamation-circle',
        filter: [
          'interfaces',
          'exclamation',
          'circle'
        ]
      },
      {
        name: 'Exclamation-triangle',
        id: 'fas fa-exclamation-triangle',
        filter: [
          'interfaces',
          'exclamation',
          'triangle'
        ]
      },
      {
        name: 'Flag',
        id: 'fas fa-flag',
        filter: [
          'interfaces',
          'flag'
        ]
      },
      {
        name: 'Flag',
        id: 'far fa-flag',
        filter: [
          'interfaces',
          'flag'
        ]
      },
      {
        name: 'Flag-checkered',
        id: 'fas fa-flag-checkered',
        filter: [
          'interfaces',
          'flag',
          'checkered'
        ]
      },
      {
        name: 'Frown',
        id: 'fas fa-frown',
        filter: [
          'interfaces',
          'frown'
        ]
      },
      {
        name: 'Frown',
        id: 'far fa-frown',
        filter: [
          'interfaces',
          'frown'
        ]
      },
      {
        name: 'Hashtag',
        id: 'fas fa-hashtag',
        filter: [
          'interfaces',
          'hashtag'
        ]
      },
      {
        name: 'Home',
        id: 'fas fa-home',
        filter: [
          'interfaces',
          'home'
        ]
      },
      {
        name: 'Info',
        id: 'fas fa-info',
        filter: [
          'interfaces',
          'info'
        ]
      },
      {
        name: 'Info-circle',
        id: 'fas fa-info-circle',
        filter: [
          'interfaces',
          'info',
          'circle'
        ]
      },
      {
        name: 'Magic',
        id: 'fas fa-magic',
        filter: [
          'interfaces',
          'magic'
        ]
      },
      {
        name: 'Meh',
        id: 'fas fa-meh',
        filter: [
          'interfaces',
          'meh'
        ]
      },
      {
        name: 'Meh',
        id: 'far fa-meh',
        filter: [
          'interfaces',
          'meh'
        ]
      },
      {
        name: 'Minus',
        id: 'fas fa-minus',
        filter: [
          'interfaces',
          'minus'
        ]
      },
      {
        name: 'Minus-circle',
        id: 'fas fa-minus-circle',
        filter: [
          'interfaces',
          'minus',
          'circle'
        ]
      },
      {
        name: 'Minus-square',
        id: 'fas fa-minus-square',
        filter: [
          'interfaces',
          'minus',
          'square'
        ]
      },
      {
        name: 'Minus-square',
        id: 'far fa-minus-square',
        filter: [
          'interfaces',
          'minus',
          'square'
        ]
      },
      {
        name: 'Plus',
        id: 'fas fa-plus',
        filter: [
          'interfaces',
          'plus'
        ]
      },
      {
        name: 'Plus-circle',
        id: 'fas fa-plus-circle',
        filter: [
          'interfaces',
          'plus',
          'circle'
        ]
      },
      {
        name: 'Question',
        id: 'fas fa-question',
        filter: [
          'interfaces',
          'question'
        ]
      },
      {
        name: 'Anchor',
        id: 'fas fa-anchor',
        filter: [
          'maps',
          'anchor'
        ]
      },
      {
        name: 'Bed',
        id: 'fas fa-bed',
        filter: [
          'maps',
          'bed'
        ]
      },
      {
        name: 'Bicycle',
        id: 'fas fa-bicycle',
        filter: [
          'maps',
          'bicycle'
        ]
      },
      {
        name: 'Binoculars',
        id: 'fas fa-binoculars',
        filter: [
          'maps',
          'binoculars'
        ]
      },
      {
        name: 'Bomb',
        id: 'fas fa-bomb',
        filter: [
          'maps',
          'bomb'
        ]
      },
      {
        name: 'Bookmark',
        id: 'fas fa-bookmark',
        filter: [
          'maps',
          'bookmark'
        ]
      },
      {
        name: 'Bookmark',
        id: 'far fa-bookmark',
        filter: [
          'maps',
          'bookmark'
        ]
      },
      {
        name: 'Car',
        id: 'fas fa-car',
        filter: [
          'maps',
          'car'
        ]
      },
      {
        name: 'Fighter-jet',
        id: 'fas fa-fighter-jet',
        filter: [
          'maps',
          'fighter',
          'jet'
        ]
      },
      {
        name: 'Fire',
        id: 'fas fa-fire',
        filter: [
          'maps',
          'fire'
        ]
      },
      {
        name: 'Flask',
        id: 'fas fa-flask',
        filter: [
          'maps',
          'flask'
        ]
      },
      {
        name: 'Gamepad',
        id: 'fas fa-gamepad',
        filter: [
          'maps',
          'gamepad'
        ]
      },
      {
        name: 'Gavel',
        id: 'fas fa-gavel',
        filter: [
          'maps',
          'gavel'
        ]
      },
      {
        name: 'Gift',
        id: 'fas fa-gift',
        filter: [
          'maps',
          'gift'
        ]
      },
      {
        name: 'Glass-martini',
        id: 'fas fa-glass-martini',
        filter: [
          'maps',
          'glass',
          'martini'
        ]
      },
      {
        name: 'Graduation-cap',
        id: 'fas fa-graduation-cap',
        filter: [
          'maps',
          'graduation',
          'cap'
        ]
      },
      {
        name: 'Key',
        id: 'fas fa-key',
        filter: [
          'maps',
          'key'
        ]
      },
      {
        name: 'Leaf',
        id: 'fas fa-leaf',
        filter: [
          'maps',
          'leaf'
        ]
      },
      {
        name: 'Lemon',
        id: 'fas fa-lemon',
        filter: [
          'maps',
          'lemon'
        ]
      },
      {
        name: 'Lemon',
        id: 'far fa-lemon',
        filter: [
          'maps',
          'lemon'
        ]
      },
      {
        name: 'Life-ring',
        id: 'fas fa-life-ring',
        filter: [
          'maps',
          'life',
          'ring'
        ]
      },
      {
        name: 'Life-ring',
        id: 'far fa-life-ring',
        filter: [
          'maps',
          'life',
          'ring'
        ]
      },
      {
        name: 'Lightbulb',
        id: 'fas fa-lightbulb',
        filter: [
          'maps',
          'lightbulb'
        ]
      },
      {
        name: 'Lightbulb',
        id: 'far fa-lightbulb',
        filter: [
          'maps',
          'lightbulb'
        ]
      },
      {
        name: 'Magnet',
        id: 'fas fa-magnet',
        filter: [
          'maps',
          'magnet'
        ]
      },
      {
        name: 'Male',
        id: 'fas fa-male',
        filter: [
          'maps',
          'male'
        ]
      },
      {
        name: 'Map',
        id: 'fas fa-map',
        filter: [
          'maps',
          'map'
        ]
      },
      {
        name: 'Map',
        id: 'far fa-map',
        filter: [
          'maps',
          'map'
        ]
      },
      {
        name: 'Map-marker',
        id: 'fas fa-map-marker',
        filter: [
          'maps',
          'map',
          'marker'
        ]
      },
      {
        name: 'Map-marker-alt',
        id: 'fas fa-map-marker-alt',
        filter: [
          'maps',
          'map',
          'marker',
          'alt'
        ]
      },
      {
        name: 'Map-pin',
        id: 'fas fa-map-pin',
        filter: [
          'maps',
          'map',
          'pin'
        ]
      },
      {
        name: 'Map-signs',
        id: 'fas fa-map-signs',
        filter: [
          'maps',
          'map',
          'signs'
        ]
      },
      {
        name: 'Motorcycle',
        id: 'fas fa-motorcycle',
        filter: [
          'maps',
          'motorcycle'
        ]
      },
      {
        name: 'Newspaper',
        id: 'fas fa-newspaper',
        filter: [
          'maps',
          'newspaper'
        ]
      },
      {
        name: 'Newspaper',
        id: 'far fa-newspaper',
        filter: [
          'maps',
          'newspaper'
        ]
      },
      {
        name: 'Paw',
        id: 'fas fa-paw',
        filter: [
          'maps',
          'paw'
        ]
      },
      {
        name: 'Plane',
        id: 'fas fa-plane',
        filter: [
          'maps',
          'plane'
        ]
      },
      {
        name: 'Road',
        id: 'fas fa-road',
        filter: [
          'maps',
          'road'
        ]
      },
      {
        name: 'Rocket',
        id: 'fas fa-rocket',
        filter: [
          'maps',
          'rocket'
        ]
      },
      {
        name: 'Search',
        id: 'fas fa-search',
        filter: [
          'maps',
          'search'
        ]
      },
      {
        name: 'Search-minus',
        id: 'fas fa-search-minus',
        filter: [
          'maps',
          'search',
          'minus'
        ]
      },
      {
        name: 'Search-plus',
        id: 'fas fa-search-plus',
        filter: [
          'maps',
          'search',
          'plus'
        ]
      },
      {
        name: 'Ship',
        id: 'fas fa-ship',
        filter: [
          'maps',
          'ship'
        ]
      },
      {
        name: 'Shopping-bag',
        id: 'fas fa-shopping-bag',
        filter: [
          'maps',
          'shopping',
          'bag'
        ]
      },
      {
        name: 'Shopping-basket',
        id: 'fas fa-shopping-basket',
        filter: [
          'maps',
          'shopping',
          'basket'
        ]
      },
      {
        name: 'Shopping-cart',
        id: 'fas fa-shopping-cart',
        filter: [
          'maps',
          'shopping',
          'cart'
        ]
      },
      {
        name: 'Shower',
        id: 'fas fa-shower',
        filter: [
          'maps',
          'shower'
        ]
      },
      {
        name: 'Street-view',
        id: 'fas fa-street-view',
        filter: [
          'maps',
          'street',
          'view'
        ]
      },
      {
        name: 'Subway',
        id: 'fas fa-subway',
        filter: [
          'maps',
          'subway'
        ]
      },
      {
        name: 'Taxi',
        id: 'fas fa-taxi',
        filter: [
          'maps',
          'taxi'
        ]
      },
      {
        name: 'Bus',
        id: 'fas fa-bus',
        filter: [
          'objects',
          'bus'
        ]
      },
      {
        name: 'Cube',
        id: 'fas fa-cube',
        filter: [
          'objects',
          'cube'
        ]
      },
      {
        name: 'Cubes',
        id: 'fas fa-cubes',
        filter: [
          'objects',
          'cubes'
        ]
      },
      {
        name: 'Futbol',
        id: 'fas fa-futbol',
        filter: [
          'objects',
          'futbol'
        ]
      },
      {
        name: 'Futbol',
        id: 'far fa-futbol',
        filter: [
          'objects',
          'futbol'
        ]
      },
      {
        name: 'Gem',
        id: 'fas fa-gem',
        filter: [
          'objects',
          'gem'
        ]
      },
      {
        name: 'Gem',
        id: 'far fa-gem',
        filter: [
          'objects',
          'gem'
        ]
      },
      {
        name: 'Lock',
        id: 'fas fa-lock',
        filter: [
          'objects',
          'lock'
        ]
      },
      {
        name: 'Lock-open',
        id: 'fas fa-lock-open',
        filter: [
          'objects',
          'lock',
          'open'
        ]
      },
      {
        name: 'Amazon-pay',
        id: 'fab fa-amazon-pay',
        filter: [
          'payments & shopping',
          'amazon',
          'pay'
        ]
      },
      {
        name: 'Apple-pay',
        id: 'fab fa-apple-pay',
        filter: [
          'payments & shopping',
          'apple',
          'pay'
        ]
      },
      {
        name: 'Cart-plus',
        id: 'fas fa-cart-plus',
        filter: [
          'payments & shopping',
          'cart',
          'plus'
        ]
      },
      {
        name: 'Cc-amazon-pay',
        id: 'fab fa-cc-amazon-pay',
        filter: [
          'payments & shopping',
          'cc',
          'amazon',
          'pay'
        ]
      },
      {
        name: 'Cc-amex',
        id: 'fab fa-cc-amex',
        filter: [
          'payments & shopping',
          'cc',
          'amex'
        ]
      },
      {
        name: 'Cc-apple-pay',
        id: 'fab fa-cc-apple-pay',
        filter: [
          'payments & shopping',
          'cc',
          'apple',
          'pay'
        ]
      },
      {
        name: 'Cc-diners-club',
        id: 'fab fa-cc-diners-club',
        filter: [
          'payments & shopping',
          'cc',
          'diners',
          'club'
        ]
      },
      {
        name: 'Cc-discover',
        id: 'fab fa-cc-discover',
        filter: [
          'payments & shopping',
          'cc',
          'discover'
        ]
      },
      {
        name: 'Cc-jcb',
        id: 'fab fa-cc-jcb',
        filter: [
          'payments & shopping',
          'cc',
          'jcb'
        ]
      },
      {
        name: 'Cc-mastercard',
        id: 'fab fa-cc-mastercard',
        filter: [
          'payments & shopping',
          'cc',
          'mastercard'
        ]
      },
      {
        name: 'Cc-paypal',
        id: 'fab fa-cc-paypal',
        filter: [
          'payments & shopping',
          'cc',
          'paypal'
        ]
      },
      {
        name: 'Cc-stripe',
        id: 'fab fa-cc-stripe',
        filter: [
          'payments & shopping',
          'cc',
          'stripe'
        ]
      },
      {
        name: 'Cc-visa',
        id: 'fab fa-cc-visa',
        filter: [
          'payments & shopping',
          'cc',
          'visa'
        ]
      },
      {
        name: 'Credit-card',
        id: 'fas fa-credit-card',
        filter: [
          'payments & shopping',
          'credit',
          'card'
        ]
      },
      {
        name: 'Credit-card',
        id: 'far fa-credit-card',
        filter: [
          'payments & shopping',
          'credit',
          'card'
        ]
      },
      {
        name: 'Ethereum',
        id: 'fab fa-ethereum',
        filter: [
          'payments & shopping',
          'ethereum'
        ]
      },
      {
        name: 'Google-wallet',
        id: 'fab fa-google-wallet',
        filter: [
          'payments & shopping',
          'google',
          'wallet'
        ]
      },
      {
        name: 'Paypal',
        id: 'fab fa-paypal',
        filter: [
          'payments & shopping',
          'paypal'
        ]
      },
      {
        name: 'Star',
        id: 'fas fa-star',
        filter: [
          'payments & shopping',
          'star'
        ]
      },
      {
        name: 'Star',
        id: 'far fa-star',
        filter: [
          'payments & shopping',
          'star'
        ]
      },
      {
        name: 'Stripe',
        id: 'fab fa-stripe',
        filter: [
          'payments & shopping',
          'stripe'
        ]
      },
      {
        name: 'Stripe-s',
        id: 'fab fa-stripe-s',
        filter: [
          'payments & shopping',
          'stripe',
          's'
        ]
      },
      {
        name: 'Trophy',
        id: 'fas fa-trophy',
        filter: [
          'payments & shopping',
          'trophy'
        ]
      },
      {
        name: 'Square',
        id: 'fas fa-square',
        filter: [
          'shapes',
          'square'
        ]
      },
      {
        name: 'Square',
        id: 'far fa-square',
        filter: [
          'shapes',
          'square'
        ]
      },
      {
        name: 'Asterisk',
        id: 'fas fa-asterisk',
        filter: [
          'spinners',
          'asterisk'
        ]
      },
      {
        name: 'Circle-notch',
        id: 'fas fa-circle-notch',
        filter: [
          'spinners',
          'circle',
          'notch'
        ]
      },
      {
        name: 'Snowflake',
        id: 'fas fa-snowflake',
        filter: [
          'spinners',
          'snowflake'
        ]
      },
      {
        name: 'Snowflake',
        id: 'far fa-snowflake',
        filter: [
          'spinners',
          'snowflake'
        ]
      },
      {
        name: 'Spinner',
        id: 'fas fa-spinner',
        filter: [
          'spinners',
          'spinner'
        ]
      },
      {
        name: 'Sun',
        id: 'fas fa-sun',
        filter: [
          'spinners',
          'sun'
        ]
      },
      {
        name: 'Sun',
        id: 'far fa-sun',
        filter: [
          'spinners',
          'sun'
        ]
      },
      {
        name: 'Baseball-ball',
        id: 'fas fa-baseball-ball',
        filter: [
          'sports',
          'baseball',
          'ball'
        ]
      },
      {
        name: 'Basketball-ball',
        id: 'fas fa-basketball-ball',
        filter: [
          'sports',
          'basketball',
          'ball'
        ]
      },
      {
        name: 'Bowling-ball',
        id: 'fas fa-bowling-ball',
        filter: [
          'sports',
          'bowling',
          'ball'
        ]
      },
      {
        name: 'Football-ball',
        id: 'fas fa-football-ball',
        filter: [
          'sports',
          'football',
          'ball'
        ]
      },
      {
        name: 'Golf-ball',
        id: 'fas fa-golf-ball',
        filter: [
          'sports',
          'golf',
          'ball'
        ]
      },
      {
        name: 'Hockey-puck',
        id: 'fas fa-hockey-puck',
        filter: [
          'sports',
          'hockey',
          'puck'
        ]
      },
      {
        name: 'Quidditch',
        id: 'fas fa-quidditch',
        filter: [
          'sports',
          'quidditch'
        ]
      },
      {
        name: 'Table-tennis',
        id: 'fas fa-table-tennis',
        filter: [
          'sports',
          'table',
          'tennis'
        ]
      },
      {
        name: 'Volleyball-ball',
        id: 'fas fa-volleyball-ball',
        filter: [
          'sports',
          'volleyball',
          'ball'
        ]
      },
      {
        name: 'Battery-empty',
        id: 'fas fa-battery-empty',
        filter: [
          'status',
          'battery',
          'empty'
        ]
      },
      {
        name: 'Battery-full',
        id: 'fas fa-battery-full',
        filter: [
          'status',
          'battery',
          'full'
        ]
      },
      {
        name: 'Battery-half',
        id: 'fas fa-battery-half',
        filter: [
          'status',
          'battery',
          'half'
        ]
      },
      {
        name: 'Battery-quarter',
        id: 'fas fa-battery-quarter',
        filter: [
          'status',
          'battery',
          'quarter'
        ]
      },
      {
        name: 'Battery-three-quarters',
        id: 'fas fa-battery-three-quarters',
        filter: [
          'status',
          'battery',
          'three',
          'quarters'
        ]
      },
      {
        name: 'Thermometer-empty',
        id: 'fas fa-thermometer-empty',
        filter: [
          'status',
          'thermometer',
          'empty'
        ]
      },
      {
        name: 'Thermometer-full',
        id: 'fas fa-thermometer-full',
        filter: [
          'status',
          'thermometer',
          'full'
        ]
      },
      {
        name: 'Thermometer-half',
        id: 'fas fa-thermometer-half',
        filter: [
          'status',
          'thermometer',
          'half'
        ]
      },
      {
        name: 'Thermometer-quarter',
        id: 'fas fa-thermometer-quarter',
        filter: [
          'status',
          'thermometer',
          'quarter'
        ]
      },
      {
        name: 'Thermometer-three-quarters',
        id: 'fas fa-thermometer-three-quarters',
        filter: [
          'status',
          'thermometer',
          'three',
          'quarters'
        ]
      },
      {
        name: 'Toggle-off',
        id: 'fas fa-toggle-off',
        filter: [
          'status',
          'toggle',
          'off'
        ]
      },
      {
        name: 'Toggle-on',
        id: 'fas fa-toggle-on',
        filter: [
          'status',
          'toggle',
          'on'
        ]
      },
      {
        name: 'Unlock',
        id: 'fas fa-unlock',
        filter: [
          'status',
          'unlock'
        ]
      },
      {
        name: 'Unlock-alt',
        id: 'fas fa-unlock-alt',
        filter: [
          'status',
          'unlock',
          'alt'
        ]
      },
      {
        name: 'Child',
        id: 'fas fa-child',
        filter: [
          'users & people',
          'child'
        ]
      },
      {
        name: 'Female',
        id: 'fas fa-female',
        filter: [
          'users & people',
          'female'
        ]
      },
      {
        name: 'Smile',
        id: 'fas fa-smile',
        filter: [
          'users & people',
          'smile'
        ]
      },
      {
        name: 'Smile',
        id: 'far fa-smile',
        filter: [
          'users & people',
          'smile'
        ]
      },
      {
        name: 'User',
        id: 'fas fa-user',
        filter: [
          'users & people',
          'user'
        ]
      },
      {
        name: 'User',
        id: 'far fa-user',
        filter: [
          'users & people',
          'user'
        ]
      },
      {
        name: 'User-circle',
        id: 'fas fa-user-circle',
        filter: [
          'users & people',
          'user',
          'circle'
        ]
      },
      {
        name: 'User-circle',
        id: 'far fa-user-circle',
        filter: [
          'users & people',
          'user',
          'circle'
        ]
      },
      {
        name: 'User-plus',
        id: 'fas fa-user-plus',
        filter: [
          'users & people',
          'user',
          'plus'
        ]
      },
      {
        name: 'User-times',
        id: 'fas fa-user-times',
        filter: [
          'users & people',
          'user',
          'times'
        ]
      },
      {
        name: 'Users',
        id: 'fas fa-users',
        filter: [
          'users & people',
          'users'
        ]
      },
      {
        name: 'Space-shuttle',
        id: 'fas fa-space-shuttle',
        filter: [
          'vehicles',
          'space',
          'shuttle'
        ]
      },
      {
        name: 'Train',
        id: 'fas fa-train',
        filter: [
          'vehicles',
          'train'
        ]
      },
      {
        name: 'Truck',
        id: 'fas fa-truck',
        filter: [
          'vehicles',
          'truck'
        ]
      },
      {
        id: 'fab fa-500px',
        name: '500px',
        filter: [
          '500px'
        ]
      },
      {
        id: 'fab fa-accusoft',
        name: 'Accusoft',
        filter: [
          'accusoft'
        ]
      },
      {
        id: 'fab fa-adn',
        name: 'Adn',
        filter: [
          'adn'
        ]
      },
      {
        id: 'fab fa-adversal',
        name: 'Adversal',
        filter: [
          'adversal'
        ]
      },
      {
        id: 'fab fa-affiliatetheme',
        name: 'Affiliatetheme',
        filter: [
          'affiliatetheme'
        ]
      },
      {
        id: 'fab fa-algolia',
        name: 'Algolia',
        filter: [
          'algolia'
        ]
      },
      {
        id: 'fab fa-amazon',
        name: 'Amazon',
        filter: [
          'amazon'
        ]
      },
      {
        id: 'fab fa-amilia',
        name: 'Amilia',
        filter: [
          'amilia'
        ]
      },
      {
        id: 'fab fa-android',
        name: 'Android',
        filter: [
          'android'
        ]
      },
      {
        id: 'fab fa-angellist',
        name: 'Angellist',
        filter: [
          'angellist'
        ]
      },
      {
        id: 'fab fa-angrycreative',
        name: 'Angrycreative',
        filter: [
          'angrycreative'
        ]
      },
      {
        id: 'fab fa-angular',
        name: 'Angular',
        filter: [
          'angular'
        ]
      },
      {
        id: 'fab fa-app-store',
        name: 'App-store',
        filter: [
          'app',
          'store'
        ]
      },
      {
        id: 'fab fa-app-store-ios',
        name: 'App-store-ios',
        filter: [
          'app',
          'store',
          'ios'
        ]
      },
      {
        id: 'fab fa-apper',
        name: 'Apper',
        filter: [
          'apper'
        ]
      },
      {
        id: 'fab fa-apple',
        name: 'Apple',
        filter: [
          'apple'
        ]
      },
      {
        id: 'fab fa-asymmetrik',
        name: 'Asymmetrik',
        filter: [
          'asymmetrik'
        ]
      },
      {
        id: 'fab fa-audible',
        name: 'Audible',
        filter: [
          'audible'
        ]
      },
      {
        id: 'fab fa-autoprefixer',
        name: 'Autoprefixer',
        filter: [
          'autoprefixer'
        ]
      },
      {
        id: 'fab fa-avianex',
        name: 'Avianex',
        filter: [
          'avianex'
        ]
      },
      {
        id: 'fab fa-aviato',
        name: 'Aviato',
        filter: [
          'aviato'
        ]
      },
      {
        id: 'fab fa-aws',
        name: 'Aws',
        filter: [
          'aws'
        ]
      },
      {
        id: 'fab fa-bandcamp',
        name: 'Bandcamp',
        filter: [
          'bandcamp'
        ]
      },
      {
        id: 'fab fa-behance',
        name: 'Behance',
        filter: [
          'behance'
        ]
      },
      {
        id: 'fab fa-behance-square',
        name: 'Behance-square',
        filter: [
          'behance',
          'square'
        ]
      },
      {
        id: 'fab fa-bimobject',
        name: 'Bimobject',
        filter: [
          'bimobject'
        ]
      },
      {
        id: 'fab fa-bitbucket',
        name: 'Bitbucket',
        filter: [
          'bitbucket'
        ]
      },
      {
        id: 'fab fa-bity',
        name: 'Bity',
        filter: [
          'bity'
        ]
      },
      {
        id: 'fab fa-black-tie',
        name: 'Black-tie',
        filter: [
          'black',
          'tie'
        ]
      },
      {
        id: 'fab fa-blackberry',
        name: 'Blackberry',
        filter: [
          'blackberry'
        ]
      },
      {
        id: 'fab fa-blogger',
        name: 'Blogger',
        filter: [
          'blogger'
        ]
      },
      {
        id: 'fab fa-blogger-b',
        name: 'Blogger-b',
        filter: [
          'blogger',
          'b'
        ]
      },
      {
        id: 'fab fa-buromobelexperte',
        name: 'Buromobelexperte',
        filter: [
          'buromobelexperte'
        ]
      },
      {
        id: 'fab fa-buysellads',
        name: 'Buysellads',
        filter: [
          'buysellads'
        ]
      },
      {
        id: 'fab fa-centercode',
        name: 'Centercode',
        filter: [
          'centercode'
        ]
      },
      {
        id: 'fab fa-chrome',
        name: 'Chrome',
        filter: [
          'chrome'
        ]
      },
      {
        id: 'fab fa-cloudscale',
        name: 'Cloudscale',
        filter: [
          'cloudscale'
        ]
      },
      {
        id: 'fab fa-cloudsmith',
        name: 'Cloudsmith',
        filter: [
          'cloudsmith'
        ]
      },
      {
        id: 'fab fa-cloudversify',
        name: 'Cloudversify',
        filter: [
          'cloudversify'
        ]
      },
      {
        id: 'fab fa-codepen',
        name: 'Codepen',
        filter: [
          'codepen'
        ]
      },
      {
        id: 'fab fa-codiepie',
        name: 'Codiepie',
        filter: [
          'codiepie'
        ]
      },
      {
        id: 'fab fa-connectdevelop',
        name: 'Connectdevelop',
        filter: [
          'connectdevelop'
        ]
      },
      {
        id: 'fab fa-contao',
        name: 'Contao',
        filter: [
          'contao'
        ]
      },
      {
        id: 'fab fa-cpanel',
        name: 'Cpanel',
        filter: [
          'cpanel'
        ]
      },
      {
        id: 'fab fa-creative-commons',
        name: 'Creative-commons',
        filter: [
          'creative',
          'commons'
        ]
      },
      {
        id: 'fab fa-css3',
        name: 'Css3',
        filter: [
          'css3'
        ]
      },
      {
        id: 'fab fa-css3-alt',
        name: 'Css3-alt',
        filter: [
          'css3',
          'alt'
        ]
      },
      {
        id: 'fab fa-cuttlefish',
        name: 'Cuttlefish',
        filter: [
          'cuttlefish'
        ]
      },
      {
        id: 'fab fa-d-and-d',
        name: 'D-and-d',
        filter: [
          'd',
          'and',
          'd'
        ]
      },
      {
        id: 'fab fa-dashcube',
        name: 'Dashcube',
        filter: [
          'dashcube'
        ]
      },
      {
        id: 'fab fa-delicious',
        name: 'Delicious',
        filter: [
          'delicious'
        ]
      },
      {
        id: 'fab fa-deploydog',
        name: 'Deploydog',
        filter: [
          'deploydog'
        ]
      },
      {
        id: 'fab fa-deskpro',
        name: 'Deskpro',
        filter: [
          'deskpro'
        ]
      },
      {
        id: 'fab fa-deviantart',
        name: 'Deviantart',
        filter: [
          'deviantart'
        ]
      },
      {
        id: 'fab fa-digg',
        name: 'Digg',
        filter: [
          'digg'
        ]
      },
      {
        id: 'fab fa-digital-ocean',
        name: 'Digital-ocean',
        filter: [
          'digital',
          'ocean'
        ]
      },
      {
        id: 'fab fa-discord',
        name: 'Discord',
        filter: [
          'discord'
        ]
      },
      {
        id: 'fab fa-discourse',
        name: 'Discourse',
        filter: [
          'discourse'
        ]
      },
      {
        id: 'fab fa-dochub',
        name: 'Dochub',
        filter: [
          'dochub'
        ]
      },
      {
        id: 'fab fa-docker',
        name: 'Docker',
        filter: [
          'docker'
        ]
      },
      {
        id: 'fab fa-draft2digital',
        name: 'Draft2digital',
        filter: [
          'draft2digital'
        ]
      },
      {
        id: 'fab fa-dribbble',
        name: 'Dribbble',
        filter: [
          'dribbble'
        ]
      },
      {
        id: 'fab fa-dribbble-square',
        name: 'Dribbble-square',
        filter: [
          'dribbble',
          'square'
        ]
      },
      {
        id: 'fab fa-dropbox',
        name: 'Dropbox',
        filter: [
          'dropbox'
        ]
      },
      {
        id: 'fab fa-drupal',
        name: 'Drupal',
        filter: [
          'drupal'
        ]
      },
      {
        id: 'fab fa-dyalog',
        name: 'Dyalog',
        filter: [
          'dyalog'
        ]
      },
      {
        id: 'fab fa-earlybirds',
        name: 'Earlybirds',
        filter: [
          'earlybirds'
        ]
      },
      {
        id: 'fab fa-edge',
        name: 'Edge',
        filter: [
          'edge'
        ]
      },
      {
        id: 'fab fa-ember',
        name: 'Ember',
        filter: [
          'ember'
        ]
      },
      {
        id: 'fab fa-empire',
        name: 'Empire',
        filter: [
          'empire'
        ]
      },
      {
        id: 'fab fa-envira',
        name: 'Envira',
        filter: [
          'envira'
        ]
      },
      {
        id: 'fab fa-erlang',
        name: 'Erlang',
        filter: [
          'erlang'
        ]
      },
      {
        id: 'fab fa-etsy',
        name: 'Etsy',
        filter: [
          'etsy'
        ]
      },
      {
        id: 'fab fa-expeditedssl',
        name: 'Expeditedssl',
        filter: [
          'expeditedssl'
        ]
      },
      {
        id: 'fab fa-facebook',
        name: 'Facebook',
        filter: [
          'facebook'
        ]
      },
      {
        id: 'fab fa-facebook-f',
        name: 'Facebook-f',
        filter: [
          'facebook',
          'f'
        ]
      },
      {
        id: 'fab fa-facebook-messenger',
        name: 'Facebook-messenger',
        filter: [
          'facebook',
          'messenger'
        ]
      },
      {
        id: 'fab fa-facebook-square',
        name: 'Facebook-square',
        filter: [
          'facebook',
          'square'
        ]
      },
      {
        id: 'fab fa-firefox',
        name: 'Firefox',
        filter: [
          'firefox'
        ]
      },
      {
        id: 'fab fa-first-order',
        name: 'First-order',
        filter: [
          'first',
          'order'
        ]
      },
      {
        id: 'fab fa-firstdraft',
        name: 'Firstdraft',
        filter: [
          'firstdraft'
        ]
      },
      {
        id: 'fab fa-flickr',
        name: 'Flickr',
        filter: [
          'flickr'
        ]
      },
      {
        id: 'fab fa-fly',
        name: 'Fly',
        filter: [
          'fly'
        ]
      },
      {
        id: 'fab fa-font-awesome',
        name: 'Font-awesome',
        filter: [
          'font',
          'awesome'
        ]
      },
      {
        id: 'fab fa-font-awesome-alt',
        name: 'Font-awesome-alt',
        filter: [
          'font',
          'awesome',
          'alt'
        ]
      },
      {
        id: 'fab fa-font-awesome-flag',
        name: 'Font-awesome-flag',
        filter: [
          'font',
          'awesome',
          'flag'
        ]
      },
      {
        id: 'fab fa-fonticons',
        name: 'Fonticons',
        filter: [
          'fonticons'
        ]
      },
      {
        id: 'fab fa-fonticons-fi',
        name: 'Fonticons-fi',
        filter: [
          'fonticons',
          'fi'
        ]
      },
      {
        id: 'fab fa-fort-awesome',
        name: 'Fort-awesome',
        filter: [
          'fort',
          'awesome'
        ]
      },
      {
        id: 'fab fa-fort-awesome-alt',
        name: 'Fort-awesome-alt',
        filter: [
          'fort',
          'awesome',
          'alt'
        ]
      },
      {
        id: 'fab fa-forumbee',
        name: 'Forumbee',
        filter: [
          'forumbee'
        ]
      },
      {
        id: 'fab fa-foursquare',
        name: 'Foursquare',
        filter: [
          'foursquare'
        ]
      },
      {
        id: 'fab fa-free-code-camp',
        name: 'Free-code-camp',
        filter: [
          'free',
          'code',
          'camp'
        ]
      },
      {
        id: 'fab fa-freebsd',
        name: 'Freebsd',
        filter: [
          'freebsd'
        ]
      },
      {
        id: 'fab fa-get-pocket',
        name: 'Get-pocket',
        filter: [
          'get',
          'pocket'
        ]
      },
      {
        id: 'fab fa-git',
        name: 'Git',
        filter: [
          'git'
        ]
      },
      {
        id: 'fab fa-git-square',
        name: 'Git-square',
        filter: [
          'git',
          'square'
        ]
      },
      {
        id: 'fab fa-github',
        name: 'Github',
        filter: [
          'github'
        ]
      },
      {
        id: 'fab fa-github-alt',
        name: 'Github-alt',
        filter: [
          'github',
          'alt'
        ]
      },
      {
        id: 'fab fa-github-square',
        name: 'Github-square',
        filter: [
          'github',
          'square'
        ]
      },
      {
        id: 'fab fa-gitkraken',
        name: 'Gitkraken',
        filter: [
          'gitkraken'
        ]
      },
      {
        id: 'fab fa-gitlab',
        name: 'Gitlab',
        filter: [
          'gitlab'
        ]
      },
      {
        id: 'fab fa-gitter',
        name: 'Gitter',
        filter: [
          'gitter'
        ]
      },
      {
        id: 'fab fa-glide',
        name: 'Glide',
        filter: [
          'glide'
        ]
      },
      {
        id: 'fab fa-glide-g',
        name: 'Glide-g',
        filter: [
          'glide',
          'g'
        ]
      },
      {
        id: 'fab fa-gofore',
        name: 'Gofore',
        filter: [
          'gofore'
        ]
      },
      {
        id: 'fab fa-goodreads',
        name: 'Goodreads',
        filter: [
          'goodreads'
        ]
      },
      {
        id: 'fab fa-goodreads-g',
        name: 'Goodreads-g',
        filter: [
          'goodreads',
          'g'
        ]
      },
      {
        id: 'fab fa-google',
        name: 'Google',
        filter: [
          'google'
        ]
      },
      {
        id: 'fab fa-google-drive',
        name: 'Google-drive',
        filter: [
          'google',
          'drive'
        ]
      },
      {
        id: 'fab fa-google-play',
        name: 'Google-play',
        filter: [
          'google',
          'play'
        ]
      },
      {
        id: 'fab fa-google-plus',
        name: 'Google-plus',
        filter: [
          'google',
          'plus'
        ]
      },
      {
        id: 'fab fa-google-plus-g',
        name: 'Google-plus-g',
        filter: [
          'google',
          'plus',
          'g'
        ]
      },
      {
        id: 'fab fa-google-plus-square',
        name: 'Google-plus-square',
        filter: [
          'google',
          'plus',
          'square'
        ]
      },
      {
        id: 'fab fa-gratipay',
        name: 'Gratipay',
        filter: [
          'gratipay'
        ]
      },
      {
        id: 'fab fa-grav',
        name: 'Grav',
        filter: [
          'grav'
        ]
      },
      {
        id: 'fab fa-gripfire',
        name: 'Gripfire',
        filter: [
          'gripfire'
        ]
      },
      {
        id: 'fab fa-grunt',
        name: 'Grunt',
        filter: [
          'grunt'
        ]
      },
      {
        id: 'fab fa-gulp',
        name: 'Gulp',
        filter: [
          'gulp'
        ]
      },
      {
        id: 'fab fa-hacker-news',
        name: 'Hacker-news',
        filter: [
          'hacker',
          'news'
        ]
      },
      {
        id: 'fab fa-hacker-news-square',
        name: 'Hacker-news-square',
        filter: [
          'hacker',
          'news',
          'square'
        ]
      },
      {
        id: 'fab fa-hire-a-helper',
        name: 'Hire-a-helper',
        filter: [
          'hire',
          'a',
          'helper'
        ]
      },
      {
        id: 'fab fa-hooli',
        name: 'Hooli',
        filter: [
          'hooli'
        ]
      },
      {
        id: 'fab fa-hotjar',
        name: 'Hotjar',
        filter: [
          'hotjar'
        ]
      },
      {
        id: 'fab fa-houzz',
        name: 'Houzz',
        filter: [
          'houzz'
        ]
      },
      {
        id: 'fab fa-html5',
        name: 'Html5',
        filter: [
          'html5'
        ]
      },
      {
        id: 'fab fa-hubspot',
        name: 'Hubspot',
        filter: [
          'hubspot'
        ]
      },
      {
        id: 'fab fa-imdb',
        name: 'Imdb',
        filter: [
          'imdb'
        ]
      },
      {
        id: 'fab fa-instagram',
        name: 'Instagram',
        filter: [
          'instagram'
        ]
      },
      {
        id: 'fab fa-internet-explorer',
        name: 'Internet-explorer',
        filter: [
          'internet',
          'explorer'
        ]
      },
      {
        id: 'fab fa-ioxhost',
        name: 'Ioxhost',
        filter: [
          'ioxhost'
        ]
      },
      {
        id: 'fab fa-itunes',
        name: 'Itunes',
        filter: [
          'itunes'
        ]
      },
      {
        id: 'fab fa-itunes-note',
        name: 'Itunes-note',
        filter: [
          'itunes',
          'note'
        ]
      },
      {
        id: 'fab fa-jenkins',
        name: 'Jenkins',
        filter: [
          'jenkins'
        ]
      },
      {
        id: 'fab fa-joget',
        name: 'Joget',
        filter: [
          'joget'
        ]
      },
      {
        id: 'fab fa-joomla',
        name: 'Joomla',
        filter: [
          'joomla'
        ]
      },
      {
        id: 'fab fa-js',
        name: 'Js',
        filter: [
          'js'
        ]
      },
      {
        id: 'fab fa-js-square',
        name: 'Js-square',
        filter: [
          'js',
          'square'
        ]
      },
      {
        id: 'fab fa-jsfiddle',
        name: 'Jsfiddle',
        filter: [
          'jsfiddle'
        ]
      },
      {
        id: 'fab fa-keycdn',
        name: 'Keycdn',
        filter: [
          'keycdn'
        ]
      },
      {
        id: 'fab fa-kickstarter',
        name: 'Kickstarter',
        filter: [
          'kickstarter'
        ]
      },
      {
        id: 'fab fa-kickstarter-k',
        name: 'Kickstarter-k',
        filter: [
          'kickstarter',
          'k'
        ]
      },
      {
        id: 'fab fa-laravel',
        name: 'Laravel',
        filter: [
          'laravel'
        ]
      },
      {
        id: 'fab fa-lastfm',
        name: 'Lastfm',
        filter: [
          'lastfm'
        ]
      },
      {
        id: 'fab fa-lastfm-square',
        name: 'Lastfm-square',
        filter: [
          'lastfm',
          'square'
        ]
      },
      {
        id: 'fab fa-leanpub',
        name: 'Leanpub',
        filter: [
          'leanpub'
        ]
      },
      {
        id: 'fab fa-less',
        name: 'Less',
        filter: [
          'less'
        ]
      },
      {
        id: 'fab fa-line',
        name: 'Line',
        filter: [
          'line'
        ]
      },
      {
        id: 'fab fa-linkedin',
        name: 'Linkedin',
        filter: [
          'linkedin'
        ]
      },
      {
        id: 'fab fa-linkedin-in',
        name: 'Linkedin-in',
        filter: [
          'linkedin',
          'in'
        ]
      },
      {
        id: 'fab fa-linode',
        name: 'Linode',
        filter: [
          'linode'
        ]
      },
      {
        id: 'fab fa-linux',
        name: 'Linux',
        filter: [
          'linux'
        ]
      },
      {
        id: 'fab fa-lyft',
        name: 'Lyft',
        filter: [
          'lyft'
        ]
      },
      {
        id: 'fab fa-magento',
        name: 'Magento',
        filter: [
          'magento'
        ]
      },
      {
        id: 'fab fa-maxcdn',
        name: 'Maxcdn',
        filter: [
          'maxcdn'
        ]
      },
      {
        id: 'fab fa-medapps',
        name: 'Medapps',
        filter: [
          'medapps'
        ]
      },
      {
        id: 'fab fa-medium',
        name: 'Medium',
        filter: [
          'medium'
        ]
      },
      {
        id: 'fab fa-medium-m',
        name: 'Medium-m',
        filter: [
          'medium',
          'm'
        ]
      },
      {
        id: 'fab fa-medrt',
        name: 'Medrt',
        filter: [
          'medrt'
        ]
      },
      {
        id: 'fab fa-meetup',
        name: 'Meetup',
        filter: [
          'meetup'
        ]
      },
      {
        id: 'fab fa-microsoft',
        name: 'Microsoft',
        filter: [
          'microsoft'
        ]
      },
      {
        id: 'fab fa-mix',
        name: 'Mix',
        filter: [
          'mix'
        ]
      },
      {
        id: 'fab fa-mixcloud',
        name: 'Mixcloud',
        filter: [
          'mixcloud'
        ]
      },
      {
        id: 'fab fa-mizuni',
        name: 'Mizuni',
        filter: [
          'mizuni'
        ]
      },
      {
        id: 'fab fa-modx',
        name: 'Modx',
        filter: [
          'modx'
        ]
      },
      {
        id: 'fab fa-monero',
        name: 'Monero',
        filter: [
          'monero'
        ]
      },
      {
        id: 'fas fa-moon',
        name: 'Moon',
        filter: [
          'moon'
        ]
      },
      {
        id: 'far fa-moon',
        name: 'Moon',
        filter: [
          'moon'
        ]
      },
      {
        id: 'fab fa-napster',
        name: 'Napster',
        filter: [
          'napster'
        ]
      },
      {
        id: 'fab fa-nintendo-switch',
        name: 'Nintendo-switch',
        filter: [
          'nintendo',
          'switch'
        ]
      },
      {
        id: 'fab fa-node',
        name: 'Node',
        filter: [
          'node'
        ]
      },
      {
        id: 'fab fa-node-js',
        name: 'Node-js',
        filter: [
          'node',
          'js'
        ]
      },
      {
        id: 'fab fa-npm',
        name: 'Npm',
        filter: [
          'npm'
        ]
      },
      {
        id: 'fab fa-ns8',
        name: 'Ns8',
        filter: [
          'ns8'
        ]
      },
      {
        id: 'fab fa-nutritionix',
        name: 'Nutritionix',
        filter: [
          'nutritionix'
        ]
      },
      {
        id: 'fab fa-odnoklassniki',
        name: 'Odnoklassniki',
        filter: [
          'odnoklassniki'
        ]
      },
      {
        id: 'fab fa-odnoklassniki-square',
        name: 'Odnoklassniki-square',
        filter: [
          'odnoklassniki',
          'square'
        ]
      },
      {
        id: 'fab fa-opencart',
        name: 'Opencart',
        filter: [
          'opencart'
        ]
      },
      {
        id: 'fab fa-openid',
        name: 'Openid',
        filter: [
          'openid'
        ]
      },
      {
        id: 'fab fa-opera',
        name: 'Opera',
        filter: [
          'opera'
        ]
      },
      {
        id: 'fab fa-optin-monster',
        name: 'Optin-monster',
        filter: [
          'optin',
          'monster'
        ]
      },
      {
        id: 'fab fa-osi',
        name: 'Osi',
        filter: [
          'osi'
        ]
      },
      {
        id: 'fab fa-page4',
        name: 'Page4',
        filter: [
          'page4'
        ]
      },
      {
        id: 'fab fa-pagelines',
        name: 'Pagelines',
        filter: [
          'pagelines'
        ]
      },
      {
        id: 'fab fa-palfed',
        name: 'Palfed',
        filter: [
          'palfed'
        ]
      },
      {
        id: 'fab fa-patreon',
        name: 'Patreon',
        filter: [
          'patreon'
        ]
      },
      {
        id: 'fab fa-periscope',
        name: 'Periscope',
        filter: [
          'periscope'
        ]
      },
      {
        id: 'fab fa-phabricator',
        name: 'Phabricator',
        filter: [
          'phabricator'
        ]
      },
      {
        id: 'fab fa-phoenix-framework',
        name: 'Phoenix-framework',
        filter: [
          'phoenix',
          'framework'
        ]
      },
      {
        id: 'fab fa-pied-piper',
        name: 'Pied-piper',
        filter: [
          'pied',
          'piper'
        ]
      },
      {
        id: 'fab fa-pied-piper-alt',
        name: 'Pied-piper-alt',
        filter: [
          'pied',
          'piper',
          'alt'
        ]
      },
      {
        id: 'fab fa-pied-piper-pp',
        name: 'Pied-piper-pp',
        filter: [
          'pied',
          'piper',
          'pp'
        ]
      },
      {
        id: 'fab fa-pinterest',
        name: 'Pinterest',
        filter: [
          'pinterest'
        ]
      },
      {
        id: 'fab fa-pinterest-p',
        name: 'Pinterest-p',
        filter: [
          'pinterest',
          'p'
        ]
      },
      {
        id: 'fab fa-pinterest-square',
        name: 'Pinterest-square',
        filter: [
          'pinterest',
          'square'
        ]
      },
      {
        id: 'fab fa-playstation',
        name: 'Playstation',
        filter: [
          'playstation'
        ]
      },
      {
        id: 'fab fa-product-hunt',
        name: 'Product-hunt',
        filter: [
          'product',
          'hunt'
        ]
      },
      {
        id: 'fab fa-pushed',
        name: 'Pushed',
        filter: [
          'pushed'
        ]
      },
      {
        id: 'fas fa-puzzle-piece',
        name: 'Puzzle-piece',
        filter: [
          'puzzle',
          'piece'
        ]
      },
      {
        id: 'fab fa-python',
        name: 'Python',
        filter: [
          'python'
        ]
      },
      {
        id: 'fab fa-qq',
        name: 'Qq',
        filter: [
          'qq'
        ]
      },
      {
        id: 'fab fa-quora',
        name: 'Quora',
        filter: [
          'quora'
        ]
      },
      {
        id: 'fab fa-ravelry',
        name: 'Ravelry',
        filter: [
          'ravelry'
        ]
      },
      {
        id: 'fab fa-react',
        name: 'React',
        filter: [
          'react'
        ]
      },
      {
        id: 'fab fa-rebel',
        name: 'Rebel',
        filter: [
          'rebel'
        ]
      },
      {
        id: 'fab fa-red-river',
        name: 'Red-river',
        filter: [
          'red',
          'river'
        ]
      },
      {
        id: 'fab fa-reddit',
        name: 'Reddit',
        filter: [
          'reddit'
        ]
      },
      {
        id: 'fab fa-reddit-alien',
        name: 'Reddit-alien',
        filter: [
          'reddit',
          'alien'
        ]
      },
      {
        id: 'fab fa-reddit-square',
        name: 'Reddit-square',
        filter: [
          'reddit',
          'square'
        ]
      },
      {
        id: 'fab fa-rendact',
        name: 'Rendact',
        filter: [
          'rendact'
        ]
      },
      {
        id: 'fab fa-renren',
        name: 'Renren',
        filter: [
          'renren'
        ]
      },
      {
        id: 'fab fa-replyd',
        name: 'Replyd',
        filter: [
          'replyd'
        ]
      },
      {
        id: 'fab fa-resolving',
        name: 'Resolving',
        filter: [
          'resolving'
        ]
      },
      {
        id: 'fab fa-rocketchat',
        name: 'Rocketchat',
        filter: [
          'rocketchat'
        ]
      },
      {
        id: 'fab fa-rockrms',
        name: 'Rockrms',
        filter: [
          'rockrms'
        ]
      },
      {
        id: 'fab fa-safari',
        name: 'Safari',
        filter: [
          'safari'
        ]
      },
      {
        id: 'fab fa-sass',
        name: 'Sass',
        filter: [
          'sass'
        ]
      },
      {
        id: 'fab fa-schlix',
        name: 'Schlix',
        filter: [
          'schlix'
        ]
      },
      {
        id: 'fab fa-scribd',
        name: 'Scribd',
        filter: [
          'scribd'
        ]
      },
      {
        id: 'fab fa-searchengin',
        name: 'Searchengin',
        filter: [
          'searchengin'
        ]
      },
      {
        id: 'fab fa-sellcast',
        name: 'Sellcast',
        filter: [
          'sellcast'
        ]
      },
      {
        id: 'fab fa-sellsy',
        name: 'Sellsy',
        filter: [
          'sellsy'
        ]
      },
      {
        id: 'fab fa-servicestack',
        name: 'Servicestack',
        filter: [
          'servicestack'
        ]
      },
      {
        id: 'fas fa-share-alt',
        name: 'Share-alt',
        filter: [
          'share',
          'alt'
        ]
      },
      {
        id: 'fas fa-share-alt-square',
        name: 'Share-alt-square',
        filter: [
          'share',
          'alt',
          'square'
        ]
      },
      {
        id: 'fab fa-shirtsinbulk',
        name: 'Shirtsinbulk',
        filter: [
          'shirtsinbulk'
        ]
      },
      {
        id: 'fas fa-signal',
        name: 'Signal',
        filter: [
          'signal'
        ]
      },
      {
        id: 'fab fa-simplybuilt',
        name: 'Simplybuilt',
        filter: [
          'simplybuilt'
        ]
      },
      {
        id: 'fab fa-sistrix',
        name: 'Sistrix',
        filter: [
          'sistrix'
        ]
      },
      {
        id: 'fab fa-skyatlas',
        name: 'Skyatlas',
        filter: [
          'skyatlas'
        ]
      },
      {
        id: 'fab fa-skype',
        name: 'Skype',
        filter: [
          'skype'
        ]
      },
      {
        id: 'fab fa-slack',
        name: 'Slack',
        filter: [
          'slack'
        ]
      },
      {
        id: 'fab fa-slack-hash',
        name: 'Slack-hash',
        filter: [
          'slack',
          'hash'
        ]
      },
      {
        id: 'fab fa-slideshare',
        name: 'Slideshare',
        filter: [
          'slideshare'
        ]
      },
      {
        id: 'fab fa-snapchat',
        name: 'Snapchat',
        filter: [
          'snapchat'
        ]
      },
      {
        id: 'fab fa-snapchat-ghost',
        name: 'Snapchat-ghost',
        filter: [
          'snapchat',
          'ghost'
        ]
      },
      {
        id: 'fab fa-snapchat-square',
        name: 'Snapchat-square',
        filter: [
          'snapchat',
          'square'
        ]
      },
      {
        id: 'fab fa-soundcloud',
        name: 'Soundcloud',
        filter: [
          'soundcloud'
        ]
      },
      {
        id: 'fab fa-speakap',
        name: 'Speakap',
        filter: [
          'speakap'
        ]
      },
      {
        id: 'fab fa-spotify',
        name: 'Spotify',
        filter: [
          'spotify'
        ]
      },
      {
        id: 'fab fa-stack-exchange',
        name: 'Stack-exchange',
        filter: [
          'stack',
          'exchange'
        ]
      },
      {
        id: 'fab fa-stack-overflow',
        name: 'Stack-overflow',
        filter: [
          'stack',
          'overflow'
        ]
      },
      {
        id: 'fas fa-star-half',
        name: 'Star-half',
        filter: [
          'star',
          'half'
        ]
      },
      {
        id: 'far fa-star-half',
        name: 'Star-half',
        filter: [
          'star',
          'half'
        ]
      },
      {
        id: 'fab fa-staylinked',
        name: 'Staylinked',
        filter: [
          'staylinked'
        ]
      },
      {
        id: 'fab fa-steam',
        name: 'Steam',
        filter: [
          'steam'
        ]
      },
      {
        id: 'fab fa-steam-square',
        name: 'Steam-square',
        filter: [
          'steam',
          'square'
        ]
      },
      {
        id: 'fab fa-steam-symbol',
        name: 'Steam-symbol',
        filter: [
          'steam',
          'symbol'
        ]
      },
      {
        id: 'fab fa-sticker-mule',
        name: 'Sticker-mule',
        filter: [
          'sticker',
          'mule'
        ]
      },
      {
        id: 'fab fa-strava',
        name: 'Strava',
        filter: [
          'strava'
        ]
      },
      {
        id: 'fab fa-studiovinari',
        name: 'Studiovinari',
        filter: [
          'studiovinari'
        ]
      },
      {
        id: 'fab fa-stumbleupon',
        name: 'Stumbleupon',
        filter: [
          'stumbleupon'
        ]
      },
      {
        id: 'fab fa-stumbleupon-circle',
        name: 'Stumbleupon-circle',
        filter: [
          'stumbleupon',
          'circle'
        ]
      },
      {
        id: 'fab fa-superpowers',
        name: 'Superpowers',
        filter: [
          'superpowers'
        ]
      },
      {
        id: 'fab fa-supple',
        name: 'Supple',
        filter: [
          'supple'
        ]
      },
      {
        id: 'fas fa-tachometer-alt',
        name: 'Tachometer-alt',
        filter: [
          'tachometer',
          'alt'
        ]
      },
      {
        id: 'fab fa-telegram',
        name: 'Telegram',
        filter: [
          'telegram'
        ]
      },
      {
        id: 'fab fa-telegram-plane',
        name: 'Telegram-plane',
        filter: [
          'telegram',
          'plane'
        ]
      },
      {
        id: 'fab fa-tencent-weibo',
        name: 'Tencent-weibo',
        filter: [
          'tencent',
          'weibo'
        ]
      },
      {
        id: 'fab fa-themeisle',
        name: 'Themeisle',
        filter: [
          'themeisle'
        ]
      },
      {
        id: 'fas fa-ticket-alt',
        name: 'Ticket-alt',
        filter: [
          'ticket',
          'alt'
        ]
      },
      {
        id: 'fas fa-times',
        name: 'Times',
        filter: [
          'times'
        ]
      },
      {
        id: 'fas fa-times-circle',
        name: 'Times-circle',
        filter: [
          'times',
          'circle'
        ]
      },
      {
        id: 'far fa-times-circle',
        name: 'Times-circle',
        filter: [
          'times',
          'circle'
        ]
      },
      {
        id: 'fas fa-tree',
        name: 'Tree',
        filter: [
          'tree'
        ]
      },
      {
        id: 'fab fa-trello',
        name: 'Trello',
        filter: [
          'trello'
        ]
      },
      {
        id: 'fab fa-tripadvisor',
        name: 'Tripadvisor',
        filter: [
          'tripadvisor'
        ]
      },
      {
        id: 'fab fa-tumblr',
        name: 'Tumblr',
        filter: [
          'tumblr'
        ]
      },
      {
        id: 'fab fa-tumblr-square',
        name: 'Tumblr-square',
        filter: [
          'tumblr',
          'square'
        ]
      },
      {
        id: 'fab fa-twitch',
        name: 'Twitch',
        filter: [
          'twitch'
        ]
      },
      {
        id: 'fab fa-twitter',
        name: 'Twitter',
        filter: [
          'twitter'
        ]
      },
      {
        id: 'fab fa-twitter-square',
        name: 'Twitter-square',
        filter: [
          'twitter',
          'square'
        ]
      },
      {
        id: 'fab fa-typo3',
        name: 'Typo3',
        filter: [
          'typo3'
        ]
      },
      {
        id: 'fab fa-uber',
        name: 'Uber',
        filter: [
          'uber'
        ]
      },
      {
        id: 'fab fa-uikit',
        name: 'Uikit',
        filter: [
          'uikit'
        ]
      },
      {
        id: 'fas fa-umbrella',
        name: 'Umbrella',
        filter: [
          'umbrella'
        ]
      },
      {
        id: 'fab fa-uniregistry',
        name: 'Uniregistry',
        filter: [
          'uniregistry'
        ]
      },
      {
        id: 'fas fa-university',
        name: 'University',
        filter: [
          'university'
        ]
      },
      {
        id: 'fab fa-untappd',
        name: 'Untappd',
        filter: [
          'untappd'
        ]
      },
      {
        id: 'fab fa-usb',
        name: 'Usb',
        filter: [
          'usb'
        ]
      },
      {
        id: 'fab fa-ussunnah',
        name: 'Ussunnah',
        filter: [
          'ussunnah'
        ]
      },
      {
        id: 'fas fa-utensil-spoon',
        name: 'Utensil-spoon',
        filter: [
          'utensil',
          'spoon'
        ]
      },
      {
        id: 'fas fa-utensils',
        name: 'Utensils',
        filter: [
          'utensils'
        ]
      },
      {
        id: 'fab fa-vaadin',
        name: 'Vaadin',
        filter: [
          'vaadin'
        ]
      },
      {
        id: 'fab fa-viacoin',
        name: 'Viacoin',
        filter: [
          'viacoin'
        ]
      },
      {
        id: 'fab fa-viadeo',
        name: 'Viadeo',
        filter: [
          'viadeo'
        ]
      },
      {
        id: 'fab fa-viadeo-square',
        name: 'Viadeo-square',
        filter: [
          'viadeo',
          'square'
        ]
      },
      {
        id: 'fab fa-viber',
        name: 'Viber',
        filter: [
          'viber'
        ]
      },
      {
        id: 'fab fa-vimeo',
        name: 'Vimeo',
        filter: [
          'vimeo'
        ]
      },
      {
        id: 'fab fa-vimeo-square',
        name: 'Vimeo-square',
        filter: [
          'vimeo',
          'square'
        ]
      },
      {
        id: 'fab fa-vimeo-v',
        name: 'Vimeo-v',
        filter: [
          'vimeo',
          'v'
        ]
      },
      {
        id: 'fab fa-vine',
        name: 'Vine',
        filter: [
          'vine'
        ]
      },
      {
        id: 'fab fa-vk',
        name: 'Vk',
        filter: [
          'vk'
        ]
      },
      {
        id: 'fab fa-vnv',
        name: 'Vnv',
        filter: [
          'vnv'
        ]
      },
      {
        id: 'fab fa-vuejs',
        name: 'Vuejs',
        filter: [
          'vuejs'
        ]
      },
      {
        id: 'fab fa-weibo',
        name: 'Weibo',
        filter: [
          'weibo'
        ]
      },
      {
        id: 'fab fa-weixin',
        name: 'Weixin',
        filter: [
          'weixin'
        ]
      },
      {
        id: 'fab fa-whatsapp',
        name: 'Whatsapp',
        filter: [
          'whatsapp'
        ]
      },
      {
        id: 'fab fa-whatsapp-square',
        name: 'Whatsapp-square',
        filter: [
          'whatsapp',
          'square'
        ]
      },
      {
        id: 'fab fa-whmcs',
        name: 'Whmcs',
        filter: [
          'whmcs'
        ]
      },
      {
        id: 'fab fa-wikipedia-w',
        name: 'Wikipedia-w',
        filter: [
          'wikipedia',
          'w'
        ]
      },
      {
        id: 'fab fa-windows',
        name: 'Windows',
        filter: [
          'windows'
        ]
      },
      {
        id: 'fab fa-wordpress',
        name: 'Wordpress',
        filter: [
          'wordpress'
        ]
      },
      {
        id: 'fab fa-wordpress-simple',
        name: 'Wordpress-simple',
        filter: [
          'wordpress',
          'simple'
        ]
      },
      {
        id: 'fab fa-wpbeginner',
        name: 'Wpbeginner',
        filter: [
          'wpbeginner'
        ]
      },
      {
        id: 'fab fa-wpexplorer',
        name: 'Wpexplorer',
        filter: [
          'wpexplorer'
        ]
      },
      {
        id: 'fab fa-wpforms',
        name: 'Wpforms',
        filter: [
          'wpforms'
        ]
      },
      {
        id: 'fas fa-wrench',
        name: 'Wrench',
        filter: [
          'wrench'
        ]
      },
      {
        id: 'fab fa-xbox',
        name: 'Xbox',
        filter: [
          'xbox'
        ]
      },
      {
        id: 'fab fa-xing',
        name: 'Xing',
        filter: [
          'xing'
        ]
      },
      {
        id: 'fab fa-xing-square',
        name: 'Xing-square',
        filter: [
          'xing',
          'square'
        ]
      },
      {
        id: 'fab fa-y-combinator',
        name: 'Y-combinator',
        filter: [
          'y',
          'combinator'
        ]
      },
      {
        id: 'fab fa-yahoo',
        name: 'Yahoo',
        filter: [
          'yahoo'
        ]
      },
      {
        id: 'fab fa-yandex',
        name: 'Yandex',
        filter: [
          'yandex'
        ]
      },
      {
        id: 'fab fa-yandex-international',
        name: 'Yandex-international',
        filter: [
          'yandex',
          'international'
        ]
      },
      {
        id: 'fab fa-yelp',
        name: 'Yelp',
        filter: [
          'yelp'
        ]
      },
      {
        id: 'fab fa-yoast',
        name: 'Yoast',
        filter: [
          'yoast'
        ]
      }
    ];
  }

  getMatIcons(): Icon[] {
    return [
      {
        name: '3D Rotation',
        id: '3d_rotation',
      },
      {
        name: 'AC Unit',
        id: 'ac_unit',
      },
      {
        name: 'Access Alarm',
        id: 'access_alarm',
      },
      {
        name: 'Access Alarms',
        id: 'access_alarms',
      },
      {
        name: 'Access Time',
        id: 'access_time',
      },
      {
        name: 'Accessibility',
        id: 'accessibility',
      },
      {
        name: 'Accessible',
        id: 'accessible',
      },
      {
        name: 'Account Balance',
        id: 'account_balance',
      },
      {
        name: 'Account Balance Wallet',
        id: 'account_balance_wallet',
      },
      {
        name: 'Account Box',
        id: 'account_box',
      },
      {
        name: 'Account Circle',
        id: 'account_circle',
      },
      {
        name: 'ADB',
        id: 'adb',
      },
      {
        name: 'Add',
        id: 'add',
      },
      {
        name: 'Add a Photo',
        id: 'add_a_photo',
      },
      {
        name: 'Add Alarm',
        id: 'add_alarm',
      },
      {
        name: 'Add Alert',
        id: 'add_alert',
      },
      {
        name: 'Add Box',
        id: 'add_box',
      },
      {
        name: 'Add Circle',
        id: 'add_circle',
      },
      {
        name: 'Add Circle Outline',
        id: 'add_circle_outline',
      },
      {
        name: 'Add Location',
        id: 'add_location',
      },
      {
        name: 'Add Shopping Cart',
        id: 'add_shopping_cart',
      },
      {
        name: 'Add to Photos',
        id: 'add_to_photos',
      },
      {
        name: 'Add to Queue',
        id: 'add_to_queue',
      },
      {
        name: 'Adjust',
        id: 'adjust',
      },
      {
        name: 'Airline Seat Flat',
        id: 'airline_seat_flat',
      },
      {
        name: 'Airline Seat Flat Angled',
        id: 'airline_seat_flat_angled',
      },
      {
        name: 'Airline Seat Individual Suite',
        id: 'airline_seat_individual_suite',
      },
      {
        name: 'Airline Seat Legroom Extra',
        id: 'airline_seat_legroom_extra',
      },
      {
        name: 'Airline Seat Legroom Normal',
        id: 'airline_seat_legroom_normal',
      },
      {
        name: 'Airline Seat Legroom Reduced',
        id: 'airline_seat_legroom_reduced',
      },
      {
        name: 'Airline Seat Recline Extra',
        id: 'airline_seat_recline_extra',
      },
      {
        name: 'Airline Seat Recline Normal',
        id: 'airline_seat_recline_normal',
      },
      {
        name: 'Airplanemode Active',
        id: 'airplanemode_active',
      },
      {
        name: 'Airplanemode Inactive',
        id: 'airplanemode_inactive',
      },
      {
        name: 'Airplay',
        id: 'airplay',
      },
      {
        name: 'Airport Shuttle',
        id: 'airport_shuttle',
      },
      {
        name: 'Alarm',
        id: 'alarm',
      },
      {
        name: 'Alarm Add',
        id: 'alarm_add',
      },
      {
        name: 'Alarm Off',
        id: 'alarm_off',
      },
      {
        name: 'Alarm On',
        id: 'alarm_on',
      },
      {
        name: 'Album',
        id: 'album',
      },
      {
        name: 'All Inclusive',
        id: 'all_inclusive',
      },
      {
        name: 'All Out',
        id: 'all_out',
      },
      {
        name: 'Android',
        id: 'android',
      },
      {
        name: 'Announcement',
        id: 'announcement',
      },
      {
        name: 'Apps',
        id: 'apps',
      },
      {
        name: 'Archive',
        id: 'archive',
      },
      {
        name: 'Arrow Back',
        id: 'arrow_back',
      },
      {
        name: 'Arrow Downward',
        id: 'arrow_downward',
      },
      {
        name: 'Arrow Drop Down',
        id: 'arrow_drop_down',
      },
      {
        name: 'Arrow Drop Down Circle',
        id: 'arrow_drop_down_circle',
      },
      {
        name: 'Arrow Drop Up',
        id: 'arrow_drop_up',
      },
      {
        name: 'Arrow Forward',
        id: 'arrow_forward',
      },
      {
        name: 'Arrow Upward',
        id: 'arrow_upward',
      },
      {
        name: 'Art Track',
        id: 'art_track',
      },
      {
        name: 'Aspect Ratio',
        id: 'aspect_ratio',
      },
      {
        name: 'Assessment',
        id: 'assessment',
      },
      {
        name: 'Assignment',
        id: 'assignment',
      },
      {
        name: 'Assignment Ind',
        id: 'assignment_ind',
      },
      {
        name: 'Assignment Late',
        id: 'assignment_late',
      },
      {
        name: 'Assignment Return',
        id: 'assignment_return',
      },
      {
        name: 'Assignment Returned',
        id: 'assignment_returned',
      },
      {
        name: 'Assignment Turned In',
        id: 'assignment_turned_in',
      },
      {
        name: 'Assistant',
        id: 'assistant',
      },
      {
        name: 'Assistant Photo',
        id: 'assistant_photo',
      },
      {
        name: 'Attach File',
        id: 'attach_file',
      },
      {
        name: 'Attach Money',
        id: 'attach_money',
      },
      {
        name: 'Attachment',
        id: 'attachment',
      },
      {
        name: 'Audiotrack',
        id: 'audiotrack',
      },
      {
        name: 'Autorenew',
        id: 'autorenew',
      },
      {
        name: 'AV Timer',
        id: 'av_timer',
      },
      {
        name: 'Backspace',
        id: 'backspace',
      },
      {
        name: 'Backup',
        id: 'backup',
      },
      {
        name: 'Battery Alert',
        id: 'battery_alert',
      },
      {
        name: 'Battery Charging Full',
        id: 'battery_charging_full',
      },
      {
        name: 'Battery Full',
        id: 'battery_full',
      },
      {
        name: 'Battery Standard',
        id: 'battery_std',
      },
      {
        name: 'Battery Unknown',
        id: 'battery_unknown',
      },
      {
        name: 'Beach Access',
        id: 'beach_access',
      },
      {
        name: 'Been Here',
        id: 'beenhere',
      },
      {
        name: 'Block',
        id: 'block',
      },
      {
        name: 'Bluetooth',
        id: 'bluetooth',
      },
      {
        name: 'Bluetooth Audio',
        id: 'bluetooth_audio',
      },
      {
        name: 'Bluetooth Connected',
        id: 'bluetooth_connected',
      },
      {
        name: 'Bluetooth Disabled',
        id: 'bluetooth_disabled',
      },
      {
        name: 'Bluetooth Searching',
        id: 'bluetooth_searching',
      },
      {
        name: 'Blur Circular',
        id: 'blur_circular',
      },
      {
        name: 'Blur Linear',
        id: 'blur_linear',
      },
      {
        name: 'Blur Off',
        id: 'blur_off',
      },
      {
        name: 'Blur On',
        id: 'blur_on',
      },
      {
        name: 'Book',
        id: 'book',
      },
      {
        name: 'Bookmark',
        id: 'bookmark',
      },
      {
        name: 'Bookmark Border',
        id: 'bookmark_border',
      },
      {
        name: 'Border All',
        id: 'border_all',
      },
      {
        name: 'Border Bottom',
        id: 'border_bottom',
      },
      {
        name: 'Border Clear',
        id: 'border_clear',
      },
      {
        name: 'Border Color',
        id: 'border_color',
      },
      {
        name: 'Border Horizontal',
        id: 'border_horizontal',
      },
      {
        name: 'Border Inner',
        id: 'border_inner',
      },
      {
        name: 'Border Left',
        id: 'border_left',
      },
      {
        name: 'Border Outer',
        id: 'border_outer',
      },
      {
        name: 'Border Right',
        id: 'border_right',
      },
      {
        name: 'Border Style',
        id: 'border_style',
      },
      {
        name: 'Border Top',
        id: 'border_top',
      },
      {
        name: 'Border Vertical',
        id: 'border_vertical',
      },
      {
        name: 'Branding Watermark',
        id: 'branding_watermark',
      },
      {
        name: 'Brightness 1',
        id: 'brightness_1',
      },
      {
        name: 'Brightness 2',
        id: 'brightness_2',
      },
      {
        name: 'Brightness 3',
        id: 'brightness_3',
      },
      {
        name: 'Brightness 4',
        id: 'brightness_4',
      },
      {
        name: 'Brightness 5',
        id: 'brightness_5',
      },
      {
        name: 'Brightness 6',
        id: 'brightness_6',
      },
      {
        name: 'Brightness 7',
        id: 'brightness_7',
      },
      {
        name: 'Brightness Auto',
        id: 'brightness_auto',
      },
      {
        name: 'Brightness High',
        id: 'brightness_high',
      },
      {
        name: 'Brightness Low',
        id: 'brightness_low',
      },
      {
        name: 'Brightness Medium',
        id: 'brightness_medium',
      },
      {
        name: 'Broken Image',
        id: 'broken_image',
      },
      {
        name: 'Brush',
        id: 'brush',
      },
      {
        name: 'Bubble Chart',
        id: 'bubble_chart',
      },
      {
        name: 'Bug Report',
        id: 'bug_report',
      },
      {
        name: 'Build',
        id: 'build',
      },
      {
        name: 'Burst Mode',
        id: 'burst_mode',
      },
      {
        name: 'Business',
        id: 'business',
      },
      {
        name: 'Business Center',
        id: 'business_center',
      },
      {
        name: 'Cached',
        id: 'cached',
      },
      {
        name: 'Cake',
        id: 'cake',
      },
      {
        name: 'Call',
        id: 'call',
      },
      {
        name: 'Call End',
        id: 'call_end',
      },
      {
        name: 'Call Made',
        id: 'call_made',
      },
      {
        name: 'Call Merge',
        id: 'call_merge',
      },
      {
        name: 'Call Missed',
        id: 'call_missed',
      },
      {
        name: 'Call Missed Outgoing',
        id: 'call_missed_outgoing',
      },
      {
        name: 'Call Received',
        id: 'call_received',
      },
      {
        name: 'Call Split',
        id: 'call_split',
      },
      {
        name: 'Call to Action',
        id: 'call_to_action',
      },
      {
        name: 'Camera',
        id: 'camera',
      },
      {
        name: 'Camera Alt',
        id: 'camera_alt',
      },
      {
        name: 'Camera Enhance',
        id: 'camera_enhance',
      },
      {
        name: 'Camera Front',
        id: 'camera_front',
      },
      {
        name: 'Camera Rear',
        id: 'camera_rear',
      },
      {
        name: 'Camera Roll',
        id: 'camera_roll',
      },
      {
        name: 'Cancel',
        id: 'cancel',
      },
      {
        name: 'Card Giftcard',
        id: 'card_giftcard',
      },
      {
        name: 'Card Membership',
        id: 'card_membership',
      },
      {
        name: 'Card Travel',
        id: 'card_travel',
      },
      {
        name: 'Casino',
        id: 'casino',
      },
      {
        name: 'Cast',
        id: 'cast',
      },
      {
        name: 'Cast Connected',
        id: 'cast_connected',
      },
      {
        name: 'Center Focus Strong',
        id: 'center_focus_strong',
      },
      {
        name: 'Center Focus Weak',
        id: 'center_focus_weak',
      },
      {
        name: 'Change History',
        id: 'change_history',
      },
      {
        name: 'Chat',
        id: 'chat',
      },
      {
        name: 'Chat Bubble',
        id: 'chat_bubble',
      },
      {
        name: 'Chat Bubble Outline',
        id: 'chat_bubble_outline',
      },
      {
        name: 'Check',
        id: 'check',
      },
      {
        name: 'Check Box',
        id: 'check_box',
      },
      {
        name: 'Check Box Outline Blank',
        id: 'check_box_outline_blank',
      },
      {
        name: 'Check Circle',
        id: 'check_circle',
      },
      {
        name: 'Chevron Left',
        id: 'chevron_left',
      },
      {
        name: 'Chevron Right',
        id: 'chevron_right',
      },
      {
        name: 'Child Care',
        id: 'child_care',
      },
      {
        name: 'Child Friendly',
        id: 'child_friendly',
      },
      {
        name: 'Chrome Reader Mode',
        id: 'chrome_reader_mode',
      },
      {
        name: 'Class',
        id: 'class',
      },
      {
        name: 'Clear',
        id: 'clear',
      },
      {
        name: 'Clear All',
        id: 'clear_all',
      },
      {
        name: 'Close',
        id: 'close',
      },
      {
        name: 'Closed Caption',
        id: 'closed_caption',
      },
      {
        name: 'Cloud',
        id: 'cloud',
      },
      {
        name: 'Cloud Circle',
        id: 'cloud_circle',
      },
      {
        name: 'Cloud Done',
        id: 'cloud_done',
      },
      {
        name: 'Cloud Download',
        id: 'cloud_download',
      },
      {
        name: 'Cloud Off',
        id: 'cloud_off',
      },
      {
        name: 'Cloud Queue',
        id: 'cloud_queue',
      },
      {
        name: 'Cloud Upload',
        id: 'cloud_upload',
      },
      {
        name: 'Code',
        id: 'code',
      },
      {
        name: 'Collections',
        id: 'collections',
      },
      {
        name: 'Collections Bookmark',
        id: 'collections_bookmark',
      },
      {
        name: 'Color Lens',
        id: 'color_lens',
      },
      {
        name: 'Colorize',
        id: 'colorize',
      },
      {
        name: 'Comment',
        id: 'comment',
      },
      {
        name: 'Compare',
        id: 'compare',
      },
      {
        name: 'Compare Arrows',
        id: 'compare_arrows',
      },
      {
        name: 'Computer',
        id: 'computer',
      },
      {
        name: 'Confirmation Number',
        id: 'confirmation_number',
      },
      {
        name: 'Contact Mail',
        id: 'contact_mail',
      },
      {
        name: 'Contact Phone',
        id: 'contact_phone',
      },
      {
        name: 'Contacts',
        id: 'contacts',
      },
      {
        name: 'Content Copy',
        id: 'content_copy',
      },
      {
        name: 'Content Cut',
        id: 'content_cut',
      },
      {
        name: 'Content Paste',
        id: 'content_paste',
      },
      {
        name: 'Control Point',
        id: 'control_point',
      },
      {
        name: 'Control Point Duplicate',
        id: 'control_point_duplicate',
      },
      {
        name: 'Copyright',
        id: 'copyright',
      },
      {
        name: 'Create',
        id: 'create',
      },
      {
        name: 'Create New Folder',
        id: 'create_new_folder',
      },
      {
        name: 'Credit Card',
        id: 'credit_card',
      },
      {
        name: 'Crop',
        id: 'crop',
      },
      {
        name: 'Crop 16:9',
        id: 'crop_16_9',
      },
      {
        name: 'Crop 3:2',
        id: 'crop_3_2',
      },
      {
        name: 'Crop 5:4',
        id: 'crop_5_4',
      },
      {
        name: 'Crop 7:5',
        id: 'crop_7_5',
      },
      {
        name: 'Crop DIN',
        id: 'crop_din',
      },
      {
        name: 'Crop Free',
        id: 'crop_free',
      },
      {
        name: 'Crop Landscape',
        id: 'crop_landscape',
      },
      {
        name: 'Crop Original',
        id: 'crop_original',
      },
      {
        name: 'Crop Portrait',
        id: 'crop_portrait',
      },
      {
        name: 'Crop Rotate',
        id: 'crop_rotate',
      },
      {
        name: 'Crop Square',
        id: 'crop_square',
      },
      {
        name: 'Dashboard',
        id: 'dashboard',
      },
      {
        name: 'Data Usage',
        id: 'data_usage',
      },
      {
        name: 'Date Range',
        id: 'date_range',
      },
      {
        name: 'Dehaze',
        id: 'dehaze',
      },
      {
        name: 'Delete',
        id: 'delete',
      },
      {
        name: 'Delete Forever',
        id: 'delete_forever',
      },
      {
        name: 'Delete Sweep',
        id: 'delete_sweep',
      },
      {
        name: 'Description',
        id: 'description',
      },
      {
        name: 'Desktop Mac',
        id: 'desktop_mac',
      },
      {
        name: 'Desktop Windows',
        id: 'desktop_windows',
      },
      {
        name: 'Details',
        id: 'details',
      },
      {
        name: 'Developer Board',
        id: 'developer_board',
      },
      {
        name: 'Developer Mode',
        id: 'developer_mode',
      },
      {
        name: 'Device Hub',
        id: 'device_hub',
      },
      {
        name: 'Devices',
        id: 'devices',
      },
      {
        name: 'Devices Other',
        id: 'devices_other',
      },
      {
        name: 'Dialer SIP',
        id: 'dialer_sip',
      },
      {
        name: 'Dialpad',
        id: 'dialpad',
      },
      {
        name: 'Directions',
        id: 'directions',
      },
      {
        name: 'Directions Bike',
        id: 'directions_bike',
      },
      {
        name: 'Directions Boat',
        id: 'directions_boat',
      },
      {
        name: 'Directions Bus',
        id: 'directions_bus',
      },
      {
        name: 'Directions Car',
        id: 'directions_car',
      },
      {
        name: 'Directions Railway',
        id: 'directions_railway',
      },
      {
        name: 'Directions Run',
        id: 'directions_run',
      },
      {
        name: 'Directions Subway',
        id: 'directions_subway',
      },
      {
        name: 'Directions Transit',
        id: 'directions_transit',
      },
      {
        name: 'Directions Walk',
        id: 'directions_walk',
      },
      {
        name: 'Disc Full',
        id: 'disc_full',
      },
      {
        name: 'DNS',
        id: 'dns',
      },
      {
        name: 'Do Not Disturb',
        id: 'do_not_disturb',
      },
      {
        name: 'Do Not Disturb Alt',
        id: 'do_not_disturb_alt',
      },
      {
        name: 'Do Not Disturb Off',
        id: 'do_not_disturb_off',
      },
      {
        name: 'Do Not Disturb On',
        id: 'do_not_disturb_on',
      },
      {
        name: 'Dock',
        id: 'dock',
      },
      {
        name: 'Domain',
        id: 'domain',
      },
      {
        name: 'Done',
        id: 'done',
      },
      {
        name: 'Done All',
        id: 'done_all',
      },
      {
        name: 'Donut Large',
        id: 'donut_large',
      },
      {
        name: 'Donut Small',
        id: 'donut_small',
      },
      {
        name: 'Drafts',
        id: 'drafts',
      },
      {
        name: 'Drag Handle',
        id: 'drag_handle',
      },
      {
        name: 'Drive ETA',
        id: 'drive_eta',
      },
      {
        name: 'DVR',
        id: 'dvr',
      },
      {
        name: 'Edit',
        id: 'edit',
      },
      {
        name: 'Edit Location',
        id: 'edit_location',
      },
      {
        name: 'Eject',
        id: 'eject',
      },
      {
        name: 'Email',
        id: 'email',
      },
      {
        name: 'Enhanced Encryption',
        id: 'enhanced_encryption',
      },
      {
        name: 'Equalizer',
        id: 'equalizer',
      },
      {
        name: 'Error',
        id: 'error',
      },
      {
        name: 'Error Outline',
        id: 'error_outline',
      },
      {
        name: 'Euro Symbol',
        id: 'euro_symbol',
      },
      {
        name: 'EV Station',
        id: 'ev_station',
      },
      {
        name: 'Event',
        id: 'event',
      },
      {
        name: 'Event Available',
        id: 'event_available',
      },
      {
        name: 'Event Busy',
        id: 'event_busy',
      },
      {
        name: 'Event Note',
        id: 'event_note',
      },
      {
        name: 'Event Seat',
        id: 'event_seat',
      },
      {
        name: 'Exit to App',
        id: 'exit_to_app',
      },
      {
        name: 'Expand Less',
        id: 'expand_less',
      },
      {
        name: 'Expand More',
        id: 'expand_more',
      },
      {
        name: 'Explicit',
        id: 'explicit',
      },
      {
        name: 'Explore',
        id: 'explore',
      },
      {
        name: 'Exposure',
        id: 'exposure',
      },
      {
        name: 'Exposure Negative 1',
        id: 'exposure_neg_1',
      },
      {
        name: 'Exposure Negative 2',
        id: 'exposure_neg_2',
      },
      {
        name: 'Exposure Plus 1',
        id: 'exposure_plus_1',
      },
      {
        name: 'Exposure Plus 2',
        id: 'exposure_plus_2',
      },
      {
        name: 'Exposure Zero',
        id: 'exposure_zero',
      },
      {
        name: 'Extension',
        id: 'extension',
      },
      {
        name: 'Face',
        id: 'face',
      },
      {
        name: 'Fast Forward',
        id: 'fast_forward',
      },
      {
        name: 'Fast Rewind',
        id: 'fast_rewind',
      },
      {
        name: 'Favorite',
        id: 'favorite',
      },
      {
        name: 'Favorite Border',
        id: 'favorite_border',
      },
      {
        name: 'Featured Play List',
        id: 'featured_play_list',
      },
      {
        name: 'Featured Video',
        id: 'featured_video',
      },
      {
        name: 'Feedback',
        id: 'feedback',
      },
      {
        name: 'Fiber DVR',
        id: 'fiber_dvr',
      },
      {
        name: 'Fiber Manual Record',
        id: 'fiber_manual_record',
      },
      {
        name: 'Fiber New',
        id: 'fiber_new',
      },
      {
        name: 'Fiber Pin',
        id: 'fiber_pin',
      },
      {
        name: 'Fiber Smart Record',
        id: 'fiber_smart_record',
      },
      {
        name: 'File Download',
        id: 'file_download',
      },
      {
        name: 'File Upload',
        id: 'file_upload',
      },
      {
        name: 'Filter',
        id: 'filter',
      },
      {
        name: 'Filter 1',
        id: 'filter_1',
      },
      {
        name: 'Filter 2',
        id: 'filter_2',
      },
      {
        name: 'Filter 3',
        id: 'filter_3',
      },
      {
        name: 'Filter 4',
        id: 'filter_4',
      },
      {
        name: 'Filter 5',
        id: 'filter_5',
      },
      {
        name: 'Filter 6',
        id: 'filter_6',
      },
      {
        name: 'Filter 7',
        id: 'filter_7',
      },
      {
        name: 'Filter 8',
        id: 'filter_8',
      },
      {
        name: 'Filter 9',
        id: 'filter_9',
      },
      {
        name: 'Filter 9 Plus',
        id: 'filter_9_plus',
      },
      {
        name: 'Filter B And W',
        id: 'filter_b_and_w',
      },
      {
        name: 'Filter Center Focus',
        id: 'filter_center_focus',
      },
      {
        name: 'Filter Drama',
        id: 'filter_drama',
      },
      {
        name: 'Filter Frames',
        id: 'filter_frames',
      },
      {
        name: 'Filter Hdr',
        id: 'filter_hdr',
      },
      {
        name: 'Filter List',
        id: 'filter_list',
      },
      {
        name: 'Filter None',
        id: 'filter_none',
      },
      {
        name: 'Filter Tilt Shift',
        id: 'filter_tilt_shift',
      },
      {
        name: 'Filter Vintage',
        id: 'filter_vintage',
      },
      {
        name: 'Find In Page',
        id: 'find_in_page',
      },
      {
        name: 'Find Replace',
        id: 'find_replace',
      },
      {
        name: 'Fingerprint',
        id: 'fingerprint',
      },
      {
        name: 'First Page',
        id: 'first_page',
      },
      {
        name: 'Fitness Center',
        id: 'fitness_center',
      },
      {
        name: 'Flag',
        id: 'flag',
      },
      {
        name: 'Flare',
        id: 'flare',
      },
      {
        name: 'Flash Auto',
        id: 'flash_auto',
      },
      {
        name: 'Flash Off',
        id: 'flash_off',
      },
      {
        name: 'Flash On',
        id: 'flash_on',
      },
      {
        name: 'Flight',
        id: 'flight',
      },
      {
        name: 'Flight Land',
        id: 'flight_land',
      },
      {
        name: 'Flight Takeoff',
        id: 'flight_takeoff',
      },
      {
        name: 'Flip',
        id: 'flip',
      },
      {
        name: 'Flip To Back',
        id: 'flip_to_back',
      },
      {
        name: 'Flip To Front',
        id: 'flip_to_front',
      },
      {
        name: 'Folder',
        id: 'folder',
      },
      {
        name: 'Folder Open',
        id: 'folder_open',
      },
      {
        name: 'Folder Shared',
        id: 'folder_shared',
      },
      {
        name: 'Folder Special',
        id: 'folder_special',
      },
      {
        name: 'Font Download',
        id: 'font_download',
      },
      {
        name: 'Format Align Center',
        id: 'format_align_center',
      },
      {
        name: 'Format Align Justify',
        id: 'format_align_justify',
      },
      {
        name: 'Format Align Left',
        id: 'format_align_left',
      },
      {
        name: 'Format Align Right',
        id: 'format_align_right',
      },
      {
        name: 'Format Bold',
        id: 'format_bold',
      },
      {
        name: 'Format Clear',
        id: 'format_clear',
      },
      {
        name: 'Format Color Fill',
        id: 'format_color_fill',
      },
      {
        name: 'Format Color Reset',
        id: 'format_color_reset',
      },
      {
        name: 'Format Color Text',
        id: 'format_color_text',
      },
      {
        name: 'Format Indent Decrease',
        id: 'format_indent_decrease',
      },
      {
        name: 'Format Indent Increase',
        id: 'format_indent_increase',
      },
      {
        name: 'Format Italic',
        id: 'format_italic',
      },
      {
        name: 'Format Line Spacing',
        id: 'format_line_spacing',
      },
      {
        name: 'Format List Bulleted',
        id: 'format_list_bulleted',
      },
      {
        name: 'Format List Numbered',
        id: 'format_list_numbered',
      },
      {
        name: 'Format Paint',
        id: 'format_paint',
      },
      {
        name: 'Format Quote',
        id: 'format_quote',
      },
      {
        name: 'Format Shapes',
        id: 'format_shapes',
      },
      {
        name: 'Format Size',
        id: 'format_size',
      },
      {
        name: 'Format Strikethrough',
        id: 'format_strikethrough',
      },
      {
        name: 'Format Textdirection Left to Right',
        id: 'format_textdirection_l_to_r',
      },
      {
        name: 'Format Textdirection Right to Left',
        id: 'format_textdirection_r_to_l',
      },
      {
        name: 'Format Underlined',
        id: 'format_underlined',
      },
      {
        name: 'Forum',
        id: 'forum',
      },
      {
        name: 'Forward',
        id: 'forward',
      },
      {
        name: 'Forward 10',
        id: 'forward_10',
      },
      {
        name: 'Forward 30',
        id: 'forward_30',
      },
      {
        name: 'Forward 5',
        id: 'forward_5',
      },
      {
        name: 'Free Breakfast',
        id: 'free_breakfast',
      },
      {
        name: 'Fullscreen',
        id: 'fullscreen',
      },
      {
        name: 'Fullscreen Exit',
        id: 'fullscreen_exit',
      },
      {
        name: 'Functions',
        id: 'functions',
      },
      {
        name: 'G Translate',
        id: 'g_translate',
      },
      {
        name: 'Gamepad',
        id: 'gamepad',
      },
      {
        name: 'Games',
        id: 'games',
      },
      {
        name: 'Gavel',
        id: 'gavel',
      },
      {
        name: 'Gesture',
        id: 'gesture',
      },
      {
        name: 'Get App',
        id: 'get_app',
      },
      {
        name: 'GIF',
        id: 'gif',
      },
      {
        name: 'Golf Course',
        id: 'golf_course',
      },
      {
        name: 'GPS Fixed',
        id: 'gps_fixed',
      },
      {
        name: 'GPS Not Fixed',
        id: 'gps_not_fixed',
      },
      {
        name: 'GPS Off',
        id: 'gps_off',
      },
      {
        name: 'Grade',
        id: 'grade',
      },
      {
        name: 'Gradient',
        id: 'gradient',
      },
      {
        name: 'Grain',
        id: 'grain',
      },
      {
        name: 'Graphic Equalizer',
        id: 'graphic_eq',
      },
      {
        name: 'Grid Off',
        id: 'grid_off',
      },
      {
        name: 'Grid On',
        id: 'grid_on',
      },
      {
        name: 'Group',
        id: 'group',
      },
      {
        name: 'Group Add',
        id: 'group_add',
      },
      {
        name: 'Group Work',
        id: 'group_work',
      },
      {
        name: 'HD',
        id: 'hd',
      },
      {
        name: 'HDR Off',
        id: 'hdr_off',
      },
      {
        name: 'HDR On',
        id: 'hdr_on',
      },
      {
        name: 'HDR Strong',
        id: 'hdr_strong',
      },
      {
        name: 'HDR Weak',
        id: 'hdr_weak',
      },
      {
        name: 'Headset',
        id: 'headset',
      },
      {
        name: 'Headset Microphone',
        id: 'headset_mic',
      },
      {
        name: 'Healing',
        id: 'healing',
      },
      {
        name: 'Hearing',
        id: 'hearing',
      },
      {
        name: 'Help',
        id: 'help',
      },
      {
        name: 'Help Outline',
        id: 'help_outline',
      },
      {
        name: 'High Quality',
        id: 'high_quality',
      },
      {
        name: 'Highlight',
        id: 'highlight',
      },
      {
        name: 'Highlight Off',
        id: 'highlight_off',
      },
      {
        name: 'History',
        id: 'history',
      },
      {
        name: 'Home',
        id: 'home',
      },
      {
        name: 'Hot Tub',
        id: 'hot_tub',
      },
      {
        name: 'Hotel',
        id: 'hotel',
      },
      {
        name: 'Hourglass Empty',
        id: 'hourglass_empty',
      },
      {
        name: 'Hourglass Full',
        id: 'hourglass_full',
      },
      {
        name: 'HTTP',
        id: 'http',
      },
      {
        name: 'HTTPS',
        id: 'https',
      },
      {
        name: 'Image',
        id: 'image',
      },
      {
        name: 'Image Aspect Ratio',
        id: 'image_aspect_ratio',
      },
      {
        name: 'Import Contacts',
        id: 'import_contacts',
      },
      {
        name: 'Import Export',
        id: 'import_export',
      },
      {
        name: 'Important Devices',
        id: 'important_devices',
      },
      {
        name: 'Inbox',
        id: 'inbox',
      },
      {
        name: 'Indeterminate Check Box',
        id: 'indeterminate_check_box',
      },
      {
        name: 'Info',
        id: 'info',
      },
      {
        name: 'Info Outline',
        id: 'info_outline',
      },
      {
        name: 'Input',
        id: 'input',
      },
      {
        name: 'Insert Chart',
        id: 'insert_chart',
      },
      {
        name: 'Insert Comment',
        id: 'insert_comment',
      },
      {
        name: 'Insert Drive File',
        id: 'insert_drive_file',
      },
      {
        name: 'Insert Emoticon',
        id: 'insert_emoticon',
      },
      {
        name: 'Insert Invitation',
        id: 'insert_invitation',
      },
      {
        name: 'Insert Link',
        id: 'insert_link',
      },
      {
        name: 'Insert Photo',
        id: 'insert_photo',
      },
      {
        name: 'Invert Colors',
        id: 'invert_colors',
      },
      {
        name: 'Invert Colors Off',
        id: 'invert_colors_off',
      },
      {
        name: 'ISO',
        id: 'iso',
      },
      {
        name: 'Keyboard',
        id: 'keyboard',
      },
      {
        name: 'Keyboard Arrow Down',
        id: 'keyboard_arrow_down',
      },
      {
        name: 'Keyboard Arrow Left',
        id: 'keyboard_arrow_left',
      },
      {
        name: 'Keyboard Arrow Right',
        id: 'keyboard_arrow_right',
      },
      {
        name: 'Keyboard Arrow Up',
        id: 'keyboard_arrow_up',
      },
      {
        name: 'Keyboard Backspace',
        id: 'keyboard_backspace',
      },
      {
        name: 'Keyboard Capslock',
        id: 'keyboard_capslock',
      },
      {
        name: 'Keyboard Hide',
        id: 'keyboard_hide',
      },
      {
        name: 'Keyboard Return',
        id: 'keyboard_return',
      },
      {
        name: 'Keyboard Tab',
        id: 'keyboard_tab',
      },
      {
        name: 'Keyboard Voice',
        id: 'keyboard_voice',
      },
      {
        name: 'Kitchen',
        id: 'kitchen',
      },
      {
        name: 'Label',
        id: 'label',
      },
      {
        name: 'Label Outline',
        id: 'label_outline',
      },
      {
        name: 'Landscape',
        id: 'landscape',
      },
      {
        name: 'Language',
        id: 'language',
      },
      {
        name: 'Laptop',
        id: 'laptop',
      },
      {
        name: 'Laptop Chromebook',
        id: 'laptop_chromebook',
      },
      {
        name: 'Laptop Mac',
        id: 'laptop_mac',
      },
      {
        name: 'Laptop Windows',
        id: 'laptop_windows',
      },
      {
        name: 'Last Page',
        id: 'last_page',
      },
      {
        name: 'Launch',
        id: 'launch',
      },
      {
        name: 'Layers',
        id: 'layers',
      },
      {
        name: 'Layers Clear',
        id: 'layers_clear',
      },
      {
        name: 'Leak Add',
        id: 'leak_add',
      },
      {
        name: 'Leak Remove',
        id: 'leak_remove',
      },
      {
        name: 'Lens',
        id: 'lens',
      },
      {
        name: 'Library Add',
        id: 'library_add',
      },
      {
        name: 'Library Books',
        id: 'library_books',
      },
      {
        name: 'Library Music',
        id: 'library_music',
      },
      {
        name: 'Lightbulb Outline',
        id: 'lightbulb_outline',
      },
      {
        name: 'Line Style',
        id: 'line_style',
      },
      {
        name: 'Line Weight',
        id: 'line_weight',
      },
      {
        name: 'Linear Scale',
        id: 'linear_scale',
      },
      {
        name: 'Link',
        id: 'link',
      },
      {
        name: 'Linked Camera',
        id: 'linked_camera',
      },
      {
        name: 'List',
        id: 'list',
      },
      {
        name: 'Live Help',
        id: 'live_help',
      },
      {
        name: 'Live TV',
        id: 'live_tv',
      },
      {
        name: 'Local Activity',
        id: 'local_activity',
      },
      {
        name: 'Local Airport',
        id: 'local_airport',
      },
      {
        name: 'Local ATM',
        id: 'local_atm',
      },
      {
        name: 'Local Bar',
        id: 'local_bar',
      },
      {
        name: 'Local Cafe',
        id: 'local_cafe',
      },
      {
        name: 'Local Car Wash',
        id: 'local_car_wash',
      },
      {
        name: 'Local Convenience Store',
        id: 'local_convenience_store',
      },
      {
        name: 'Local Dining',
        id: 'local_dining',
      },
      {
        name: 'Local Drink',
        id: 'local_drink',
      },
      {
        name: 'Local Florist',
        id: 'local_florist',
      },
      {
        name: 'Local Gas Station',
        id: 'local_gas_station',
      },
      {
        name: 'Local Grocery Store',
        id: 'local_grocery_store',
      },
      {
        name: 'Local Hospital',
        id: 'local_hospital',
      },
      {
        name: 'Local Hotel',
        id: 'local_hotel',
      },
      {
        name: 'Local Laundry Service',
        id: 'local_laundry_service',
      },
      {
        name: 'Local Library',
        id: 'local_library',
      },
      {
        name: 'Local Mall',
        id: 'local_mall',
      },
      {
        name: 'Local Movies',
        id: 'local_movies',
      },
      {
        name: 'Local Offer',
        id: 'local_offer',
      },
      {
        name: 'Local Parking',
        id: 'local_parking',
      },
      {
        name: 'Local Pharmacy',
        id: 'local_pharmacy',
      },
      {
        name: 'Local Phone',
        id: 'local_phone',
      },
      {
        name: 'Local Pizza',
        id: 'local_pizza',
      },
      {
        name: 'Local Play',
        id: 'local_play',
      },
      {
        name: 'Local Post Office',
        id: 'local_post_office',
      },
      {
        name: 'Local Printshop',
        id: 'local_printshop',
      },
      {
        name: 'Local See',
        id: 'local_see',
      },
      {
        name: 'Local Shipping',
        id: 'local_shipping',
      },
      {
        name: 'Local Taxi',
        id: 'local_taxi',
      },
      {
        name: 'Location City',
        id: 'location_city',
      },
      {
        name: 'Location Disabled',
        id: 'location_disabled',
      },
      {
        name: 'Location Off',
        id: 'location_off',
      },
      {
        name: 'Location On',
        id: 'location_on',
      },
      {
        name: 'Location Searching',
        id: 'location_searching',
      },
      {
        name: 'Lock',
        id: 'lock',
      },
      {
        name: 'Lock Open',
        id: 'lock_open',
      },
      {
        name: 'Lock Outline',
        id: 'lock_outline',
      },
      {
        name: 'Looks',
        id: 'looks',
      },
      {
        name: 'Looks 3',
        id: 'looks_3',
      },
      {
        name: 'Looks 4',
        id: 'looks_4',
      },
      {
        name: 'Looks 5',
        id: 'looks_5',
      },
      {
        name: 'Looks 6',
        id: 'looks_6',
      },
      {
        name: 'Looks One',
        id: 'looks_one',
      },
      {
        name: 'Looks Two',
        id: 'looks_two',
      },
      {
        name: 'Loop',
        id: 'loop',
      },
      {
        name: 'Loupe',
        id: 'loupe',
      },
      {
        name: 'Low Priority',
        id: 'low_priority',
      },
      {
        name: 'Loyalty',
        id: 'loyalty',
      },
      {
        name: 'Mail',
        id: 'mail',
      },
      {
        name: 'Mail Outline',
        id: 'mail_outline',
      },
      {
        name: 'Map',
        id: 'map',
      },
      {
        name: 'Mark Unread',
        id: 'markunread',
      },
      {
        name: 'Mark Unread Mailbox',
        id: 'markunread_mailbox',
      },
      {
        name: 'Memory',
        id: 'memory',
      },
      {
        name: 'Menu',
        id: 'menu',
      },
      {
        name: 'Merge Type',
        id: 'merge_type',
      },
      {
        name: 'Message',
        id: 'message',
      },
      {
        name: 'Microphone',
        id: 'mic',
      },
      {
        name: 'Microphone None',
        id: 'mic_none',
      },
      {
        name: 'Microphone Off',
        id: 'mic_off',
      },
      {
        name: 'MMS',
        id: 'mms',
      },
      {
        name: 'Mode Comment',
        id: 'mode_comment',
      },
      {
        name: 'Mode Edit',
        id: 'mode_edit',
      },
      {
        name: 'Monetization On',
        id: 'monetization_on',
      },
      {
        name: 'Money Off',
        id: 'money_off',
      },
      {
        name: 'Monochrome Photos',
        id: 'monochrome_photos',
      },
      {
        name: 'Mood',
        id: 'mood',
      },
      {
        name: 'Mood Bad',
        id: 'mood_bad',
      },
      {
        name: 'More',
        id: 'more',
      },
      {
        name: 'More Horizontal',
        id: 'more_horiz',
      },
      {
        name: 'More Vertical',
        id: 'more_vert',
      },
      {
        name: 'Motorcycle',
        id: 'motorcycle',
      },
      {
        name: 'Mouse',
        id: 'mouse',
      },
      {
        name: 'Move to Inbox',
        id: 'move_to_inbox',
      },
      {
        name: 'Movie',
        id: 'movie',
      },
      {
        name: 'Movie Creation',
        id: 'movie_creation',
      },
      {
        name: 'Movie Filter',
        id: 'movie_filter',
      },
      {
        name: 'Multiline Chart',
        id: 'multiline_chart',
      },
      {
        name: 'Music Note',
        id: 'music_note',
      },
      {
        name: 'Music Video',
        id: 'music_video',
      },
      {
        name: 'My Location',
        id: 'my_location',
      },
      {
        name: 'Nature',
        id: 'nature',
      },
      {
        name: 'Nature People',
        id: 'nature_people',
      },
      {
        name: 'Navigate Before',
        id: 'navigate_before',
      },
      {
        name: 'Navigate Next',
        id: 'navigate_next',
      },
      {
        name: 'Navigation',
        id: 'navigation',
      },
      {
        name: 'Near Me',
        id: 'near_me',
      },
      {
        name: 'Network Cell',
        id: 'network_cell',
      },
      {
        name: 'Network Check',
        id: 'network_check',
      },
      {
        name: 'Network Locked',
        id: 'network_locked',
      },
      {
        name: 'Network Wifi',
        id: 'network_wifi',
      },
      {
        name: 'New Releases',
        id: 'new_releases',
      },
      {
        name: 'Next Week',
        id: 'next_week',
      },
      {
        name: 'NFC',
        id: 'nfc',
      },
      {
        name: 'No Encryption',
        id: 'no_encryption',
      },
      {
        name: 'No SIM',
        id: 'no_sim',
      },
      {
        name: 'Not Interested',
        id: 'not_interested',
      },
      {
        name: 'Note',
        id: 'note',
      },
      {
        name: 'Note Add',
        id: 'note_add',
      },
      {
        name: 'Notifications',
        id: 'notifications',
      },
      {
        name: 'Notifications Active',
        id: 'notifications_active',
      },
      {
        name: 'Notifications None',
        id: 'notifications_none',
      },
      {
        name: 'Notifications Off',
        id: 'notifications_off',
      },
      {
        name: 'Notifications Paused',
        id: 'notifications_paused',
      },
      {
        name: 'Offline Pin',
        id: 'offline_pin',
      },
      {
        name: 'On-Demand Video',
        id: 'ondemand_video',
      },
      {
        name: 'Opacity',
        id: 'opacity',
      },
      {
        name: 'Open in Browser',
        id: 'open_in_browser',
      },
      {
        name: 'Open in New',
        id: 'open_in_new',
      },
      {
        name: 'Open With',
        id: 'open_with',
      },
      {
        name: 'Pages',
        id: 'pages',
      },
      {
        name: 'Pageview',
        id: 'pageview',
      },
      {
        name: 'Palette',
        id: 'palette',
      },
      {
        name: 'Pan Tool',
        id: 'pan_tool',
      },
      {
        name: 'Panorama',
        id: 'panorama',
      },
      {
        name: 'Panorama Fish Eye',
        id: 'panorama_fish_eye',
      },
      {
        name: 'Panorama Horizontal',
        id: 'panorama_horizontal',
      },
      {
        name: 'Panorama Vertical',
        id: 'panorama_vertical',
      },
      {
        name: 'Panorama Wide Angle',
        id: 'panorama_wide_angle',
      },
      {
        name: 'Party Mode',
        id: 'party_mode',
      },
      {
        name: 'Pause',
        id: 'pause',
      },
      {
        name: 'Pause Circle Filled',
        id: 'pause_circle_filled',
      },
      {
        name: 'Pause Circle Outline',
        id: 'pause_circle_outline',
      },
      {
        name: 'Payment',
        id: 'payment',
      },
      {
        name: 'People',
        id: 'people',
      },
      {
        name: 'People Outline',
        id: 'people_outline',
      },
      {
        name: 'Permission Camera Mic',
        id: 'perm_camera_mic',
      },
      {
        name: 'Permission Contact Calendar',
        id: 'perm_contact_calendar',
      },
      {
        name: 'Permission Data Setting',
        id: 'perm_data_setting',
      },
      {
        name: 'Permission Device Information',
        id: 'perm_device_information',
      },
      {
        name: 'Permission Identity',
        id: 'perm_identity',
      },
      {
        name: 'Permission Media',
        id: 'perm_media',
      },
      {
        name: 'Permission Phone Message',
        id: 'perm_phone_msg',
      },
      {
        name: 'Permission Scan Wifi',
        id: 'perm_scan_wifi',
      },
      {
        name: 'Person',
        id: 'person',
      },
      {
        name: 'Person Add',
        id: 'person_add',
      },
      {
        name: 'Person Outline',
        id: 'person_outline',
      },
      {
        name: 'Person Pin',
        id: 'person_pin',
      },
      {
        name: 'Person Pin Circle',
        id: 'person_pin_circle',
      },
      {
        name: 'Personal Video',
        id: 'personal_video',
      },
      {
        name: 'Pets',
        id: 'pets',
      },
      {
        name: 'Phone',
        id: 'phone',
      },
      {
        name: 'Phone Android',
        id: 'phone_android',
      },
      {
        name: 'Phone Bluetooth Speaker',
        id: 'phone_bluetooth_speaker',
      },
      {
        name: 'Phone Forwarded',
        id: 'phone_forwarded',
      },
      {
        name: 'Phone in Talk',
        id: 'phone_in_talk',
      },
      {
        name: 'Phone iPhone',
        id: 'phone_iphone',
      },
      {
        name: 'Phone Locked',
        id: 'phone_locked',
      },
      {
        name: 'Phone Missed',
        id: 'phone_missed',
      },
      {
        name: 'Phone Paused',
        id: 'phone_paused',
      },
      {
        name: 'Phonelink',
        id: 'phonelink',
      },
      {
        name: 'Phonelink Erase',
        id: 'phonelink_erase',
      },
      {
        name: 'Phonelink Lock',
        id: 'phonelink_lock',
      },
      {
        name: 'Phonelink Off',
        id: 'phonelink_off',
      },
      {
        name: 'Phonelink Ring',
        id: 'phonelink_ring',
      },
      {
        name: 'Phonelink Setup',
        id: 'phonelink_setup',
      },
      {
        name: 'Photo',
        id: 'photo',
      },
      {
        name: 'Photo Album',
        id: 'photo_album',
      },
      {
        name: 'Photo Camera',
        id: 'photo_camera',
      },
      {
        name: 'Photo Filter',
        id: 'photo_filter',
      },
      {
        name: 'Photo Library',
        id: 'photo_library',
      },
      {
        name: 'Photo Size Select Actual',
        id: 'photo_size_select_actual',
      },
      {
        name: 'Photo Size Select Large',
        id: 'photo_size_select_large',
      },
      {
        name: 'Photo Size Select Small',
        id: 'photo_size_select_small',
      },
      {
        name: 'Picture as Pdf',
        id: 'picture_as_pdf',
      },
      {
        name: 'Picture in Picture',
        id: 'picture_in_picture',
      },
      {
        name: 'Picture in Picture Alternative',
        id: 'picture_in_picture_alt',
      },
      {
        name: 'Pie Chart',
        id: 'pie_chart',
      },
      {
        name: 'Pie Chart Outlined',
        id: 'pie_chart_outlined',
      },
      {
        name: 'Pin Drop',
        id: 'pin_drop',
      },
      {
        name: 'Place',
        id: 'place',
      },
      {
        name: 'Play Arrow',
        id: 'play_arrow',
      },
      {
        name: 'Play Circle Filled',
        id: 'play_circle_filled',
      },
      {
        name: 'Play Circle Outline',
        id: 'play_circle_outline',
      },
      {
        name: 'Play for Work',
        id: 'play_for_work',
      },
      {
        name: 'Playlist Add',
        id: 'playlist_add',
      },
      {
        name: 'Playlist Add Check',
        id: 'playlist_add_check',
      },
      {
        name: 'Playlist Play',
        id: 'playlist_play',
      },
      {
        name: 'Plus One',
        id: 'plus_one',
      },
      {
        name: 'Poll',
        id: 'poll',
      },
      {
        name: 'Polymer',
        id: 'polymer',
      },
      {
        name: 'Pool',
        id: 'pool',
      },
      {
        name: 'Portable Wifi Off',
        id: 'portable_wifi_off',
      },
      {
        name: 'Portrait',
        id: 'portrait',
      },
      {
        name: 'Power',
        id: 'power',
      },
      {
        name: 'Power Input',
        id: 'power_input',
      },
      {
        name: 'Power Settings New',
        id: 'power_settings_new',
      },
      {
        name: 'Pregnant Woman',
        id: 'pregnant_woman',
      },
      {
        name: 'Present To All',
        id: 'present_to_all',
      },
      {
        name: 'Print',
        id: 'print',
      },
      {
        name: 'Priority High',
        id: 'priority_high',
      },
      {
        name: 'Public',
        id: 'public',
      },
      {
        name: 'Publish',
        id: 'publish',
      },
      {
        name: 'Query Builder',
        id: 'query_builder',
      },
      {
        name: 'Question Answer',
        id: 'question_answer',
      },
      {
        name: 'Queue',
        id: 'queue',
      },
      {
        name: 'Queue Music',
        id: 'queue_music',
      },
      {
        name: 'Queue Play Next',
        id: 'queue_play_next',
      },
      {
        name: 'Radio',
        id: 'radio',
      },
      {
        name: 'Radio Button Checked',
        id: 'radio_button_checked',
      },
      {
        name: 'Radio Button Unchecked',
        id: 'radio_button_unchecked',
      },
      {
        name: 'Rate Review',
        id: 'rate_review',
      },
      {
        name: 'Receipt',
        id: 'receipt',
      },
      {
        name: 'Recent Actors',
        id: 'recent_actors',
      },
      {
        name: 'Record Voice Over',
        id: 'record_voice_over',
      },
      {
        name: 'Redeem',
        id: 'redeem',
      },
      {
        name: 'Redo',
        id: 'redo',
      },
      {
        name: 'Refresh',
        id: 'refresh',
      },
      {
        name: 'Remove',
        id: 'remove',
      },
      {
        name: 'Remove Circle',
        id: 'remove_circle',
      },
      {
        name: 'Remove Circle Outline',
        id: 'remove_circle_outline',
      },
      {
        name: 'Remove From Queue',
        id: 'remove_from_queue',
      },
      {
        name: 'Remove Red Eye',
        id: 'remove_red_eye',
      },
      {
        name: 'Remove Shopping Cart',
        id: 'remove_shopping_cart',
      },
      {
        name: 'Reorder',
        id: 'reorder',
      },
      {
        name: 'Repeat',
        id: 'repeat',
      },
      {
        name: 'Repeat One',
        id: 'repeat_one',
      },
      {
        name: 'Replay',
        id: 'replay',
      },
      {
        name: 'Replay 10',
        id: 'replay_10',
      },
      {
        name: 'Replay 30',
        id: 'replay_30',
      },
      {
        name: 'Replay 5',
        id: 'replay_5',
      },
      {
        name: 'Reply',
        id: 'reply',
      },
      {
        name: 'Reply All',
        id: 'reply_all',
      },
      {
        name: 'Report',
        id: 'report',
      },
      {
        name: 'Report Problem',
        id: 'report_problem',
      },
      {
        name: 'Restaurant',
        id: 'restaurant',
      },
      {
        name: 'Restaurant Menu',
        id: 'restaurant_menu',
      },
      {
        name: 'Restore',
        id: 'restore',
      },
      {
        name: 'Restore Page',
        id: 'restore_page',
      },
      {
        name: 'Ring Volume',
        id: 'ring_volume',
      },
      {
        name: 'Room',
        id: 'room',
      },
      {
        name: 'Room Service',
        id: 'room_service',
      },
      {
        name: 'Rotate 90 Degrees Counterclockwise',
        id: 'rotate_90_degrees_ccw',
      },
      {
        name: 'Rotate Left',
        id: 'rotate_left',
      },
      {
        name: 'Rotate Right',
        id: 'rotate_right',
      },
      {
        name: 'Rounded Corner',
        id: 'rounded_corner',
      },
      {
        name: 'Router',
        id: 'router',
      },
      {
        name: 'Rowing',
        id: 'rowing',
      },
      {
        name: 'RSS Feed',
        id: 'rss_feed',
      },
      {
        name: 'RV Hookup',
        id: 'rv_hookup',
      },
      {
        name: 'Satellite',
        id: 'satellite',
      },
      {
        name: 'Save',
        id: 'save',
      },
      {
        name: 'Scanner',
        id: 'scanner',
      },
      {
        name: 'Schedule',
        id: 'schedule',
      },
      {
        name: 'School',
        id: 'school',
      },
      {
        name: 'Screen Lock Landscape',
        id: 'screen_lock_landscape',
      },
      {
        name: 'Screen Lock Portrait',
        id: 'screen_lock_portrait',
      },
      {
        name: 'Screen Lock Rotation',
        id: 'screen_lock_rotation',
      },
      {
        name: 'Screen Rotation',
        id: 'screen_rotation',
      },
      {
        name: 'Screen Share',
        id: 'screen_share',
      },
      {
        name: 'SD Card',
        id: 'sd_card',
      },
      {
        name: 'SD Storage',
        id: 'sd_storage',
      },
      {
        name: 'Search',
        id: 'search',
      },
      {
        name: 'Security',
        id: 'security',
      },
      {
        name: 'Select All',
        id: 'select_all',
      },
      {
        name: 'Send',
        id: 'send',
      },
      {
        name: 'Sentiment Dissatisfied',
        id: 'sentiment_dissatisfied',
      },
      {
        name: 'Sentiment Neutral',
        id: 'sentiment_neutral',
      },
      {
        name: 'Sentiment Satisfied',
        id: 'sentiment_satisfied',
      },
      {
        name: 'Sentiment Very Dissatisfied',
        id: 'sentiment_very_dissatisfied',
      },
      {
        name: 'Sentiment Very Satisfied',
        id: 'sentiment_very_satisfied',
      },
      {
        name: 'Settings',
        id: 'settings',
      },
      {
        name: 'Settings Applications',
        id: 'settings_applications',
      },
      {
        name: 'Settings Backup Restore',
        id: 'settings_backup_restore',
      },
      {
        name: 'Settings Bluetooth',
        id: 'settings_bluetooth',
      },
      {
        name: 'Settings Brightness',
        id: 'settings_brightness',
      },
      {
        name: 'Settings Cell',
        id: 'settings_cell',
      },
      {
        name: 'Settings Ethernet',
        id: 'settings_ethernet',
      },
      {
        name: 'Settings Input Antenna',
        id: 'settings_input_antenna',
      },
      {
        name: 'Settings Input Component',
        id: 'settings_input_component',
      },
      {
        name: 'Settings Input Composite',
        id: 'settings_input_composite',
      },
      {
        name: 'Settings Input HDMI',
        id: 'settings_input_hdmi',
      },
      {
        name: 'Settings Input S-Video',
        id: 'settings_input_svideo',
      },
      {
        name: 'Settings Overscan',
        id: 'settings_overscan',
      },
      {
        name: 'Settings Phone',
        id: 'settings_phone',
      },
      {
        name: 'Settings Power',
        id: 'settings_power',
      },
      {
        name: 'Settings Remote',
        id: 'settings_remote',
      },
      {
        name: 'Settings System Daydream',
        id: 'settings_system_daydream',
      },
      {
        name: 'Settings Voice',
        id: 'settings_voice',
      },
      {
        name: 'Share',
        id: 'share',
      },
      {
        name: 'Shop',
        id: 'shop',
      },
      {
        name: 'Shop Two',
        id: 'shop_two',
      },
      {
        name: 'Shopping Basket',
        id: 'shopping_basket',
      },
      {
        name: 'Shopping Cart',
        id: 'shopping_cart',
      },
      {
        name: 'Short Text',
        id: 'short_text',
      },
      {
        name: 'Show Chart',
        id: 'show_chart',
      },
      {
        name: 'Shuffle',
        id: 'shuffle',
      },
      {
        name: 'Signal Cellular 4 Bar',
        id: 'signal_cellular_4_bar',
      },
      {
        name: 'Signal Cellular Connected No Internet 4 Bar',
        id: 'signal_cellular_connected_no_internet_4_bar',
      },
      {
        name: 'Signal Cellular No Sim',
        id: 'signal_cellular_no_sim',
      },
      {
        name: 'Signal Cellular Null',
        id: 'signal_cellular_null',
      },
      {
        name: 'Signal Cellular Off',
        id: 'signal_cellular_off',
      },
      {
        name: 'Signal Wifi 4 Bar',
        id: 'signal_wifi_4_bar',
      },
      {
        name: 'Signal Wifi 4 Bar Lock',
        id: 'signal_wifi_4_bar_lock',
      },
      {
        name: 'Signal Wifi Off',
        id: 'signal_wifi_off',
      },
      {
        name: 'SIM Card',
        id: 'sim_card',
      },
      {
        name: 'SIM Card Alert',
        id: 'sim_card_alert',
      },
      {
        name: 'Skip Next',
        id: 'skip_next',
      },
      {
        name: 'Skip Previous',
        id: 'skip_previous',
      },
      {
        name: 'Slideshow',
        id: 'slideshow',
      },
      {
        name: 'Slow Motion Video',
        id: 'slow_motion_video',
      },
      {
        name: 'Smartphone',
        id: 'smartphone',
      },
      {
        name: 'Smoke Free',
        id: 'smoke_free',
      },
      {
        name: 'Smoking Rooms',
        id: 'smoking_rooms',
      },
      {
        name: 'SMS',
        id: 'sms',
      },
      {
        name: 'SMS Failed',
        id: 'sms_failed',
      },
      {
        name: 'Snooze',
        id: 'snooze',
      },
      {
        name: 'Sort',
        id: 'sort',
      },
      {
        name: 'Sort by Alpha',
        id: 'sort_by_alpha',
      },
      {
        name: 'Spa',
        id: 'spa',
      },
      {
        name: 'Space Bar',
        id: 'space_bar',
      },
      {
        name: 'Speaker',
        id: 'speaker',
      },
      {
        name: 'Speaker Group',
        id: 'speaker_group',
      },
      {
        name: 'Speaker Notes',
        id: 'speaker_notes',
      },
      {
        name: 'Speaker Notes Off',
        id: 'speaker_notes_off',
      },
      {
        name: 'Speaker Phone',
        id: 'speaker_phone',
      },
      {
        name: 'Spellcheck',
        id: 'spellcheck',
      },
      {
        name: 'Star',
        id: 'star',
      },
      {
        name: 'Star Border',
        id: 'star_border',
      },
      {
        name: 'Star Half',
        id: 'star_half',
      },
      {
        name: 'Stars',
        id: 'stars',
      },
      {
        name: 'Stay Current Landscape',
        id: 'stay_current_landscape',
      },
      {
        name: 'Stay Current Portrait',
        id: 'stay_current_portrait',
      },
      {
        name: 'Stay Primary Landscape',
        id: 'stay_primary_landscape',
      },
      {
        name: 'Stay Primary Portrait',
        id: 'stay_primary_portrait',
      },
      {
        name: 'Stop',
        id: 'stop',
      },
      {
        name: 'Stop Screen Share',
        id: 'stop_screen_share',
      },
      {
        name: 'Storage',
        id: 'storage',
      },
      {
        name: 'Store',
        id: 'store',
      },
      {
        name: 'Store Mall Directory',
        id: 'store_mall_directory',
      },
      {
        name: 'Straighten',
        id: 'straighten',
      },
      {
        name: 'Streetview',
        id: 'streetview',
      },
      {
        name: 'Strikethrough S',
        id: 'strikethrough_s',
      },
      {
        name: 'Style',
        id: 'style',
      },
      {
        name: 'Subdirectory Arrow Left',
        id: 'subdirectory_arrow_left',
      },
      {
        name: 'Subdirectory Arrow Right',
        id: 'subdirectory_arrow_right',
      },
      {
        name: 'Subject',
        id: 'subject',
      },
      {
        name: 'Subscriptions',
        id: 'subscriptions',
      },
      {
        name: 'Subtitles',
        id: 'subtitles',
      },
      {
        name: 'Subway',
        id: 'subway',
      },
      {
        name: 'Supervisor Account',
        id: 'supervisor_account',
      },
      {
        name: 'Surround Sound',
        id: 'surround_sound',
      },
      {
        name: 'Swap Calls',
        id: 'swap_calls',
      },
      {
        name: 'Swap Horizontal',
        id: 'swap_horiz',
      },
      {
        name: 'Swap Vertical',
        id: 'swap_vert',
      },
      {
        name: 'Swap Vertical Circle',
        id: 'swap_vertical_circle',
      },
      {
        name: 'Switch Camera',
        id: 'switch_camera',
      },
      {
        name: 'Switch Video',
        id: 'switch_video',
      },
      {
        name: 'Sync',
        id: 'sync',
      },
      {
        name: 'Sync Disabled',
        id: 'sync_disabled',
      },
      {
        name: 'Sync Problem',
        id: 'sync_problem',
      },
      {
        name: 'System Update',
        id: 'system_update',
      },
      {
        name: 'System Update Alternative',
        id: 'system_update_alt',
      },
      {
        name: 'Tab',
        id: 'tab',
      },
      {
        name: 'Tab Unselected',
        id: 'tab_unselected',
      },
      {
        name: 'Tablet',
        id: 'tablet',
      },
      {
        name: 'Tablet Android',
        id: 'tablet_android',
      },
      {
        name: 'Tablet Mac',
        id: 'tablet_mac',
      },
      {
        name: 'Tag Faces',
        id: 'tag_faces',
      },
      {
        name: 'Tap And Play',
        id: 'tap_and_play',
      },
      {
        name: 'Terrain',
        id: 'terrain',
      },
      {
        name: 'Text Fields',
        id: 'text_fields',
      },
      {
        name: 'Text Format',
        id: 'text_format',
      },
      {
        name: 'Text SMS',
        id: 'textsms',
      },
      {
        name: 'Texture',
        id: 'texture',
      },
      {
        name: 'Theaters',
        id: 'theaters',
      },
      {
        name: 'Thumb Down',
        id: 'thumb_down',
      },
      {
        name: 'Thumb Up',
        id: 'thumb_up',
      },
      {
        name: 'Thumbs Up Down',
        id: 'thumbs_up_down',
      },
      {
        name: 'Time to Leave',
        id: 'time_to_leave',
      },
      {
        name: 'Timelapse',
        id: 'timelapse',
      },
      {
        name: 'Timeline',
        id: 'timeline',
      },
      {
        name: 'Timer',
        id: 'timer',
      },
      {
        name: 'Timer 10',
        id: 'timer_10',
      },
      {
        name: 'Timer 3',
        id: 'timer_3',
      },
      {
        name: 'Timer Off',
        id: 'timer_off',
      },
      {
        name: 'Title',
        id: 'title',
      },
      {
        name: 'Toc',
        id: 'toc',
      },
      {
        name: 'Today',
        id: 'today',
      },
      {
        name: 'Toll',
        id: 'toll',
      },
      {
        name: 'Tonality',
        id: 'tonality',
      },
      {
        name: 'Touch App',
        id: 'touch_app',
      },
      {
        name: 'Toys',
        id: 'toys',
      },
      {
        name: 'Track Changes',
        id: 'track_changes',
      },
      {
        name: 'Traffic',
        id: 'traffic',
      },
      {
        name: 'Train',
        id: 'train',
      },
      {
        name: 'Tram',
        id: 'tram',
      },
      {
        name: 'Transfer within a Station',
        id: 'transfer_within_a_station',
      },
      {
        name: 'Transform',
        id: 'transform',
      },
      {
        name: 'Translate',
        id: 'translate',
      },
      {
        name: 'Trending Down',
        id: 'trending_down',
      },
      {
        name: 'Trending Flat',
        id: 'trending_flat',
      },
      {
        name: 'Trending Up',
        id: 'trending_up',
      },
      {
        name: 'Tune',
        id: 'tune',
      },
      {
        name: 'Turned In',
        id: 'turned_in',
      },
      {
        name: 'Turned In Not',
        id: 'turned_in_not',
      },
      {
        name: 'TV',
        id: 'tv',
      },
      {
        name: 'Unarchive',
        id: 'unarchive',
      },
      {
        name: 'Undo',
        id: 'undo',
      },
      {
        name: 'Unfold Less',
        id: 'unfold_less',
      },
      {
        name: 'Unfold More',
        id: 'unfold_more',
      },
      {
        name: 'Update',
        id: 'update',
      },
      {
        name: 'USB',
        id: 'usb',
      },
      {
        name: 'Verified User',
        id: 'verified_user',
      },
      {
        name: 'Vertical Align Bottom',
        id: 'vertical_align_bottom',
      },
      {
        name: 'Vertical Align Center',
        id: 'vertical_align_center',
      },
      {
        name: 'Vertical Align Top',
        id: 'vertical_align_top',
      },
      {
        name: 'Vibration',
        id: 'vibration',
      },
      {
        name: 'Video Call',
        id: 'video_call',
      },
      {
        name: 'Video Label',
        id: 'video_label',
      },
      {
        name: 'Video Library',
        id: 'video_library',
      },
      {
        name: 'Videocam',
        id: 'videocam',
      },
      {
        name: 'Videocam Off',
        id: 'videocam_off',
      },
      {
        name: 'Videogame Asset',
        id: 'videogame_asset',
      },
      {
        name: 'View Agenda',
        id: 'view_agenda',
      },
      {
        name: 'View Array',
        id: 'view_array',
      },
      {
        name: 'View Carousel',
        id: 'view_carousel',
      },
      {
        name: 'View Column',
        id: 'view_column',
      },
      {
        name: 'View Comfy',
        id: 'view_comfy',
      },
      {
        name: 'View Compact',
        id: 'view_compact',
      },
      {
        name: 'View Day',
        id: 'view_day',
      },
      {
        name: 'View Headline',
        id: 'view_headline',
      },
      {
        name: 'View List',
        id: 'view_list',
      },
      {
        name: 'View Module',
        id: 'view_module',
      },
      {
        name: 'View Quilt',
        id: 'view_quilt',
      },
      {
        name: 'View Stream',
        id: 'view_stream',
      },
      {
        name: 'View Week',
        id: 'view_week',
      },
      {
        name: 'Vignette',
        id: 'vignette',
      },
      {
        name: 'Visibility',
        id: 'visibility',
      },
      {
        name: 'Visibility Off',
        id: 'visibility_off',
      },
      {
        name: 'Voice Chat',
        id: 'voice_chat',
      },
      {
        name: 'Voicemail',
        id: 'voicemail',
      },
      {
        name: 'Volume Down',
        id: 'volume_down',
      },
      {
        name: 'Volume Mute',
        id: 'volume_mute',
      },
      {
        name: 'Volume Off',
        id: 'volume_off',
      },
      {
        name: 'Volume Up',
        id: 'volume_up',
      },
      {
        name: 'VPN Key',
        id: 'vpn_key',
      },
      {
        name: 'VPN Lock',
        id: 'vpn_lock',
      },
      {
        name: 'Wallpaper',
        id: 'wallpaper',
      },
      {
        name: 'Warning',
        id: 'warning',
      },
      {
        name: 'Watch',
        id: 'watch',
      },
      {
        name: 'Watch Later',
        id: 'watch_later',
      },
      {
        name: 'WB Auto',
        id: 'wb_auto',
      },
      {
        name: 'WB Cloudy',
        id: 'wb_cloudy',
      },
      {
        name: 'WB Incandescent',
        id: 'wb_incandescent',
      },
      {
        name: 'WB Iridescent',
        id: 'wb_iridescent',
      },
      {
        name: 'WB Sunny',
        id: 'wb_sunny',
      },
      {
        name: 'WC',
        id: 'wc',
      },
      {
        name: 'Web',
        id: 'web',
      },
      {
        name: 'Web Asset',
        id: 'web_asset',
      },
      {
        name: 'Weekend',
        id: 'weekend',
      },
      {
        name: 'What\'s Hot',
        id: 'whatshot',
      },
      {
        name: 'Widgets',
        id: 'widgets',
      },
      {
        name: 'Wifi',
        id: 'wifi',
      },
      {
        name: 'Wifi Lock',
        id: 'wifi_lock',
      },
      {
        name: 'Wifi Tethering',
        id: 'wifi_tethering',
      },
      {
        name: 'Work',
        id: 'work',
      },
      {
        name: 'Wrap Text',
        id: 'wrap_text',
      },
      {
        name: 'Youtube Searched For',
        id: 'youtube_searched_for',
      },
      {
        name: 'Zoom In',
        id: 'zoom_in',
      },
      {
        name: 'Zoom Out',
        id: 'zoom_out',
      },
      {
        name: 'Zoom Out Map',
        id: 'zoom_out_map',
      },
    ];
  }

}
