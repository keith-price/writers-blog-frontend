<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/vue/20/solid";

const categories = [
  {
    name: "Short Story",
    href: "short-stories",
    icon: BookOpenIcon,
  },
  {
    name: "Poetry",
    description: "Writers' Group poetry",
    href: "poetry",
    icon: BookOpenIcon,
  },
  {
    name: "Flash Fiction",
    description: "Writers' Group Flash Fiction",
    href: "flash-fiction",
    icon: BookOpenIcon,
  },
  {
    name: "Memoir/Non-Fiction",
    description: "Writers' Group memoirs and non-fiction",
    href: "memoir-non-fiction",
    icon: BookOpenIcon,
  },
  {
    name: "Novel Extracts",
    description: "Writers' Group novel extracts",
    href: "novel-extracts",
    icon: BookOpenIcon,
  },
  {
    name: "Diary",
    description: "Writers' Group Diaries",
    href: "diary",
    icon: BookOpenIcon,
  },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="bg-white shadow sticky top-0 z-50">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-4 py-8 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Writers' Group</span>
          <img class="h-5 w-auto" src="@/assets/writers-group-2.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <a href="/" class="text-sm font-semibold leading-6 text-slate-900"
          >Home</a
        >
        <a
          href="/all-posts"
          class="text-sm font-semibold leading-6 text-slate-900"
          >All Posts</a
        >
        <a
          href="https://writers-group.sanity.studio/desk"
          target="_blank"
          class="text-sm font-semibold leading-6 text-slate-900"
          >Add Content</a
        >
        <Popover class="relative">
          <PopoverButton
            class="flex items-center text-sm font-semibold leading-6 text-slate-900"
          >
            Categories
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-slate-400"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in categories"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50"
                >
                  <div
                    class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white"
                  >
                    <component
                      :is="item.icon"
                      class="h-6 w-6 text-slate-600 group-hover:text-indigo-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="flex-auto">
                    <a
                      :href="item.href"
                      class="block font-semibold text-slate-900"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-slate-900"
          >Log in <span aria-hidden="true">&rarr;</span></a
        >
      </div> -->
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 mt-10 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Writers' Group</span>
            <img class="h-5 w-auto" src="@/assets/writers-group-2.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-slate-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-slate-500/10">
            <div class="space-y-2 py-6">
              <a
                href="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >Home</a
              >
              <a
                href="/all-posts"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >All Posts</a
              >
              <a
                href="https://writers-group.sanity.studio/desk"
                target="_blank"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >Add Content</a
              >
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-slate-50 text-slate-900"
                >
                  Categories
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...categories]"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
            </div>
            <!-- <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                >Log in</a
              >
            </div> -->
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
