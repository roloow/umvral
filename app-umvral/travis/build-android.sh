#!/bin/bash -v

set -e

# Build Ionic App for Android
patch -p0 < build-fix.patch
cordova platform add android --nofetch

if [[ "$TRAVIS_BRANCH" == "develop" ]]
then
    ionic cordova build android
else
    ionic cordova build android --prod --release
fi