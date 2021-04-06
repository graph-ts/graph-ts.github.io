import { newGraph } from '@graph-ts/graph-lib';
import { ShapeDef } from '@graph-ts/graph-svg/dist/components/types';
import { GraphGroupProps } from '@graph-ts/graph-svg/dist/GraphGroupProps';
import { GraphSVGDiv } from '@graph-ts/graph-svg';
import { Vector2 } from '@graph-ts/vector2';
import React, { CSSProperties, FC } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const StyledGraph: FC = props => {
    const { isDarkTheme } = useThemeContext();

    console.log(isDarkTheme);

    const g = newGraph<Vector2, {}>([
        { id: 'a', x: -100, y: 0},
        { id: 'b', x: 100, y: 0}
    ], [
        { id: 'ab', source: 'a', target: 'b'}
    ]);

    const darkNodeStyle: CSSProperties = {
        stroke: 'none',
        fill: 'white'
    }

    const lightNodeStyle: CSSProperties = {
        stroke: 'none',
        fill: '#333'
    };

    const darkEdgeStyle: CSSProperties = {
        stroke: 'white',
        fill: 'none'
    };

    const lightEdgeStyle: CSSProperties = {
        stroke: '#333',
        fill: 'none'
    }

    const defaultShape: ShapeDef = {
        shape: 'circle',
        radius: 7
    };

    return <div style={{ width: '600px', height: '400px' }}>
        <GraphSVGDiv
            defaultNodeStyle={isDarkTheme ? darkNodeStyle : lightNodeStyle}
            defaultEdgeStyle={isDarkTheme ? darkEdgeStyle : lightEdgeStyle}
            defaultShape={defaultShape}
            graph={g}/>
    </div>
};

export default StyledGraph;