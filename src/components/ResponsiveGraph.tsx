import React, { CSSProperties, FC } from 'react';
import { GraphGroupProps, GraphSVGDiv } from '@graph-ts/graph-svg';
import useThemeContext from '@theme/hooks/useThemeContext';

type Dict<T> = { [key: string]: T }

interface Styles {
    defaultEdgeStyle?: CSSProperties
    defaultEdgeStyleHovered?: CSSProperties
    defaultEdgeStyleSelected?: CSSProperties
    defaultNodeStyle?: CSSProperties
    defaultNodeStyleHovered?: CSSProperties
    defaultNodeStyleSelected?: CSSProperties
    edgeStyles?: Dict<CSSProperties>
    edgeStylesHovered?: Dict<CSSProperties>
    edgeStylesSelected?: Dict<CSSProperties>
    nodeStyles?: Dict<CSSProperties>
    nodeStylesHovered?: Dict<CSSProperties>
    nodeStylesSelected?: Dict<CSSProperties>
}

export interface ResponsiveStyles {
    darkStyles: Styles
    lightStyles: Styles
}

export type ResponsiveGraphProps = GraphGroupProps & ResponsiveStyles;

const ResponsiveGraph: FC<ResponsiveGraphProps> = props => {

    const { isDarkTheme } = useThemeContext();

    const { darkStyles, lightStyles, ...rest} = props;
    const styles = isDarkTheme ? darkStyles : lightStyles;

    return <GraphSVGDiv
        {...styles}
        {...rest}
    />;

};

export { ResponsiveGraph };