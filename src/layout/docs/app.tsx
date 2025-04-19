// import { Calendar } from "@/components/Calendar/Calendar"; //Calendar me variants defined nhi hai
// import { Calendar } from "@/components/Calendar2/Calendar"; // Calendar2 me 3variants defined hai
// import { Calendar } from "@/components/Calendar3/Calendar"; // Calendar3 final version he,

// import { Calendar } from "@/components/Calendar5/Calendar"; // Calendar5 after defining theme.

import { DefaultCalendarDemo } from "@/components/Calendar5/Demo/Default.demo";
import { DisableFutureDemo } from "@/components/Calendar5/Demo/DisableFuture.demo";
import { DisablePastDemo } from "@/components/Calendar5/Demo/DisablePast.demo";
import { MonthYearPickerDemo } from "@/components/Calendar5/Demo/MonthYearPicker.demo";
import { RangePickerDemo } from "@/components/Calendar5/Demo/RangePicker.demo";
// import { useState } from "react";
// import { Breadcrumb } from "@/components/Breadcrumb";
// import { AuthDemo } from "@/components/Authentication/AuthDemo";
// import { Breadcrumb } from "@/components/Breadcrumb";
const Example = () => {

  // const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // const handleDateSelect = (date: Date) => {
  //   setSelectedDates([date]);
  // };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <DefaultCalendarDemo />
      <MonthYearPickerDemo />
      <RangePickerDemo />
      <DisablePastDemo />
      <DisableFutureDemo />
    {/* <Breadcrumb /> */}
    {/* <AuthDemo /> */}
    {/* The below div was parent/main div now i wrapped up all in fragment to test 
      use below div to test only Signin form and remove AuthDemo component
    */}
    {/* <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 "> */}
      {/* <SignInForm
        onSignIn={(email, password, remember) => {
          console.log("Sign In:", { email, password, remember });
        }}
        onGoogleSignIn={() => console.log("Google Sign In")}
        onGithubSignIn={() => console.log("GitHub Sign In")}
        onSignUp={() => console.log("Sign Up")}
        onPasswordReset={() => console.log("Password Reset")}
      />   */}
      {/* <Calendar
        selectedDates={selectedDates}
        onDateSelect={handleDateSelect}
        disablePast={false}
        disableFuture={false}
        variant="range-picker"
        color="default"
        size="md"
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Music', href: '#' },
          { label: 'Artist', href: '#' },
          { label: 'Album', href: '#' },
          { label: 'Song', isCurrent: true }
        ]}
      />       */}
    {/* </div>} */}
    </div>
  );
};

export default Example;