import { ShapeDef } from '@graph-ts/graph-svg/dist/components/types';
import { Vector2 } from '@graph-ts/vector2';
import React, { CSSProperties } from 'react';
import Layout from '@theme/Layout';
import { GraphSVGDiv } from '@graph-ts/graph-svg';
import { newGraph } from '@graph-ts/graph-lib';
import useThemeContext from '@theme/hooks/useThemeContext';

function Hello () {

    const { isDarkTheme } = useThemeContext();
    console.log(isDarkTheme);

    const g = newGraph<Vector2, {}>([
        { id: 'a', x: -100, y: 0},
        { id: 'b', x: 100, y: 0}
    ], [
        { id: 'ab', source: 'a', target: 'b'}
    ]);

    const defaultShape: ShapeDef = {
        shape: 'circle',
        radius: 7
    };

    const defaultStyle: CSSProperties = {
        stroke: 'none',
        fill: '#333'
    }

    return <Layout>
        <div style={{width: '300px', height: '300px'}}>
            <GraphSVGDiv
                graph={g}
                defaultShape={defaultShape}
                defaultNodeStyle={defaultStyle}
            />
        </div>
    </Layout>
}

export default Hello;