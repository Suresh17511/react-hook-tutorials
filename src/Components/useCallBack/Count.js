import React from 'react';

function Count({text, count}) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      <h4>
        {text} -{count}
      </h4>
    </div>
  );
}

export default React.memo(Count);
