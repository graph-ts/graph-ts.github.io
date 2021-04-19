import { newGraph } from '@graph-ts/graph-lib';
import { Vector2 } from '@graph-ts/vector2';

const basicGraph = newGraph<Vector2, {}>([
    { id: 'A', x: 100 * Math.cos(2 * Math.PI / 3), y: 100 * Math.sin(2 * Math.PI / 3) },
    { id: 'B', x: 100 * Math.cos(4 * Math.PI / 3), y: 100 * Math.sin(4 * Math.PI / 3) },
    { id: 'C', x: 100 * Math.cos(6 * Math.PI / 3), y: 100 * Math.sin(6 * Math.PI / 3) }
], [
    { id: 'AB', source: 'A', target: 'B' },
    { id: 'BC', source: 'B', target: 'C' },
    { id: 'CA', source: 'C', target: 'A' }
]);

export { basicGraph };