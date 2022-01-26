#!/bin/bash

if [ ! $1 ]; then
	echo "Need arg1 := 'Foo'"
	exit 0
fi

name=$1
slug=$(echo $name | tr "[:upper:]" "[:lower:]")

touch "$name.js"

cat <<EOT >> "$name.js"

import Need from '@/classes/Need';


class $name extends Need {
	constructor() {
		super({
			name: '$slug',
			value: 0,
			minimum: 0,
			maximum: 10,
			delta: 1,
			deltaSign: 1,
		});
	}

	update(dt) {
		this.increment(1);
	}
}
EOT
