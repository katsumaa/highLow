source .env
cd ios && pod install
xcodebuild   \
  -workspace "highlow.xcworkspace"  \
  -scheme "highlow"  \
   archive  \
    -archivePath ".target/highlow.xcarchive"

xcodebuild  \
  -exportArchive  \
  -archivePath ".target/highlow.xcarchive"  \
  -exportPath "../archive"  \
  -exportOptionsPlist "build/firstBuildPlist"

curl \
  -F "token=${DEPLOY_GATE_API_KEY}" \
  -F "file=@./build/{アーカイブしたipaファイル先}" \
  -F "message=deploymentAPK_$(date)" \
  https://deploygate.com/api/users/_your_name_/apps
