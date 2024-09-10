import React, { PropsWithChildren } from 'react';
import { Flex, FlexItem, Label } from '@patternfly/react-core';
import FileDetails from '../FileDetails';
import { Spinner } from '@patternfly/react-core';

interface FileDetailsLabelProps {
  /** Name of file, including extension */
  fileName: string;
  /** Whether to display loading icon */
  isLoading?: boolean;
  /** Callback function for when label is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** Callback function for when close button is clicked */
  onClose?: (event: React.MouseEvent) => void;
}

export const FileDetailsLabel = ({
  fileName,
  isLoading,
  onClick = undefined,
  onClose = undefined
}: PropsWithChildren<FileDetailsLabelProps>) => (
  <Label className="pf-chatbot__file-label" onClose={onClose} onClick={onClick} textMaxWidth="370px">
    <Flex
      justifyContent={{ default: 'justifyContentCenter' }}
      alignItems={{ default: 'alignItemsCenter' }}
      gap={{ default: 'gapLg' }}
    >
      <FlexItem>
        <FileDetails fileName={fileName} />
      </FlexItem>
      {isLoading && (
        <FlexItem>
          <Spinner size="sm" />
        </FlexItem>
      )}
    </Flex>
  </Label>
);

export default FileDetailsLabel;