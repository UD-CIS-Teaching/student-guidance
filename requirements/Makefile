all:
	#dot -Tpng -o output/cs_bs.png cs_bs.dot
	find . -type f -name "*.dot" -execdir dot -Tpng "{}.dot" -o "output/{}.png" \;
	#for n in *.dot; do dot -Tpng ${n} -o "output/{n%.dot}.png"; done
