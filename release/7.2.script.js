var releases = [
    { "type": "alpha", "name": "7.2.0-alpha1", "releaseDate": "2017-06-08 12:00 -0400", "gitRef": "", "tarball": ""  },
    { "type": "alpha", "name": "7.2.0-alpha2", "releaseDate": "2017-06-22 12:00 -0400", "gitRef": "", "tarball": ""  },
    { "type": "alpha", "name": "7.2.0-alpha3", "releaseDate": "2017-07-06 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "beta", "name": "7.2.0-beta1", "releaseDate": "2017-07-20 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "beta", "name": "7.2.0-beta2", "releaseDate": "2017-08-03 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "beta", "name": "7.2.0-beta3", "releaseDate": "2017-08-17 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc1", "releaseDate": "2017-08-31 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc2", "releaseDate": "2017-09-14 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc3", "releaseDate": "2017-09-28 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc4", "releaseDate": "2017-10-12 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc5", "releaseDate": "2017-10-26 12:00 -0400", "gitRef": "", "tarball": "" },
    { "type": "rc", "name": "7.2.0-rc6", "releaseDate": "2017-11-09 12:00 -0500", "gitRef": "", "tarball": "" },
    { "type": "final", "name": "7.2.0-final", "releaseDate": "2017-11-30 12:00 -0500", "gitRef": "", "tarball": "" },
];

(function () {
    releases.forEach(function (element) {
        var formattedDate = new Date(element.releaseDate);
        $('.' + element.type + '.release').append(
            $('<dt>').append(element.name)
        ).append(
            $('<dd>').attr('class', 'releaseDate').append(formattedDate)
            ).append((element.gitRef) ? $('<dd>').attr('class', 'gitref').append(element.gitRef) : ''
            ).append((element.tarball) ? $('<dd>').attr('class', 'tarball').append(element.tarball) : ''
        );
    });
})();

