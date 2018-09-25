#!/bin/bash -v

set -e
mkdir -p output

if [[ "$TRAVIS_BRANCH" != "master" ]]
then
  cp platforms/android/app/build/outputs/apk/arm64/debug/app-arm64-debug.apk output/umvral-arm64-debug.apk
  cp platforms/android/app/build/outputs/apk/armeabi/debug/app-armeabi-debug.apk output/umvral-armeabi-debug.apk
  cp platforms/android/app/build/outputs/apk/armv7/debug/app-armv7-debug.apk output/umvral-armv7-debug.apk
  cp platforms/android/app/build/outputs/apk/x86/debug/app-x86-debug.apk output/umvral-x86-debug.apk
  cp platforms/android/app/build/outputs/apk/x86_64/debug/app-x86_64-debug.apk output/umvral-x86_64-debug.apk
else
  cp platforms/android/app/build/outputs/apk/arm64/release/app-arm64-release-unsigned.apk output/umvral-arm64-release-unsigned.apk
  cp platforms/android/app/build/outputs/apk/armeabi/release/app-armeabi-release-unsigned.apk output/umvral-armeabi-release-unsigned.apk
  cp platforms/android/app/build/outputs/apk/armv7/release/app-armv7-release-unsigned.apk output/umvral-armv7-release-unsigned.apk
  cp platforms/android/app/build/outputs/apk/x86/release/app-x86-release-unsigned.apk output/umvral-x86-release-unsigned.apk
  cp platforms/android/app/build/outputs/apk/x86_64/release/app-x86_64-release-unsigned.apk output/umvral-x86_64-release-unsigned.apk
fi
