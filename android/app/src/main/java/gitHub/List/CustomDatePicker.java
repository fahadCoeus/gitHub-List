package gitHub.List;

import android.content.Context;
import android.os.Build;
import android.widget.DatePicker;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class CustomDatePicker extends DatePicker {

    @RequiresApi(api = Build.VERSION_CODES.O)
    public CustomDatePicker(Context context) {
        super(context);

        super.setOnDateChangedListener(new DatePicker.OnDateChangedListener() {
            @Override
            public void onDateChanged(DatePicker datePicker, int year, int month, int date) {

                String result = String.valueOf(date)+"/"+String.valueOf(month+1)+"/"+String.valueOf(year);
                WritableMap event = Arguments.createMap();
                event.putString("getDate", result);
                ReactContext reactContext = (ReactContext)getContext();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        getId(),
                        "onDateChanged",
                        event);
            }

        });
    }

}
