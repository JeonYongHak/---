import Icon from '@/types/iconsax';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import React from 'react';

type Props = {};

export default function FaqPage({}: Props) {
  const faqs = [
    {
      question: '접수 된 민원을 수정 또는 삭제할 수 있나요?',
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:py-2 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <Icon.ArrowUp2 aria-hidden="true" className="h-6 w-6 group-data-[open]:hidden" />
                      <Icon.ArrowDown2 aria-hidden="true" className="h-6 w-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
