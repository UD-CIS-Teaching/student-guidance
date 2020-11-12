all:
	#dot -Tpng -o output/cs_bs.png cs_bs.dot
	#find . -type f -name "*.dot" -exec dot -Tpng "{}.dot" -o "output/{}.png" \;
	for f in *.dot; do dot -Tpng ${f} -o "output/{f%%.dot}.png"; done
