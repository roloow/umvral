#!/bin/bash -v
set -e
# Build Ionic App for Android
ionic cordova platform add android --nofetch
patch -p0 < build-fix.patch
if [[ "$TRAVIS_BRANCH" != "master" ]]
then
    ionic cordova build android
else
    ionic cordova build android --prod --release
fi
