

<script setup lang="ts">
import Character from '@/classes/Character';
import Teenager from '@/classes/characters/Teenager';
import { ref } from '@vue/reactivity';
const characters = ref([]);
characters.value.push(new Teenager());

let _intervalId = ref(null);

let tick = ref(0);
</script>

<script lang="ts">
    export default {
        mounted() {
            this._intervalId = setInterval(() => {
                this.tick += 1;

                this.characters.forEach((c) => {
                    c.doSomething(1);
                });

                console.log(`%c---== %cstep %c${this.tick} %c==---`, 'color: teal', 'color: yellow', 'filter: invert(1)', 'color: teal');
            }, 1000);
            console.log(this._intervalId)
        },
        unmounted() {
            clearInterval(this._intervalId);
        },
    }
</script>


<template>
<div style="border: dotted 1px orange; display: inline-block;"><code>Tick #{{tick}}</code></div>
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Motivation</th>
            <th>Needs</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="c in characters">
            <td>{{c.name}}</td>
            <td>{{c._type}}</td>
            <td>{{c.currentMotivation || '[no motivation]'}}</td>
            <td>
                <table>
                    <tbody>
                        <tr v-for="n in c.needs">
                            <td>{{n.name}}:</td>
                            <td>
                                <meter
                                    :min="n.minimum"
                                    :max="n.maximum"
                                    :value="n.value"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</template>