import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Text } from '../../../ui-components';
import { ChevronDownIcon } from 'lucide-react-native';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTrigger,
  AccordionIcon,
} from '../../../ui-components';
import { AccordionProvider } from '../../../../../../packages/accordion/src/Context';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: any) => {
  return (
    <AccordionProvider>
      <Accordion defaultValue={'a'} type="multiple" isCollapsible={false}>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              <Text>This is a trigger</Text>
              <AccordionIcon as={ChevronDownIcon} pl="$5" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <Text> Content</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="a" isDisabled={true}>
          <AccordionHeader>
            <AccordionTrigger>
              <Text>This is a trigger</Text>
              <AccordionIcon as={ChevronDownIcon} pl="$5" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <Text> Content</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              <Text>This is a trigger</Text>
              <AccordionIcon as={ChevronDownIcon} pl="$5" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <Text> Content</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              <Text>This is a trigger</Text>
              <AccordionIcon as={ChevronDownIcon} pl="$5" />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <Text> Content</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionProvider>
  );
};

export default AccordionStory;
