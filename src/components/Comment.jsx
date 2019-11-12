import React, { useState } from 'react';
import moment from 'moment';

import 'styles/_components/comment.scss';

const Comment = ({ children, item }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="comment">
      <div className="comment__header">
        <div className="comment__header-image">
          <img src={item.user.img} />
        </div>
        <div className="comment__header-info">
          <span className="_bold">{item.user.name}</span>
          <span className="comment__header-info__date">{moment(item.date).format('DD MMM YYYY')}</span>
        </div>
      </div>
      <div className="comment__body">{item.text}</div>
      <div className="comment__body-tray">
        <div className="comment__body-tray-reply">Ответить</div>
        {/*<div className="comment__body-tray-report">Пожаловаться!</div>*/}
      </div>
      {children && (
        <div className="comment__nested">
          {collapsed ? (
            <div className="comment__nested-expand" onClick={() => setCollapsed(false)}>
              Развернуть ветку
            </div>
          ) : (
            <>
              <div className="comment__nested-content">{children}</div>
              <div className="comment__nested-collapse" onClick={() => setCollapsed(true)} />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
