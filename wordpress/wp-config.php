<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'pyaterochka' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'admin' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '123' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^UB0Xz5zEI<_*na~~8 qE#kHr8.~Fc -@.t*Hc-)18O0X:}zA4d9y/nA_24YMI(x' );
define( 'SECURE_AUTH_KEY',  'YyuYe!@[lPXM7zHLmT7TW7V2aV@iKUIy:%KS}gDxKjz-ThC8fdF{=TS$ >(%P,vb' );
define( 'LOGGED_IN_KEY',    'WYN8`84yO.6jwURR]JvZ0$nZQk1[GcXM`g]SbMfw6%{K(wSCHfKuq:QiXIOM=6eL' );
define( 'NONCE_KEY',        'v-f!Td5ung!N`k$@&%B:;YYX}K;]hBy!~L8kE[Xjt4P.P/YrV`VCH/4!z[Dn~w!f' );
define( 'AUTH_SALT',        'hSm<2iAf01P&V#^pjn$WWC-Ya>Wo01qn~L&}>uLvwFOQfOTe1Q7vw~%s&yV8Jn6F' );
define( 'SECURE_AUTH_SALT', 'DS9ZwF2}[xD:dg|kus]e@V~MO75ZxRkjEDfKTlA<Y@<f(]gJ2)m{*W~,}0i(`}tg' );
define( 'LOGGED_IN_SALT',   '>xdyVDM+iLT(-0h@K%h4K?qJh<jj/m=tD4Apu!Q!y?GkD6U)!>odOmlLm+F(TaZA' );
define( 'NONCE_SALT',       'Dq$pc,P%68q%n%X]1K-9Y1WoCF}mJcT.EczqPIcCZ3f/[*J%}Q~g$ 2nUstDZCQX' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
