all:
	#dot -Tpng -o output/cs_bs.png cs_bs.dot
	find . -type f -name "*.dot" -exec sh -c 'dot -Tpng "{}" -o "output/$(basename {} .dot).png"' \;
	#for n in *.dot; do dot -Tpng ${n} -o "output/{n%.dot}.png"; done
