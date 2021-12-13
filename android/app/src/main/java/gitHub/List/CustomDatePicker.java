package gitHub.List;

import android.content.Context;
import android.os.Build;
import android.widget.DatePicker;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class MyCustomView extends DatePicker {

    @RequiresApi(api = Build.VERSION_CODES.O)
    public MyCustomView(Context context) {
        super(context);
        super.setOnDateChangedListener(new OnDateChangedListener() {
            @Override
            public void onDateChanged(DatePicker datePicker, int i, int i1, int i2) {
                WritableMap event = Arguments.createMap();
                ReactContext reactContext = (ReactContext)getContext();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        getId(),
                        "onDateChanged",
                        event);
            }
        });
    }



}
