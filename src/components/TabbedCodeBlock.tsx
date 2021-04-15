import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import React, { FC } from 'react';

interface TabbedCodeBlockProps {
    ts: string
    js: string
}

const TabbedCodeBlock: FC<TabbedCodeBlockProps> = props => {
    const children = React.Children.toArray(props.children);
    const ts = children[0];
    const js = children[1];
    return <Tabs
        defaultValue={'ts'}
        values={[
            { label: 'TypeScript', value: 'ts'},
            { label: 'JavaScript', value: 'js'}
        ]}>
        <TabItem value={'ts'}>{ ts }</TabItem>
        <TabItem value={'js'}>{ js }</TabItem>
    </Tabs>
};

export { TabbedCodeBlock };