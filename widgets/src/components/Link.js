import React from 'react';

const Link = ({ className, href, children }) => {
    
    const onClick = (event) => {

        if (event.metaKey || event.ctrlKey) {
          return;
        }

        event.preventDefault();

        // args are:- data: any, title: string, url?: string
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    
    return (
        <a onClick={onClick} className={className} href={href}>
          {children}
        </a>
    );
}

export default Link;
