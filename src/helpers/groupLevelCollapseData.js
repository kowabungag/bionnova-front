export const groupLevelCollapseData = (program,t) => {

    const items = [
        {
            key: '1',
            label: `1. Beginner (${t('collapse.beginner')})`,
            children: program.beginner
        },
        {
            key: '2',
            label: `2. Elementary (${t('collapse.elementary')})`,
            children: program.elementary
        },
        {
            key: '3',
            label: `3. Intermediate (${t('collapse.intermediate')})`,
            children: program.intermediate
        },
        {
            key: '4',
            label: `4. Advanced (${t('collapse.advanced')})`,
            children: program.advanced
        },
        {
            key: '5',
            label: `5. Extra (${t('collapse.extra')})`,
            children: program.extra
        },

    ];

    return items
}