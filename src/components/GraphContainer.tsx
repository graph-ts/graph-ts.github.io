import React, { CSSProperties, FC } from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

interface GraphContainerProps {
    width?: number
    height: number
}

const darkBorder = '#333';
const lightBorder = '#ccc';

const GraphContainer: FC<GraphContainerProps> = props => {

    const { isDarkTheme } = useThemeContext();

    const style: CSSProperties = {
        width: props.width ? `${props.width}px` : '100%',
        height: `${props.height}px`,
        border: `1px solid ${isDarkTheme ? darkBorder : lightBorder}`
    };

    return <div style={style}>
        { props.children }
    </div>
};

export { GraphContainer };