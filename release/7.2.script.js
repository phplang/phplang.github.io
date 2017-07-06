var releases = [{
        "type": "alpha",
        "name": "7.2.0-alpha1",
        "releaseDate": "2017-06-08 06:21:03 -0500",
        "announce": "http://news.php.net/php.internals/99452",
        "gitTag": "https://github.com/php/php-src/tree/php-7.2.0alpha1",
        "download": "https://downloads.php.net/~pollita/",
        "winBinary": "http://windows.php.net/qa/",
    },
    {
        "type": "alpha",
        "name": "7.2.0-alpha2",
        "releaseDate": "2017-06-22 05:17:15 -0500",
        "announce": "http://news.php.net/php.internals/99610",
        "gitTag": "https://github.com/php/php-src/tree/php-7.2.0alpha2",
        "download": "https://downloads.php.net/~pollita/",
        "winBinary": "http://windows.php.net/qa/",
    },
    {
        "type": "alpha",
        "name": "7.2.0-alpha3",
        "releaseDate": "2017-07-06 05:15:19 -0500",
        "announce": "http://news.php.net/php.internals/99794",
        "gitTag": "https://github.com/php/php-src/tree/php-7.2.0alpha3",
        "download": "https://downloads.php.net/~remi/",
        "winBinary": "http://windows.php.net/qa/",
    },
    {
        "type": "beta",
        "name": "7.2.0-beta1",
        "releaseDate": "2017-07-20 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "beta",
        "name": "7.2.0-beta2",
        "releaseDate": "2017-08-03 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "beta",
        "name": "7.2.0-beta3",
        "releaseDate": "2017-08-17 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc1",
        "releaseDate": "2017-08-31 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc2",
        "releaseDate": "2017-09-14 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc3",
        "releaseDate": "2017-09-28 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc4",
        "releaseDate": "2017-10-12 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc5",
        "releaseDate": "2017-10-26 12:00 -0400",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "rc",
        "name": "7.2.0-rc6",
        "releaseDate": "2017-11-09 12:00 -0500",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
    {
        "type": "final",
        "name": "7.2.0-final",
        "releaseDate": "2017-11-30 12:00 -0500",
        "announce": "",
        "gitTag": "",
        "download": "",
        "winBinary": "",
    },
];

(function () {
    releases.forEach(function (element) {
        var formattedDate = new Date(element.releaseDate);
        $('.' + element.type + '.release').append(
            $('<dt>').append(element.name)
        ).append(
            $('<dd>').attr('class', 'releaseDate').append(formattedDate)
            ).append((element.announce) ? $('<dd>').attr('class', 'announce').append('<a href="' + element.announce + '">' + element.announce + '</a>') : ''
            ).append((element.gitTag) ? $('<dd>').attr('class', 'gitTag').append('<a href="' + element.gitTag + '">' + element.gitTag + '</a>') : ''
            ).append((element.download) ? $('<dd>').attr('class', 'download').append('<a href="' + element.download + '">' + element.download + '</a>') : ''
            ).append((element.winBinary) ? $('<dd>').attr('class', 'winBinary').append('<a href="' + element.winBinary + '">' + element.winBinary + '</a>') : ''
        );
    });
})();

