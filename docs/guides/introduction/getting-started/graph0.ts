import { newGraph, Node, Edge, Graph } from '@graph-ts/graph-lib';
import { ShapeDef, Vector2 } from '@graph-ts/graph-svg';
import { ResponsiveStyles } from '../../../../src/components/ResponsiveGraph';

// Create an array of graph nodes with x- and y-coordinates
const nodes: Node<Vector2>[] = [
    { id: 'a', x: -100, y:  0  },
    { id: 'b', x:  0,   y: -60 },
    { id: 'c', x:  0,   y:  60 },
    { id: 'd', x:  100, y: -60 },
    { id: 'e', x:  100, y:  60 }
];

// Create an array of graph edges
const edges: Edge[] = [
    { id: 'ab', source: 'a', target: 'b' },
    { id: 'ac', source: 'a', target: 'c' },
    { id: 'bd', source: 'b', target: 'd' },
    { id: 'be', source: 'b', target: 'e' },
    { id: 'ce', source: 'c', target: 'e' }
];

// Create the graph
const graph0: Graph<Vector2> = newGraph(nodes, edges);

// Create responsive styles for the graph
const styles0: ResponsiveStyles = {
    darkStyles: {
        defaultNodeStyle: {
            stroke: '#f5f6f7',
            fill: 'none'
        },
        defaultEdgeStyle: {
            stroke: '#f5f6f7'
        }
    },
    lightStyles: {
        defaultNodeStyle: {
            stroke: '#1c1e21',
            fill: 'none'
        },
        defaultEdgeStyle: {
            stroke: '#1c1e21'
        }
    }
}

// Create default shape
const shape0: ShapeDef = {
    shape: 'circle',
    radius: 15
};

export { graph0, styles0, shape0 };