echo "Deployment starting..."

echo "pull from main"
git pull origin main || exit

echo "install dependencies"
yarn || exit

if [ ! -d "temp" ]; then
  mkdir temp
  if [ ! -d "temp" ]; then
    echo '\033[31m temp directory does not exist!\033[0m'
    exit 1;
  fi
fi

echo "set build folder to temp and build"
BUILD_DIR=temp yarn build || exit

echo "stop front-master pm2"
pm2 stop front-master
pm2 del front-master

echo "delete .next folder"
find .next -type f -exec rm -f {} + || exit
sudo rm -rf .next || exit

echo "rename temp folder to .next"
sudo mv temp .next || exit

echo "run frontMaster"
yarn frontMaster || exit

echo "run cron"
yarn cron || exit

echo "Deployment done."