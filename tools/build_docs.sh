
thisreldir=$(dirname $0)
thisdir=$(realpath $thisreldir)
docsloc="$thisdir/../docs"
buildloc="$thisdir/../out/doc_build"
rm -r $buildloc

if [[ $1 = "--clean" ]]; then 
    exit 0
fi
echo $docsloc
echo $buildloc

mkdir -p $buildloc
cp -r $docsloc $buildloc/docs
cp -r $thisdir/../README.md $buildloc

java -jar ../tools/plantuml-1.2025.2.jar -tsvg $buildloc/**/*.md
